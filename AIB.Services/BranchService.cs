
using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;
using AIB.Services.Core.Utility;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIB.Services.Core
{
    public class BranchService : BaseService<Branch,Guid>, IBranchService
    {
        private readonly IBranchRepository _repo;
        private readonly ITransactionRepository _tranRepo;
        private readonly ITransactionRepository _transactionRepository;

        public BranchService(IServiceProvider serviceProvider,
            ITransactionRepository  tranRepo,
   
            IMapper mapper, IBranchRepository repository)
            :base(serviceProvider,mapper,repository)
        {
            _repo = repository;
                _tranRepo = tranRepo;
            _transactionRepository = tranRepo;
        }
        protected override Task WhileInserting(IEnumerable<Branch> entities)
        {
            foreach (var item in entities)
            {
                item.Id = Guid.NewGuid();
                if (item.MainBranch)
                {
                    var alreadyMainBranchExist = _repo.Query.Any(x => x.MainBranch);
                    if (alreadyMainBranchExist)
                    {
                        throw new ServiceException("Main Branch Already Exisit, You cannot add more than one main branch!");
                  
                    } 

                }
            }
            return base.WhileInserting(entities);
        }
        protected override Task WhileUpdating(IEnumerable<Branch> entities)
        {
            foreach (var item in entities)
            {
                if (item.MainBranch)
                {
                    var alreadyMainBranchExist = _repo.Query.Any(x => x.MainBranch);
                    if (alreadyMainBranchExist)
                    {
                        throw new ServiceException("Main Branch Already Exisit, You cannot add more than one main branch!");

                    }

                }
            }
            return base.WhileUpdating(entities);
        }
        private bool IncreaseOrDecrease(decimal current, decimal last)
        {
            return current >= last;
        }
        private decimal GetPercentage(decimal current, decimal last)
        {
        
            if (current >0 && last>0)
            {

                return Math.Round(((current - last) / last) * 100, 2);
            }
            else
            {
                // handle the error or return a default value
                return 0M;
            }


        }
        public async Task<BranchDTO> GetBranchWithStatsByMonth()
        {
            var branchDetails = new BranchDTO();

            //var data = _repo.Query.Include(x => x.Expenses)
            //    .Include(x => x.Transactions)

            //    .Include(x => x.Managers)
            //        .Include(x => x.Agents).Where(x => x.MainBranch)?.SingleOrDefault();

            var AccountsReceviableForAllBranches = (await _tranRepo.Query.Where(x => x.AgentId != null 
            && x.TransactionDate.Month==DateTime.Now.Month).ToListAsync())
                .Aggregate(0m, (acc,t)=>
            
            t.TransactionType==TransactionType.Credit? acc+t.Amount: acc-t.Amount
            
            );
            var AccountsReceviableForAllBranchesLastMonth = (await _tranRepo.Query.Where(x => x.AgentId != null
        && x.TransactionDate.Month == (DateTime.Now.Month-1)).ToListAsync())
            .Aggregate(0m, (acc, t) =>

        t.TransactionType == TransactionType.Credit ? acc + t.Amount : acc - t.Amount

        );


            var statsForAR = new DifferencialStats(
                StatsFor.ReceviableMonth, 
                this.IncreaseOrDecrease(AccountsReceviableForAllBranches, AccountsReceviableForAllBranchesLastMonth)
                , this.GetPercentage(AccountsReceviableForAllBranches, AccountsReceviableForAllBranchesLastMonth),
                AccountsReceviableForAllBranches,
                AccountsReceviableForAllBranchesLastMonth

                );



            var AccountsPayableAllBranches =(
                await _tranRepo.Query.Where(x => x.CompanyId != null

            && x.TransactionDate.Month == DateTime.Now.Month

            ).ToListAsync()).Aggregate(0m, (acc, t) =>

      t.TransactionType == TransactionType.Debit ? acc + t.Amount : acc - t.Amount

      );


            var AccountsPayableAllBranchesLastMonth = (
          await _tranRepo.Query.Where(x => x.CompanyId != null

      && x.TransactionDate.Month == DateTime.Now.Month-1

      ).ToListAsync()).Aggregate(0m, (acc, t) =>

t.TransactionType == TransactionType.Debit ? acc + t.Amount : acc - t.Amount

);


            var statsForAP = new DifferencialStats(
                StatsFor.PayableMonth,
                this.IncreaseOrDecrease(AccountsPayableAllBranches, AccountsPayableAllBranchesLastMonth)
                , this.GetPercentage(AccountsPayableAllBranches, AccountsPayableAllBranchesLastMonth),
                AccountsPayableAllBranches,
                AccountsPayableAllBranchesLastMonth

                );


            var cashInBanksli = (await _tranRepo.Query.Where(x => x.BankId != null

            && x.TransactionDate.Month == DateTime.Now.Month).ToListAsync());

            var cashInBanks= cashInBanksli.Aggregate(0m, (acc, t) =>

 t.TransactionType == TransactionType.Debit ? acc +=t.Amount : acc -=t.Amount

 );


            var cashInBanksLastMonth = (await _tranRepo.Query.Where(x => x.BankId != null

&& x.TransactionDate.Month == DateTime.Now.Month-1).ToListAsync()).Aggregate(0m, (acc, t) =>

t.TransactionType == TransactionType.Debit ? acc + t.Amount : acc - t.Amount

);


            var statsForCASH = new DifferencialStats(
                StatsFor.CashInBankMonth,
                this.IncreaseOrDecrease(cashInBanks, cashInBanksLastMonth)
                , this.GetPercentage(cashInBanks, cashInBanksLastMonth),
                cashInBanks,
                cashInBanksLastMonth

                );


            decimal? expenses = (await this.Get(x=>x.Include(x=>x.Expenses),x=>x.MainBranch )).Values?.SingleOrDefault().Expenses.Where(x => x.ExpenseDate.Month == DateTime.Now.Month)?
              .Sum(x => x.ExpenseAmount);

            decimal? expensesForLastMonth = (await this.Get(x => x.Include(x => x.Expenses), x => x.MainBranch)).Values?.SingleOrDefault().Expenses.Where(x => x.ExpenseDate.Month == DateTime.Now.Month-1)?
  .Sum(x => x.ExpenseAmount);

            var statsForExpense = new DifferencialStats(
                StatsFor.ExpenseMonth,
                this.IncreaseOrDecrease(expenses??0, expensesForLastMonth??0)
                , this.GetPercentage(expenses??0, expensesForLastMonth??0),
                expenses ?? 0,
                expensesForLastMonth ?? 0

                );


            branchDetails.StatsForExpense = statsForExpense;
            branchDetails.StatsForAR= statsForAR;
            branchDetails.StatsForAP = statsForAP;
            branchDetails.StatsForCASH=statsForCASH;
            //var zx
            //decimal recivables = data.Transactions.Where(

            //    (x => x.SalesId != null

            //&& x.IsNewxz)
            //x.TransactionDate.Month == DateTime.Now.Month

            //).Sum(x => x.Amount); ~
            var queryResult = (await this.Get(x=> x
               .Include(x=>x.Agents))
             ).Values.ToList();
            var transactionsForAllBranches = (await _transactionRepository.Query
                .Where(x=>x.BranchId!=null && x.TransactionDate.Month==DateTime.Now.Month)
        .ToListAsync())
   
          .GroupBy(x => x.BranchId)
                .Select(x => new { Branch = x.Key, Transactions = x.ToList() }).ToList();  
            var extendedBranches = this.Mapper.Map<IEnumerable<Branch>, IEnumerable<ExtendedBranch>>(queryResult);

       
          
            
            foreach (var branch in extendedBranches)
            {

                branch.TotalAgentCount = branch.Agents.Count;
             
                branch.CurrentBalance = await this.GetAccountsReceivableByBranchAndMonth(branch.Id, DateTime.Now.Date);
            }
            branchDetails.Branches.AddRange(extendedBranches);
            branchDetails.BranchCount=branchDetails.Branches.Count;

     
            return branchDetails; 

        }

        public async Task<BranchDetails> GetBranchDetailsAsync(int? Month, Guid BranchId )
        {
            var branchDetails = new BranchDetails();
            var branch = _repo.Query.Include(x => x.Managers)
                                                .Include(x => x.Agents)
                                                    .ThenInclude(x => x.Transactions)
                                                 .Include(x => x.Agents)
                                                    .ThenInclude(x => x.Sales)
                                       .Include(x => x.Expenses)
                                        .Where(x => x.Id == BranchId);



            branchDetails= branch.Select(x => new BranchDetails()
                {
                    BranchManager = x.Managers.FirstOrDefault().FirstName,
                    Email = x.Managers.SingleOrDefault().Email,
                    NetSales = x.Agents.Select(x => ((decimal)x.Sales.Where(x=>x.SalesDate.Month==Month).Sum(x => x.SalesPrice))).SingleOrDefault()
                    ,
                    Receviable = x.Agents.Select(x => x.Transactions.Where(x => x.TransactionType == TransactionType.Debit

                    ).Select(x => x.Amount).Sum()).SingleOrDefault() -
                    x.Agents.Select(x => x.Transactions.Where(x => x.TransactionType == TransactionType.Credit

                    ).Select(x => x.Amount).Sum()).SingleOrDefault()

                    ,
                    



                }).SingleOrDefault();
    

        
            return branchDetails;


        }


        public async Task<decimal> GetAccountsReceivableByBranchAndDate(Guid branchId, DateTime startDate, DateTime endDate)
        {
            var transactions = await _transactionRepository.Query
                .Where(t => t.BranchId == branchId && t.TransactionDate >= startDate && t.TransactionDate <= endDate).ToListAsync();

            var credits = transactions.Where(t => t.TransactionType == TransactionType.Credit).Sum(t => t.Amount);
            var debits = transactions.Where(t => t.TransactionType == TransactionType.Debit).Sum(t => t.Amount);

            return credits - debits;
        }
        public async Task<decimal> GetAccountsReceivableByBranchAndMonth(Guid branchId, DateTime month)
        {
            var transactions = await _transactionRepository.Query
                .Where(t => t.BranchId == branchId && t.TransactionDate.Date.Month==month.Date.Month ).ToListAsync();

            var credits = transactions.Where(t => t.TransactionType == TransactionType.Credit).Sum(t => t.Amount);
            var debits = transactions.Where(t => t.TransactionType == TransactionType.Debit).Sum(t => t.Amount);

            return credits - debits;
        }
        public async Task<decimal> GetAccountsReceivableForAgent(int agentId, Guid branchId, DateTime startDate, DateTime endDate)
        {
            if (agentId == 0)
            {
                var transactions = await _transactionRepository
          .Query
          .Where(t => t.BranchId == branchId && t.AgentId != null &&

                      t.TransactionDate >= startDate && t.TransactionDate <= endDate)
          .ToListAsync();

                var credits = transactions.Where(t => t.TransactionType == TransactionType.Credit).Sum(t => t.Amount);
                var debits = transactions.Where(t => t.TransactionType == TransactionType.Debit).Sum(t => t.Amount);

                return credits - debits;
            }
            else
            {
                var transactions = await _transactionRepository
              .Query
              .Where(t => t.BranchId == branchId && t.AgentId == agentId &&

                          t.TransactionDate >= startDate && t.TransactionDate <= endDate)
              .ToListAsync();

                var credits = transactions.Where(t => t.TransactionType == TransactionType.Credit).Sum(t => t.Amount);
                var debits = transactions.Where(t => t.TransactionType == TransactionType.Debit).Sum(t => t.Amount);

                return credits - debits;
            }

        }
    }
    public interface IBranchService : IBaseService<Branch, Guid>
    {
       Task<BranchDetails> GetBranchDetailsAsync(int? Month ,Guid BranchId);
      Task<BranchDTO> GetBranchWithStatsByMonth();
    }
    public class BranchDTO {
        public DifferencialStats StatsForAP { get; set; }

        public DifferencialStats StatsForAR { get; set; }

        public DifferencialStats StatsForCASH { get; set; }

        public DifferencialStats StatsForExpense { get; set; }

        private List<ExtendedBranch> _branches;
        public List<ExtendedBranch> Branches => _branches ??= new List<ExtendedBranch>(); 
        public int BranchCount { get; set; }


    }
    

    public class AgentDTO
    {
        public string AgentName { get; set; }
        public decimal Balance { get; set; }
        public decimal LastPayment { get; set; }
        public decimal LastPaymentDate { get; set; }


    }
    public class BranchDetails
    {
        public string BranchManager {get; set; }
        public decimal TotalExpense { get; set; }
        public decimal NetSales { get; set; }
        public decimal GrossProfit { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public decimal Receviable { get; set; }


    }
    public class ExtendedBranch:Branch
    {
        public int? TotalAgentCount { get; set; }
        public decimal? CurrentBalance { get; set; }

    }


    /// <summary>
    ///  This class is used for mapping Differencial Analysis of Key Metrics of Insurance Business Such as AR,AP,EXP & CASH between current and last
    ///  month absolute figures
    /// </summary>
    public class DifferencialStats {

        public DifferencialStats(StatsFor statsFor, bool increaseOrDecrease, decimal percentage, decimal current, decimal last)
        {
            StatsFor = statsFor;
            IncreaseOrDecrease = increaseOrDecrease;
            Percentage = percentage;
            Current = current;
            Last = last;
        }

        public StatsFor StatsFor { get; set; }
        public bool IncreaseOrDecrease { get; set; }
        public decimal Percentage { get; set; }
        public decimal Current { get; set; }
        public decimal Last { get; set; }



    }
    public enum StatsFor
    {
        ReceviableMonth=1,

        PayableMonth,

        CashInBankMonth,

        ExpenseMonth,

    }
}
