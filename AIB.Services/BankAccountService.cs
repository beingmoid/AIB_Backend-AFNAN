using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AIB.Services.Core
{
    public class BankAccountService:BaseService<BankAccount,int>,IBankAccountService
    {
        private readonly ITransactionRepository _tranRepo;

        public BankAccountService(IServiceProvider serviceProvider,IMapper mapper,IBankAccountRepository repository,ITransactionRepository tranRepo)
            :base(serviceProvider,mapper,repository)
        {
            _tranRepo = tranRepo;
        }

        protected override Task OnInserted(IEnumerable<BankAccount> entities)
        {
            foreach (var item in entities)
            {
                var trans = new Transaction();
                trans.BankId = item.Id;
                trans.Amount = item.Amount;
                trans.TransactionType = TransactionType.Debit;
                trans.TransactionDate = DateTime.Now.Date;
                _tranRepo.Insert(new[] { trans});
                _tranRepo.SaveChanges();
            }
            return base.OnInserted(entities);
        }
    }
    public interface IBankAccountService:IBaseService<BankAccount,int>
    {

    }
}
