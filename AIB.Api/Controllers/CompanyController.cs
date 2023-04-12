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

    public class CompanyController : BaseController<Company, int>
    {
        private readonly IStatementService _statementService;
   
        public CompanyController(IServiceProvider serviceProvider, IMapper mapper, ICompanyService service,IStatementService statementService
    ) : base(serviceProvider, mapper, service)
        {
            _statementService = statementService;

        }

        [HttpGet("GetBrokerStatement")]
        public async Task<BaseResponse> GetStatement(int companyId)
        {
            //var transactions = (await _statementService.CreateBrokerStatement(companyId)).Select(x => new
            //{
            //    Date = x.TransactionDate,
            //    Debit = x.TransactionType == TransactionType.Debit ? x.Amount : 0,
            //    Credit = x.TransactionType == TransactionType.Credit ? x.Amount : 0,
            //    PolicyNumber = x.Company.Sa,
            //    VehileType = x.Sales.VehicleModel.Name,
            //    MotorType = x.Sales.MotorType.Name,
            //    //Balance = x.Company.Outstandings.

            //});


            return constructResponse((await _statementService.CreateBrokerStatement(companyId)));

          
        }
        [HttpGet("GetAgentStatement")]
        public async Task<BaseResponse> GetStatementForAgent(int agentId)
        {
            var transactions = (await _statementService.CreateBrokerStatement(agentId)).Select(x => new
            {
                Date = x.TransactionDate,
                Debit = x.TransactionType == TransactionType.Debit ? x.Amount : 0,
                Credit = x.TransactionType == TransactionType.Credit ? x.Amount : 0,
                PolicyNumber = x.Sales.PolicyNumber,
                CustomerName = x.Sales.CustomerName,
                VehileType = x.Sales.VehicleModel.Name,
                MotorType = x.Sales.MotorType.Name,
                //Balance = x.Company.Outstandings.

            });


            return constructResponse(transactions);


        }

       
    }
}

