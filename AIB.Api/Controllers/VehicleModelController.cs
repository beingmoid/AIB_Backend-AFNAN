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

    public class VehicleModelController : BaseController<VehicleModel, int>
    {
        private readonly IVehicleModelService _service;

        public VehicleModelController(IServiceProvider serviceProvider, IMapper mapper, IVehicleModelService service) : base(serviceProvider, mapper, service)
        {
            _service = service;
        }
        [HttpGet("FilterList")]
        public async Task<BaseResponse> FilterList(string search)
        {
            return constructResponse(await _service.Filterlist(search));
        }
    }
}
