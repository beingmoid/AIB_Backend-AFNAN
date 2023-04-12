using AIB.Data.Entities;
using AIB.Services.Core;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AIB.Api.Controllers
{

    public class BankAccountController : BaseController<BankAccount, int>
    {
        private readonly IBankAccountService _service;
        private readonly ITransactionService tranService;

        public BankAccountController(IServiceProvider serviceProvider, IMapper mapper, IBankAccountService service,ITransactionService tranService) : base(serviceProvider, mapper, service)
        {
            _service = service;
            this.tranService = tranService;
        }

        //public async override Task<ActionResult> Get()
        //{

        //    var banks = (await this.tranService.Get(x => x.Include(x => x.Bank), x => x.BankId != null)).Values.ToList().GroupBy(x => x.Bank.BankName)
        //        .Select(x=> new BankAccount {
                
        //            BankName=x.Key,
        //            Amount=x.Where(x=>x.TransactionType==TransactionType.Debit).Sum(x=>x.Amount)- x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount),
        //            Id=x.Select(x=>x.Bank.Id)

        //        });
        //    return new JsonResult(constructResponse(_service.Get()));
        //}
    }
}
