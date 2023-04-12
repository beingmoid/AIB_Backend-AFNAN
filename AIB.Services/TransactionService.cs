using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;
using AIB.Services.Core.Utility;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static AIB.Common.Constants;

namespace AIB.Services.Core
{
    public class TransactionService : BaseService<Transaction,int>, ITransactionService
    {
        private readonly IBankAccountService _bankAccountService;
        private readonly IOutstandingService _outStandingService;

        public TransactionService(IServiceProvider serviceProvider,IMapper mapper,ITransactionRepository repository,
            IBankAccountService bankAccountService,
            IOutstandingService outStandingService)
            :base(serviceProvider,mapper,repository)
        {
            _bankAccountService = bankAccountService;
            _outStandingService = outStandingService;
        }
        protected override Task WhileInserting(IEnumerable<Transaction> entities)
        {
            foreach (var item in entities)
            {
                if (item.AgentId!=null && item.CompanyId!=null)
                {
                    OtherConstants.isSuccessful = false;
                    throw new ServiceException("Transactions cannot be done for both company and agent");
                }

                

            }
            return base.WhileInserting(entities);
        }
        protected async override Task OnInserted(IEnumerable<Transaction> entities)
        {
            foreach (var item in entities)
            {
                if (item.TransactionType==TransactionType.Credit && item.BankId!=null)
                {
                    var bank = await _bankAccountService.GetOne(x => x.Id == item.BankId);
                    bank.Amount -= item.Amount;
                    await _bankAccountService.Update(bank.Id, bank);
                }
                else if (item.TransactionType==TransactionType.Debit)
                {
                    var bank = await _bankAccountService.GetOne(x => x.Id == item.BankId);
                    bank.Amount += item.Amount;
                    await _bankAccountService.Update(bank.Id, bank);
                    
                }
                //if (item.AgentId>0 && item.TransactionType== TransactionType.Debit)
                //{
                //    var outstandings = (await _outStandingService.Get(x => x.AgentId == item.AgentId)).Values.ToList();
                //    var totalAmount = outstandings.Sum(x => x.Amount);
                //    var receivingAmount = item.Amount;
                //    var noOfOutStandings = outstandings.Count;
                //    var perOutstandingAmountTobeMinused = receivingAmount / noOfOutStandings;
                //    foreach (var entity in outstandings)
                //    {
                //        entity.Amount -= perOutstandingAmountTobeMinused;
                //        await _outStandingService.Update(entity.Id, entity);
                //    }


                //}
                //if (item.CompanyId>0 && item.TransactionType == TransactionType.Credit)
                //{
                //    var outstandings = (await _outStandingService.Get(x => x.CompanyId == item.CompanyId)).Values.ToList();
                //    var totalAmount = outstandings.Sum(x => x.Amount);
                //    var receivingAmount = item.Amount;
                //    var noOfOutStandings = outstandings.Count;
                //    var perOutstandingAmountTobeMinused = receivingAmount / noOfOutStandings;
                //    foreach (var entity in outstandings)
                //    {
                //        entity.Amount -= perOutstandingAmountTobeMinused;
                //        await _outStandingService.Update(entity.Id, entity);
                //    }

                //}
            }
       
        }
        protected async override Task WhileUpdating(IEnumerable<Transaction> entities)
        {
            foreach (var item in entities)
            {
                if (item.TransactionType == TransactionType.Credit && item.BankId != null)
                {
                    var bank = await _bankAccountService.GetOne(x => x.Id == item.BankId);
                    var transaction = await this.GetOne(x => x.Id == item.Id);
                    bank.Amount += transaction.Amount;
                    bank.Amount -= item.Amount;
                    await _bankAccountService.Update(bank.Id, bank);
                }
                else if (item.TransactionType == TransactionType.Debit && item.BankId != null)
                {
                    var bank = await _bankAccountService.GetOne(x => x.Id == item.BankId);
                    var transaction = await this.GetOne(x => x.Id == item.Id);
                    bank.Amount -= transaction.Amount;
                    bank.Amount += item.Amount;
                    await _bankAccountService.Update(bank.Id, bank); 

                }

              


            }
           
        }
        protected async override Task WhileDeleting(IEnumerable<Transaction> entities)
        {

            
        }
        protected async override Task OnDeleted(IEnumerable<Transaction> entities)
        {

            foreach (var item in entities)
            {
                if (item.TransactionType == TransactionType.Credit && item.BankId != null)
                {
                    var bank = await _bankAccountService.GetOne(x => x.Id == item.BankId);
                    var transaction = await this.GetOne(x => x.Id == item.Id);
                    bank.Amount += item.Amount;

                    await _bankAccountService.Update(bank.Id, bank);
                }
                else if (item.TransactionType == TransactionType.Debit && item.BankId != null)
                {
                    var bank = await _bankAccountService.GetOne(x => x.Id == item.BankId);
                    var transaction = await this.GetOne(x => x.Id == item.Id);
                    bank.Amount -= item.Amount;
                    await _bankAccountService.Update(bank.Id, bank);

                }

            }
            //return await Task.FromResult(base.OnDeleted(entities));
        }
    }
    public interface ITransactionService : IBaseService<Transaction, int>
    {

    }
}
