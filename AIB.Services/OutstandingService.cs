using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AIB.Services.Core
{
    public class OutstandingService : BaseService<Outstandings,int>, IOutstandingService
    {
        private IOutstandingsRepository _repository;
        private ITransactionService _transactions;

        public OutstandingService(IServiceProvider serviceProvider,IMapper mapper,IOutstandingsRepository repository)
            :base(serviceProvider,mapper,repository)
        {
            _repository = repository;
        }
        protected override Task WhileInserting(IEnumerable<Outstandings> entities)
        {
            foreach (var item in entities)
            {
                item.DateOfOutstanding = DateTime.Now;
            }
            return base.WhileInserting(entities);
        }
        public async Task<List<Outstandings>> OutStandingsForAgent()
        {
            return (await _repository.Get(x => x.Include(x => x.Company).Include(x => x.Agent).Include(x => x.Sales).Include(x=>x.Transaction), x => x.CompanyId == null)).Values.ToList();
        }

        public async Task<List<Outstandings>> OutStandingsForCompany()
        {   
        
            return (await _repository.Get(x=>x.Include(x => x.Company).Include(x => x.Agent).Include(x => x.Sales).Include(x => x.Transaction), x => x.AgentId == null)).Values.ToList();
        }
    }
    public interface IOutstandingService : IBaseService<Outstandings, int>
    {
        Task<List<Outstandings>> OutStandingsForCompany();
        Task<List<Outstandings>> OutStandingsForAgent();

    }
}
