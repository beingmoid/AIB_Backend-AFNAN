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

    public class InvoiceController : BaseController<Invoice, int>
    {
        public InvoiceController(IServiceProvider serviceProvider, IMapper mapper, IInvoiceService service) : base(serviceProvider, mapper, service)
        {
        }
    }
}
