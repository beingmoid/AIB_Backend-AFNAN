using AIB.Common;
using AIB.Data;
using AIB.Data.DTOs;
using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Services.Core;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AIB.Common.Constants;

namespace AIB.Api.Controllers
{

	public class UserController : BaseController
	{
		private readonly IExtendedUserRepository _repository;
        private readonly IServiceProvider _serviceProvider;

        public UserController(IServiceProvider serviceProvider, IMapper mapper, IExtendedUserRepository repository, IBankAccountService service)
			: base(serviceProvider, mapper, service)
		{
			_repository = repository;
			_serviceProvider = serviceProvider;	
		}

		[HttpPost]
		[Route("CreateTeamMember")]
		public async Task<BaseResponse> CreateTeamMember([FromBody] TeamMemberDTO register)
		{
			register.TypeOfUser = TypeOfUser.Broker;
			return constructResponse(await _repository.CreateTeamMember(register));
		}
		public async Task<BaseResponse> FilterList()
		{
			var context = _serviceProvider.GetRequiredService<AIBContext>();
			var managers = context.Set<ExtendedUser>().Where(x => x.isManager ).ToList();

			OtherConstants.isSuccessful = true;
			return constructResponse(managers);

        }
		[HttpDelete("{id}")]
		public async Task<BaseResponse> Delete(string id)
		{
			return constructResponse(await _repository.DeleteTeamMember(id));
		}
		[HttpPut("{id}")]
		[Route("UpdateTeamMember")]
		public async Task<BaseResponse> UpdateUserCompany(string id,[FromBody] TeamMemberDTO model)
		{
			
			return constructResponse(await _repository.UpdateTeamMember(id, model));
		}
		[HttpGet]
		[Route("GetTeamMembers")]
		public async Task<BaseResponse> GetTeamMembers()
		{

			return constructResponse(await _repository.GetTeamMembers());
		}
	}
}
