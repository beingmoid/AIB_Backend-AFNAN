using AIB.Common;
using AIB.Data.Entities;
using AIB.Services.Core;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AIB.Api.Controllers
{

    public class MotorTypeController : BaseController<MotorType, int>
    {
        private readonly IMotorTypeService _service;

        public MotorTypeController(IServiceProvider serviceProvider, IMapper mapper, IMotorTypeService service) : base(serviceProvider, mapper, service)
        {
            _service = service;
        }


        [HttpGet("FilterList")]
        public async Task<BaseResponse> FilterList(string search)
        {
            return constructResponse( await _service.Filterlist(search));
        }
    }
}
