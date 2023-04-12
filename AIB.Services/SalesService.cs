using AIB.Data;
using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIB.Services.Core
{
    public class SalesService : BaseService<Sales,int>, ISalesService
    {
        private readonly IOutstandingService _outstandingService;
        private readonly ITransactionRepository transactionService;
        private readonly ITransactionService _tranService;
        private AIBContext _requestScope;
        private readonly ISalesRepository _repo;

        public SalesService(IServiceProvider serviceProvider,IMapper mapper,ISalesRepository repository, IOutstandingService outstandingService,
            ITransactionRepository transactionService,
            ITransactionService tranService, AIBContext requestScope)
            :base(serviceProvider,mapper,repository)
        {
            _outstandingService = outstandingService;
            this.transactionService = transactionService;
            this._tranService = tranService;
            _requestScope = requestScope;
            _repo = repository;
        }
        protected async override Task WhileInserting(IEnumerable<Sales> entities)
        {

        
             await base.WhileInserting(entities);
        }
        protected async override Task WhileUpdating(IEnumerable<Sales> entities)
        {
            foreach (var entity in entities)
            {
                //var agentOutstandings = await _outstandingService.GetOne(x => x.SalesId == entity.Id);
                //agentOutstandings.AgentId = entity.SalesAgentId;
                //agentOutstandings.Amount = entity.SalesPrice;
                //agentOutstandings.DateOfOutstanding = entity.SalesDate;
                //entity.Outstandings.Add(agentOutstandings);
                //var companyOutStandings = await _outstandingService.GetOne(x => x.SalesId == entity.Id);
                //companyOutStandings.CompanyId = entity.CompanyId;
                //companyOutStandings.Amount = entity.NETPrice;
                //agentOutstandings.DateOfOutstanding = entity.SalesDate;
                //entity.Outstandings.Add(companyOutStandings);

            }

        }
        protected async override Task OnInserted(IEnumerable<Sales> entities)
        {
            foreach (var entity in entities)
            {
                var transaction = new Transaction();
                transaction.TransactionType = TransactionType.Debit;   
                transaction.Amount = entity.NETPrice;
                transaction.CompanyId = entity.CompanyId;
                transaction.SalesId = entity.Id;
                transaction.BranchId= entity.BranchId;
                transaction.TransactionDate = entity.SalesDate.Date;
                

               await transactionService.Insert(new[] { transaction });
                await transactionService.SaveChanges();
                var transactionAgent = new Transaction();
                transactionAgent.TransactionType = TransactionType.Credit;
                transactionAgent.Amount = entity.SalesPrice;
                transactionAgent.AgentId = entity.SalesAgentId;
                transactionAgent.SalesId = entity.Id;
                transaction.BranchId = entity.BranchId;
                transactionAgent.TransactionDate = entity.SalesDate.Date;


                await transactionService.Insert(new[] { transactionAgent });
                await transactionService.SaveChanges();
            }
         
          
        }
        protected async override Task OnUpdated(IEnumerable<Sales> entities)
        {
            foreach (var entity in entities)
            {
                var Alltransaction = (await transactionService.Get(x => x.SalesId == entity.Id)).Values.ToList();
                var transaction = Alltransaction.SingleOrDefault(x => x.TransactionType == TransactionType.Debit);
                transaction.TransactionType = TransactionType.Debit;
                transaction.Amount = entity.NETPrice;
                transaction.CompanyId = entity.CompanyId;
                transaction.SalesId = entity.Id;
                transaction.BranchId = entity.BranchId;
                transaction.TransactionDate = entity.SalesDate.Date;


               
                 await _tranService.Update(transaction.Id, transaction);
            
                var transactionAgent = Alltransaction.SingleOrDefault(x => x.TransactionType == TransactionType.Credit);
                transactionAgent.TransactionType = TransactionType.Credit;
                transactionAgent.Amount = entity.SalesPrice;
                transactionAgent.AgentId = entity.SalesAgentId;
                transactionAgent.SalesId = entity.Id;
                transaction.BranchId = entity.BranchId;
                transactionAgent.TransactionDate = entity.SalesDate.Date;


                await _tranService.Update(transactionAgent.Id, transactionAgent);
              ;
            }
 
        }
        protected async override Task WhileDeleting(IEnumerable<Sales> entities)
        {
            //var outstanding = await _outstandingService.GetOne(x => x.SalesId == entities.ToList()[0].Id);
            //await _outstandingService.Delete(outstanding.Id);
            var transaction = (await _tranService.Get(x => x.SalesId == entities.ToList()[0].Id)).Values;
            foreach (var item in transaction)
            {
                await _tranService.Delete(item.Id);
            }
          



        }

        public async Task<List<Sales>> GetPaginatedAPI(int page = 1, int pageSize = 10)
        {
            return await _repo.GetPaginatedAPI(page, pageSize);
        }

    }
    public interface ISalesService : IBaseService<Sales, int>
    {
        Task<List<Sales>> GetPaginatedAPI(int page, int pageSize);
    }
}
