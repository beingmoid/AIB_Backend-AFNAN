using AIB.Common;
using AIB.Data.DTOs;
using AIB.Data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AIB.Common.Constants;

namespace AIB.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly IExtendedRoleRepository _extendedRoleRepository;

        public RolesController(IExtendedRoleRepository extendedRoleRepository)
        {
            _extendedRoleRepository = extendedRoleRepository;
        }

        protected BaseResponse constructResponse(object response)
        {
            return new BaseResponse()
            {
                dynamicResult = response,
                isSuccessfull = OtherConstants.isSuccessful,
                statusCode = response != null ? 200 : 500,
                messageType = OtherConstants.messageType,
                message = OtherConstants.responseMsg,
                errorMessage = OtherConstants.responseMsg,
                NewAccessToken = Utils.NewAccessToken ?? null
            };
        }

        [HttpPost]
        [Route("CreateRoleWithClaims")]
        public async Task<BaseResponse> CreateRoleWithClaims(RoleClaimsDTO roleClaimsDTO)
        {
            return constructResponse(await _extendedRoleRepository.CreateRoleWithClaims(roleClaimsDTO));
        }

        [HttpPut]
        [Route("UpdateRoleWithClaims/{id}")]
        public async Task<BaseResponse> UpdateRoleWithClaims(string id, [FromBody] RoleClaimsDTO roleClaimsDTO)
        {
            return constructResponse(await _extendedRoleRepository.UpdateRoleWithClaims(id, roleClaimsDTO));
        }

        //[HttpGet]
        //[Route("GetClaimsAgainstRole/{id}")]
        //public async Task<BaseResponse> GetClaimsAgainstRole(string id)
        //{
        //    return constructResponse(await _extendedRoleRepository.GetClaimsAgainstRole(id));
        //}

        [HttpGet]
        [Route("GetAllRoles")]
        public async Task<BaseResponse> GetAllRoles()
        {
            return constructResponse(await _extendedRoleRepository.GetAllRoles());
        }

        [HttpDelete("{id}")]
        public async Task<BaseResponse> Delete(string id)
        {
            return constructResponse(await _extendedRoleRepository.DeleteRole(id));
        }
    }
}
