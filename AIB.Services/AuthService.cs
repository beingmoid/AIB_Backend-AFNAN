using AIB.Common.EmailService;
using AIB.Data.DTOs;
using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;

using AutoMapper;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using static AIB.Common.Constants;

namespace AIB.Services.Core
{
    public class AuthService : BaseService,IAuthService
    {

        private UserManager<ExtendedUser> _userManager;
        private readonly IServiceProvider _serviceProvider;
        private ITokenService _tokenService;
        private readonly RoleManager<ExtendedRole> _roleManager;
        private IMapper _mapper;

        public AuthService(IServiceProvider serviceProvider,IMapper mapper ,UserManager<ExtendedUser> userManager,ITokenService tokenService
            
            ,RoleManager<ExtendedRole> roleManager)
            :base(mapper)
        {
            _userManager=userManager;
            _serviceProvider = serviceProvider;
            _tokenService = tokenService;
            _roleManager = roleManager;
            _mapper = mapper;
        }
        public async Task<LoginInfo> ProcessLogin(LoginInfo loginInfo)
            {
            var user = await _userManager.FindByEmailAsync(loginInfo.EmailAddress);
            var _roleManager = _serviceProvider.GetRequiredService<RoleManager<ExtendedRole>>();
            if (user!=null)
            {
                var signIn = await _serviceProvider.GetRequiredService<SignInManager<ExtendedUser>>().PasswordSignInAsync(user, loginInfo.Password, true, true);
                if (signIn.Succeeded)
                {
                    OtherConstants.isSuccessful = true;
                    var userRoles = await _userManager.GetRolesAsync(user);
                    var claims = new List<Claim>()
                    {
                        new Claim("UserId", user.Id),
                        new Claim("UserName",user.UserName),
                        new Claim("Role", userRoles.FirstOrDefault())
                    };
                    var role = await _roleManager.FindByNameAsync(userRoles.FirstOrDefault());
                    var claimsList = await _roleManager.GetClaimsAsync(role);
                    claims.AddRange(claimsList.ToList());

                    foreach (var item in userRoles)
                        claims.Add(new Claim(ClaimTypes.Role, item));
                    var accessToken = _tokenService.GenerateAccessToken(claims);
                    return new LoginInfo()
                    {
                        Token = accessToken,
                        EmailAddress = user.Email,
                    };

                }
            }
            else
            {
                OtherConstants.isSuccessful = false;
                OtherConstants.messageType = MessageType.Error;
            }
            return new LoginInfo();
        
        }
        public async Task<bool> ResetPasswordWithToken(ResetPasswordDTO model)
        {
            var _userManager = _serviceProvider.GetRequiredService<UserManager<ExtendedUser>>();
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user != null && !string.IsNullOrWhiteSpace(model.Token))
            {
                model.Token = model.Token.Replace(" ", "+");
                var result = await _userManager.ResetPasswordAsync(user, model.Token, model.NewPassword);
                if (result.Succeeded)
                {
                    OtherConstants.responseMsg = "Password Updated Successfully.";
                    OtherConstants.isSuccessful = true;
                }
                else
                {
                    OtherConstants.responseMsg = "Password Reset token expired.";
                    OtherConstants.isSuccessful = false;
                }
            }
            else
            {
                OtherConstants.responseMsg = "Email not found.";
                OtherConstants.isSuccessful = false;
            }

            return OtherConstants.isSuccessful;
        }
        public async Task<bool> GenerateForgotPasswordToken(string email)
        {
            var _userManager = _serviceProvider.GetRequiredService<UserManager<ExtendedUser>>();
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                var currentRoles = await _userManager.GetRolesAsync(user);
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                var url =  DomainConfiguration.PortalAppDomain + $"#/auth/new-password?userid={user.Id}&token={token}";
                var body = CreateEmailTemplate(url, EmailTemplateConfiguration.ResetEmailDescription, EmailTemplateConfiguration.ResetEmailButtonTitle, EmailTemplateConfiguration.ResetEmailMessage, EmailTemplateConfiguration.ResetEmailAddress);

                var isEmailSent = _serviceProvider.GetRequiredService<IEmailService>().
                    SendEmailWithoutTemplate(user.Email
                    , 
                    "Reset Password", 
                    body,
                    ""
                    , true);
                if (isEmailSent)
                    OtherConstants.isSuccessful = true;
                else
                    OtherConstants.isSuccessful = false;
            }
            else
                OtherConstants.isSuccessful = false;

            return OtherConstants.isSuccessful;
        }
        public async Task<bool> CreateNewPassword(ResetPasswordDTO model)
        {
            var _userManager = _serviceProvider.GetRequiredService<UserManager<ExtendedUser>>();
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user != null)
            {

                var result = await _userManager.AddPasswordAsync(user, model.NewPassword);
                if (result.Succeeded)
                {

                    user.EmailConfirmed = true;
                    var res = await _userManager.UpdateAsync(user);
                    if (res.Succeeded)
                    {
                        OtherConstants.responseMsg = "Password Created Successfully.";
                        OtherConstants.isSuccessful = true;
                    }
                    else
                    {
                        OtherConstants.responseMsg = "Password Creation Failed.";
                        OtherConstants.isSuccessful = false;
                    }
                }
                else
                {
                    OtherConstants.responseMsg = "Password Creation Failed.";
                    OtherConstants.isSuccessful = false;
                }
            }
            else
            {
                OtherConstants.responseMsg = "Password is already created.";

                OtherConstants.isSuccessful = false;
            }
        
            
          

            return OtherConstants.isSuccessful;
        }
        private string CreateEmailTemplate(string link, string description, string buttonTitle, string message, string address)
        {
            var _env = _serviceProvider.GetRequiredService<IHostingEnvironment>();
            string path = Path.Combine(_env.ContentRootPath, "EmailTemplates\\EmailTemplateForVerifyAndReset.html");
            if (System.IO.File.Exists(path))
            {
                string html = System.IO.File.ReadAllText(path);
                html = html.Replace("{logoLink}", LogoConfigurations.PortalFrontEndLogo);
                html = html.Replace("{description}", description);
                html = html.Replace("{link}", link);
                html = html.Replace("{buttonTitle}", buttonTitle);
                html = html.Replace("{message}", message);
                html = html.Replace("{address}", address);
                return html;
            }
            return null;
        }

        public async Task<bool> CreateRoleWithClaims(RoleClaimsDTO model)
        {

            var role = await _roleManager.FindByNameAsync(model.RoleName.Trim());
            if (role == null)
            {
                ExtendedRole extendedRole = new ExtendedRole();
                extendedRole.Name = model.RoleName.Trim();
                var result = await _roleManager.CreateAsync(extendedRole);
                foreach (var claimType in model.ClaimType)
                {
                    var claims = new List<Claim>();
                    if (claimType.ClaimValue.Create)
                    {
                        Claim claim = new Claim(claimType.ClaimTypeName, ClaimValue.Create);
                        claims.Add(claim);
                    }
                    if (claimType.ClaimValue.Edit)
                    {
                        Claim claim = new Claim(claimType.ClaimTypeName, ClaimValue.Edit);
                        claims.Add(claim);
                    }
                    if (claimType.ClaimValue.View)
                    {
                        Claim claim = new Claim(claimType.ClaimTypeName, ClaimValue.View);
                        claims.Add(claim);
                    }
                    if (claimType.ClaimValue.Delete)
                    {
                        Claim claim = new Claim(claimType.ClaimTypeName, ClaimValue.Delete);
                        claims.Add(claim);
                    }

                    foreach (var item in claims)
                    {
                        await _roleManager.AddClaimAsync(extendedRole, item);
                    }
                }
                OtherConstants.isSuccessful = true;
                return true;
            }
            else
            {
                OtherConstants.isSuccessful = false;
                OtherConstants.responseMsg = "Role already exsists.";
                return false;
            }
        }
        public async Task<bool> UpdateRoleWithClaims(string roleId, RoleClaimsDTO model)
        {

            var role = await _roleManager.FindByIdAsync(roleId);
            if (role != null)
            {
                role.Name = model.RoleName.Trim();
                await _roleManager.UpdateAsync(role);
                var claimsList = await _roleManager.GetClaimsAsync(role);
                foreach (var claim in claimsList)
                {
                    await _roleManager.RemoveClaimAsync(role, claim);
                }
                foreach (var claimType in model.ClaimType)
                {

                    var claims = new List<Claim>();
                    if (claimType.ClaimValue.Create)
                    {
                        Claim claim = new Claim(claimType.ClaimTypeName, ClaimValue.Create);
                        claims.Add(claim);
                    }
                    if (claimType.ClaimValue.Edit)
                    {
                        Claim claim = new Claim(claimType.ClaimTypeName, ClaimValue.Edit);
                        claims.Add(claim);
                    }
                    if (claimType.ClaimValue.View)
                    {
                        Claim claim = new Claim(claimType.ClaimTypeName, ClaimValue.View);
                        claims.Add(claim);
                    }
                    if (claimType.ClaimValue.Delete)
                    {
                        Claim claim = new Claim(claimType.ClaimTypeName, ClaimValue.Delete);
                        claims.Add(claim);
                    }

                    foreach (var item in claims)
                    {
                        await _roleManager.AddClaimAsync(role, item);
                    }
                }
                OtherConstants.isSuccessful = true;
                return true;
            }
            else
            {
                OtherConstants.isSuccessful = false;
                return false;
            }
        }

        public async Task<IEnumerable<RoleDTO>> GetAllRoles()
        {
            List<RoleDTO> list = new List<RoleDTO>();
            var rolesList = _roleManager.Roles.ToList();
            foreach (var item in rolesList)
            {
                RoleDTO role = new RoleDTO();
                role.Id = item.Id;
                role.RoleName = item.Name;
                var usersList = await _userManager.GetUsersInRoleAsync(item.Name);
                role.NoOfUsers = usersList.Count();
                list.Add(role);
            }
            return list;
        }

        public async Task<List<TeamMemberDTO>> GetUsersForCurrentTenant()
        {
            var _roleManager = _serviceProvider.GetRequiredService<RoleManager<ExtendedRole>>();
            var _userManager = _serviceProvider.GetRequiredService<UserManager<ExtendedUser>>();
            //var _loginRepo = _serviceProvider.GetRequiredService<ILoginsRepo>();
            var users = _userManager.Users.ToList();
            var mappedTeamMember = _mapper.Map<List<TeamMemberDTO>>(users);
            //var loginDetails = _loginRepo.Get().IgnoreQueryFilters().OrderByDescending(p => p.CreatedDate);
            foreach (var item in users.Select((value, i) => new { i, value }))
            {
                //var lastloginDetail = loginDetails.Where(p => p.UserId == item.value.Id);
                var userRoles = await _userManager.GetRolesAsync(item.value);
                var role = userRoles.FirstOrDefault();
                mappedTeamMember[item.i].Role = role;
                //if (lastloginDetail.Any())
                //    mappedTeamMember[item.i].LastLoggedIn = lastloginDetail.FirstOrDefault().CreatedDate;
            }
            return mappedTeamMember;
        }
    }
    public interface IAuthService : IBaseService
    {
        Task<LoginInfo> ProcessLogin(LoginInfo loginInfo);
        Task<bool> ResetPasswordWithToken(ResetPasswordDTO model);
        Task<bool> GenerateForgotPasswordToken(string email);
        Task<bool> CreateNewPassword(ResetPasswordDTO model);
        Task<bool> CreateRoleWithClaims(RoleClaimsDTO model);
        Task<bool> UpdateRoleWithClaims(string roleId, RoleClaimsDTO model);
        Task<List<TeamMemberDTO>> GetUsersForCurrentTenant();
        Task<IEnumerable<RoleDTO>> GetAllRoles();


    }
    public class RoleDTO : BaseDTO
    {
        public string Id { get; set; }
        public string RoleName { get; set; }
        public int NoOfUsers { get; set; }
    }
    public class ResetPasswordDTO
    {
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
        public bool EnableTwoStepVerification { get; set; }
        public string UserId { get; set; }
        public string Token { get; set; }
    }
    public class LoginInfo
    {
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }

    }
   
}
