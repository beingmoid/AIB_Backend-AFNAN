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

    public class OutstandingsController : BaseController<Outstandings, int>
    {
        private readonly IOutstandingService _service;

        public OutstandingsController(IServiceProvider serviceProvider, IMapper mapper, IOutstandingService service) : base(serviceProvider, mapper, service)
        {
            _service = service;
        }



        [HttpGet("GetCompanyOutStandings")]
        public async Task<BaseResponse> GetCompanyOutstandings()
        {
            return constructResponse((await _service.OutStandingsForCompany()).ToList().GroupBy(x => x.Company.Name).Select(group=> new { 
                Company = group.Key,
                Payable= group.Sum(x=>x.Amount),
                data= group.ToList()
            
            }));
        }
        [HttpGet("GetAgentOutStandings")]
        public async Task<BaseResponse> GetAgentOutStandings()
        {
            return constructResponse((await _service.OutStandingsForAgent()).ToList().GroupBy(x => x.Agent.Name).Select(group => new {
                Agent = group.Key,
                Receving = group.Sum(x => x.Amount),
                data = group.ToList()

            }));
        }
    }
}
