using AIB.Common;
using AIB.Data;
using AIB.Data.DTOs;
using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Services.Core;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AIB.Api.Controllers
{

    public class AuthController : BaseController
    {uybhj67e3qa
        private readonly IAuthService _service;
        private readonly AIBContext _context;
        private readonly IExtendedUserRepository _repo;

        public AuthController(IServiceProvider serviceProvider, 
            AIBContext context,
            IMapper mapper, IAuthService service, IExtendedUserRepository repo) : base(serviceProvider, mapper, service)
        {
            _service = service;
            _context = context;
            _repo = repo;
        }
        [AllowAnonymous]
        [HttpPost]
        public async Task<BaseResponse> ProcessLogin([FromBody]LoginInfo loginInfo) => constructResponse(await _service.ProcessLogin(loginInfo));

        [HttpGet("GenerateForgotPasswordToken")]
        public async Task<BaseResponse> GenerateForgotPasswordToken(string email) => constructResponse(await _service.GenerateForgotPasswordToken(email));

        [HttpPost("ResetPasswordWithToken")]
        public async Task<BaseResponse> ResetPasswordWithToken([FromBody] ResetPasswordDTO model) => constructResponse(await _service.ResetPasswordWithToken(model));

        [HttpPost("CreateNewPassword")]
        public async Task<BaseResponse> CreateNewPassword([FromBody] ResetPasswordDTO model) => constructResponse(await _service.CreateNewPassword(model));
        [HttpPost("CreateRoleWithClaims")]
        public async Task<BaseResponse> CreateRoleWithClaims([FromBody] RoleClaimsDTO model) => constructResponse(await _service.CreateRoleWithClaims(model));
        [HttpGet("GetUser")]
        public async Task<BaseResponse> GetUsers() => constructResponse(await _service.GetUsersForCurrentTenant());

        [HttpGet("GetAllRoles")]
        public async Task<BaseResponse> GetAllRoles ()=> constructResponse(await _service.GetAllRoles());
        [AllowAnonymous]
        [HttpPost("OnBoardingProcess")]
        public async Task<BaseResponse> OnBoardingProcess([FromBody] OnBoarding model) => 
            constructResponse(await _repo.OnBoardingMember(model));



        [HttpGet("GetLoggedInUser")]
        public async Task<BaseResponse> GetLoggedInUser()
        {
            
            // Get the logged-in user's ID
            string userId = this.HttpContext.User.GetUserId();

            // Get the logged-in user's username or email
            string username = User.FindFirstValue(ClaimTypes.Name);

            // Add more claim types if needed
            var userInDB = _context.Set<ExtendedUser>().Where(x => x.Id == userId).SingleOrDefault();


            // Return user information

            return constructResponse(userInDB ?? null);
         
        }


    }
}
