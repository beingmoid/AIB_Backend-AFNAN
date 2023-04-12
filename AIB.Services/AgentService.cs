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
    public class AgentService : BaseService<Agent, int>, IAgentService
    {
        private readonly ITransactionService _service;
        public AgentService(IServiceProvider serviceProvider,IMapper mapper,IAgentRepository repository,ITransactionService service)
            :base(serviceProvider,mapper,repository)
        {
            _service = service;
        }
        protected override Task WhileInserting(IEnumerable<Agent> entities)
        {
            foreach (var item in entities)
            {
                var transaction = new Transaction();
                transaction.TransactionDate = DateTime.Now;
                transaction.TransactionType = TransactionType.Credit;
                transaction.Amount = item.OpeningBalance;
                item.Transactions.Add(transaction);

            }
            return base.WhileInserting(entities);
        }
        protected async override Task OnDeleted(IEnumerable<Agent> entities)
        {
            foreach (var item in entities)
            {
                var transactions = await _service.Get(x => x.AgentId == item.Id);

                foreach (var tran in transactions.Values)
                {
                    await _service.Delete(tran.Id);
                }

            }
            //return base.OnDeleted(entities);
        }
    }
    public interface IAgentService : IBaseService<Agent, int>
    {

    }
}
