using AIB.Common;
using AIB.Services.Core;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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
	[Authorize]
	public abstract class BaseController : ControllerBase
	{
		public BaseController(IServiceProvider serviceProvider, IMapper mapper ,IBaseService service)
		{

		}

		protected IBaseService Service { get; }
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
	}

	public abstract class BaseController<TEntity, TKey> : BaseController
		where TEntity : class, IBaseEntity<TKey>, new()
	{
		public BaseController(IServiceProvider serviceProvider, IMapper mapper, IBaseService<TEntity, TKey> service)
			: base(serviceProvider, mapper,service)
		{
			this.Service = service;
		}

		protected new IBaseService<TEntity, TKey> Service { get; }
		// GET api/values
		[HttpGet]
		public virtual async Task<BaseResponse> Get()
		{
			var result = await this.Service.Get();
			OtherConstants.isSuccessful = true;
			return constructResponse(result.Values.ToList());
		}

		//[HttpGet("GetPaginated")]
		//public virtual async Task<ActionResult> Get(int page=1, int pageSize=10)
		//{
		//	var result = await this.Service.GetPaginated(page,pageSize);
		//	OtherConstants.isSuccessful = true;
		//	return new JsonResult(constructResponse(result));
		//}

		// GET api/values/5
		[HttpGet("{id}")]
		[AllowAnonymous]
		public virtual async Task<BaseResponse> Get(TKey id) => constructResponse(await this.Service.GetOne(o => o.Id.Equals(id)));

		// POST api/values
		[HttpPost]
		[AllowAnonymous]
		public virtual async Task<BaseResponse> Post([FromBody] TEntity entity)
		{
			var result = await Service.Insert(new[] { entity });
			if (result.Success)
			{
				OtherConstants.isSuccessful = true;
				return constructResponse(result.Entities.Single().Value);
			}
			else
			{
				OtherConstants.isSuccessful = false;
				return constructResponse(null);
			}
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public virtual async Task<BaseResponse> Put(TKey id, [FromBody] TEntity entity)
		{
			var result = await Service.Update(id, entity);
			if (result.Success)
			{
				OtherConstants.isSuccessful = true;
				return constructResponse(result.Entity);
			}
			else
			{
				OtherConstants.isSuccessful = false;
				return constructResponse(null);
			}
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public virtual async Task<BaseResponse> Delete(TKey id)
		{
			var result = await this.Service.Delete(id);
			if (result)
			{
				OtherConstants.isSuccessful = true;
				return constructResponse(result);
			}
			else
			{
				OtherConstants.isSuccessful = false;
				return constructResponse(null);
			}
		}
	}
}
