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

    public class AgentController : BaseController<Agent, int>
    {
        public AgentController(IServiceProvider serviceProvider, IMapper mapper, IAgentService service) : base(serviceProvider, mapper, service)
        {
        }

    }
}
