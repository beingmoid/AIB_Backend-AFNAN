using AIB.Services.Core;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AIB.Data.Repositories;

using System.Linq;
using AIB.Data.Entities;

namespace AIB.Services
{
    public class StatementService : BaseService, IStatementService
    {
        private readonly ITransactionRepository _transactionRepository;

        public StatementService(IMapper Mapper, ITransactionRepository transactionRepository) : base(Mapper)
        {
            _transactionRepository = transactionRepository;
        }
              
        public async Task<List<Transaction>> CreateBrokerStatement(int companyId)
        {
            var transactions = (await _transactionRepository.Get(x => x.Include(prop => prop.Bank).Include(x => x.Company).ThenInclude(x=>x.Outstandings)
            .Include(x=>x.Company).ThenInclude(x=>x.Sales).ThenInclude(x => x.MotorType)
             .Include(x => x.Company).ThenInclude(x => x.Sales).ThenInclude(x=>x.VehicleModel)
           , x => x.CompanyId == companyId)).Values.ToList();
            return transactions;
        }
    }
    public interface IStatementService:IBaseService
    {
        Task<List<Transaction>> CreateBrokerStatement(int companyId);
    }
}
