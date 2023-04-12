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
    public class ExpenseService : BaseService<Expense,int>, IExpenseService
    {
        public ExpenseService(IServiceProvider serviceProvider,IMapper mapper,IExpenseRepository repository)
            :base(serviceProvider,mapper,repository)
        {

        }
      
    }
    public interface IExpenseService : IBaseService<Expense, int>
    {

    }
}
