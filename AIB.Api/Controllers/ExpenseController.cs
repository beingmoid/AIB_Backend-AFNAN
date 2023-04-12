using AIB.Common;
using AIB.Data.Entities;
using AIB.Services;
using AIB.Services.Core;
using AutoMapper;
using DinkToPdf;
using DinkToPdf.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wkhtmltopdf.NetCore;

namespace AIB.Api.Controllers
{

    public class ExpenseController : BaseController<Expense, int>
    {

   
        public ExpenseController(IServiceProvider serviceProvider, IMapper mapper, IExpenseService service
    ) : base(serviceProvider, mapper, service)
        {

        }

    }
}
