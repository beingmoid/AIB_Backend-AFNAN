
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
using static AIB.Common.Constants;
using AIB.Common;
using AIB.Data.Repositories;
using AIB.Data;
using NPOI.XWPF.UserModel;

using Microsoft.AspNetCore.Hosting;
using FluentExcel;

namespace AIB.Api.Controllers
{

    public class BranchController : BaseController<Branch, Guid>
    {
        private readonly IBranchService _service;
        private readonly AIBContext _context;
        private IWebHostEnvironment _env;
        private readonly ITransactionService tranService;

        public BranchController(IServiceProvider serviceProvider,
            IMapper mapper,

            AIBContext context,
            IBranchService service,
           IWebHostEnvironment env,
            ITransactionService tranService) : base(serviceProvider, mapper, service)
        {
            _service = service;
            _context = context;
            _env= env;
            this.tranService = tranService;
        }
        [HttpGet]
        public override async Task<BaseResponse> Get()
        {

            OtherConstants.isSuccessful = true;

            var response = await _service.GetBranchWithStatsByMonth();
            //var response = new BranchDTO();
            //var extendedBranch = (await _context.Set<Branch>().ToListAsync());
            //foreach (var item in extendedBranch)
            //{
            //    var brach = new ExtendedBranch();
            //    brach.Id = item.Id;
            //    brach.Name = item.Name;
            //    brach.MainBranch = item.MainBranch;
            //    response.Branches.Add(brach);
            //}



            return constructResponse(response);
            //return base.Get();
        }
        [HttpGet("GetBranchAsync")]
        public async Task<BaseResponse> GetBranchAsync()
        {
            OtherConstants.isSuccessful = true; 
            return constructResponse(await _context.Set<Branch>().ToListAsync());
        }
        [HttpGet("GetBranchDetailsAsync")]
        public async Task<BaseResponse> GetBranchWithDetailsAsync(int? Month, Guid BranchId)
        {
            return constructResponse(await _service.GetBranchDetailsAsync(Month, BranchId));
        }
        [HttpGet("GetAgentsSalesForBranchPerMonth")]
        public async Task<BaseResponse> GetAgentsSalesForBranchPerMonth(int month, Guid branchId)
        {
            var agents = (await _context.Set<Sales>()
                    .Include(s => s.SalesAgent)
                    .Where(s => s.BranchId == branchId && s.SalesDate.Month == month)
                    .ToListAsync())
                    .GroupBy(s => s.SalesAgentId)
                  ;

            var totalSales = agents.Sum(a => a.Sum(s => s.SalesPrice));
            var branch = await _service.GetOne(x => x.Id == branchId);
            var salesReport = new Report
            {
                BranchName = branch.Name,
                TotalSales = totalSales,
                SalesAgents = agents.Select(a => new ReportDetail
                {
                    Name = a.FirstOrDefault()?.SalesAgent.Name,
                    Amount = a.Sum(s => s.SalesPrice),
                    Percentage = totalSales == 0 ? 0 : a.Sum(s => s.SalesPrice) / totalSales
                }).OrderByDescending(x => x.Percentage).ToList()
            };
            OtherConstants.isSuccessful = true;
            return constructResponse(salesReport);
        }
        [HttpGet("GetAgentARForBranchPerMonth")]
        public async Task<BaseResponse> GetAgentsARForBrnachPerMonth(int month, Guid branchId)
        {
            var transactions = await _context.Set<Transaction>()

                .Include(x => x.Agent)
                .Where(s => s.BranchId == branchId && s.TransactionDate.Month == month && s.AgentId != null

                && s.CompanyId == null
                )
        .ToListAsync();

            var reportForAgentAR = transactions.GroupBy(x => x.AgentId)
                .Select(x => new ReportDetail
                {
                    Name = x.FirstOrDefault().Agent.Name,
                    Amount = x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount)
                    - x.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount)
                    ,
                }).ToList();
            var ARReport = new Report();
            ARReport.BranchName = (await this._service.GetOne(x => x.Id == branchId)).Name;
            ARReport.TotalSales = reportForAgentAR.Sum(x => x.Amount);

            reportForAgentAR.ForEach(x =>
            {

                x.Percentage = ARReport.TotalSales == 0 ? 0 : x.Amount / ARReport.TotalSales;

            });


            ARReport.SalesAgents = reportForAgentAR.OrderByDescending(x => x.Percentage).ToList();


            OtherConstants.isSuccessful = true;
            return constructResponse(ARReport);
        }
        [HttpGet("GetBrokersAPForBranchPerMonth")]
        public async Task<BaseResponse> GetBrokersAPForBranchPerMonth(int month, Guid branchId)
        {


            var transactions = await _context.Set<Transaction>().Include(x => x.Company).Where(x => x.TransactionDate.Month == month
            && x.BranchId == branchId
                && x.CompanyId != null
                && x.AgentId == null
            ).ToListAsync();
            var transactionGroupedByBroker = transactions.GroupBy(x => x.CompanyId)
             .Select(s =>

             new { Key = s.FirstOrDefault(x => x.CompanyId == s.Key).Company, Value = s.ToList() }).ToList();
            decimal totalAPAmountForBranch = transactions.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount)

                - transactions.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount)
                ;


            var branch = await _service.GetOne(x => x.Id == branchId);
            var report = new Report();
            report.TotalSales = totalAPAmountForBranch;
            report.BranchName = branch.Name;
            report.Details = new List<ReportDetail>();



            foreach (var agentGrouped in transactionGroupedByBroker)
            {
                var Detail = new ReportDetail();
                Detail.Name = agentGrouped.Key.Name;
                Detail.Amount = agentGrouped.Value.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount) -

                   agentGrouped.Value.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount);
                Detail.Percentage = totalAPAmountForBranch == 0 ? 0 : Detail.Amount / totalAPAmountForBranch;

                report.Details.Add(Detail);
            }
            report.Details = report.Details.OrderByDescending(x => x.Percentage).ToList();







            OtherConstants.isSuccessful = true;
            return constructResponse(report);

        }

        [HttpGet("GetAgentRelatedBranchWithOpenBalanceByMonthOrDate")]
        public async Task<BaseResponse> GetAgentRelatedBranchWithOpenBalanceByMonthOrDate(int? month,
        Guid branchId,
        DateTime? from,
        DateTime? to, string nameQuery, bool isExcel, bool isPDF)
        {
          
            DateTime? startDate = from; // Set the start date to null if not specified by user
            DateTime? endDate = to; // Set the end date to null if not specified by user
            string searchQuery = nameQuery; // Set the search query to null if not specified by user

            // Get the start and end dates and search query from user input if provided
            if (from != null)
            {
                startDate = from.Value.Date;
            }
            if (to != null)
            {
                endDate = to.Value.Date.AddDays(1).AddTicks(-1); // Set end date to end of day
            }
            if (!string.IsNullOrWhiteSpace(nameQuery))
            {
                searchQuery = nameQuery.Trim().ToLower();
            }

            var transactions = _context.Set<Transaction>().Include(x=>x.Agent);
            var query = transactions
                .Where(t => t.AgentId != null &&
                    t.BranchId == branchId &&
                   
                    (t.TransactionType == TransactionType.Credit || t.TransactionType == TransactionType.Debit));

            if (month != null)
            {
                // Filter by month
                startDate = new DateTime(DateTime.Now.Year, month.Value, 1);
                endDate = startDate.Value.AddMonths(1).AddTicks(-1);
                query = query.Where(t => t.TransactionDate >= startDate && t.TransactionDate <= endDate);
            }
            else
            {
                // Filter by date range if startDate and endDate are specified
                if (startDate != null && endDate != null)
                {
                    query = query.Where(t => t.TransactionDate >= startDate && t.TransactionDate <= endDate);
                }
                // Throw exception if both targetMonth and targetDate are not null
                else if (startDate != null && endDate == null || startDate == null && endDate != null)
                {
                    throw new ArgumentException("Both start and end dates must be specified for date range filtering.");
                }
            }

            // Filter by agent name if searchQuery is specified
            if (!string.IsNullOrWhiteSpace(searchQuery))
            {
                query = query.Where(t => t.Agent.Name.ToLower().Contains(searchQuery));
            }

            var agentBalances = query
            
                .Include(t => t.Branch)
                .Where(t => !t.IsDeleted) // Move this before the Includes
                .AsEnumerable() // Execute query locally
                .GroupBy(t => new { t.Agent, t.Branch })
                .Select(g => new
                {
                    AgentId = g.Key.Agent.Id,
                    AgentName = g.Key.Agent.Name,
                    BranchName = g.Key.Branch.Name,
                    Balance = g.Sum(t => t.TransactionType == TransactionType.Credit ? t.Amount : -t.Amount)
                })
                .OrderByDescending(t => t.Balance)
                .ToList();

            return constructResponse(agentBalances);
        }
        private  string[] ConvertStringToGuidList(string param)
        {
            List<string> guidList = new List<string>();

            string[] guidStrings = param.Split(',');

            //foreach (string guidString in guidStrings)
            //{
            //    guidString.Replace("{", "").Replace("}","");
            //    Guid guid;
            //    if (Guid.TryParse(guidString, out guid))
            //    {
            //        guidList.Add(guid);
            //    }
            //}

            return guidStrings;
        }
   
    [HttpGet("GetAgentTransactionalHistoryByBranches")]
        public async Task<BaseResponse> GetAgentTransactionalHistoryByBranches(DateTime from, DateTime to, int agentId, string branches, bool requestExcel,bool  requestPDF,
            
            int page=1, int pageSize=100
            )




         {
         
        var branchesParam  = branches!=null? this.ConvertStringToGuidList(branches).ToList():null;
            var query = _context.Set<Transaction>().Include(x => x.Sales).ThenInclude(x => x.MotorType)
                                              .Include(x => x.Sales).ThenInclude(x => x.VehicleModel)
                                              .Include(x => x.Sales).ThenInclude(x => x.Broker)
                                              .Include(x=>x.Agent)
                                              .Include(x=>x.Branch)
                                              
                                              ;
                                

         var  transactions =            await           query              .Where(


             x => x.AgentId == agentId &&
           x.TransactionDate.Date >= from.Date &&
           x.TransactionDate.Date <= to.Date 
         ).ToListAsync();

            var transactionsBeforeFrom = await query.Where(x => x.AgentId == agentId &&
                                                        x.TransactionDate.Date < from.Date &&
                                                        (branchesParam == null || branchesParam.Count() == 0
                                                        || branchesParam.Contains(x.BranchId.ToString())))
                                            .ToListAsync();

            decimal outstanding_balance = 0;

            foreach (var item in transactionsBeforeFrom)
            {
                if (item.TransactionType == TransactionType.Credit)
                {
                    outstanding_balance += item.Amount;
                }
                else
                {
                    outstanding_balance -= item.Amount;
                }
            }

            List<StatementDTO> list = new List<StatementDTO>();

            foreach (var item in transactions.OrderBy(x => x.TransactionDate))
            {
                StatementDTO DTO = new StatementDTO();
                DTO.Date = item.TransactionDate.Date;
                DTO.CustomerName = item.Sales?.CustomerName;
                DTO.MotorType = item.Sales?.MotorType?.Name;
                DTO.VehileType = item.Sales?.VehicleModel?.Name;
                DTO.PolicyNumber = item.Sales?.PolicyNumber;
                DTO.PolicyIssuer = item.Sales?.PolicyIssuer;
                DTO.Remark = item.Sales?.Remark;
                DTO.Status = item.Sales?.Status != null || item.Sales?.Status == 0 ?
                    (item.Sales.Status == PaymentStatus.Pending ? "PENDING" : "PAID") : "";
                DTO.GrossPremium = item.Sales?.PremiumPrice.ToString();
                DTO.Comission = (item.Sales?.PremiumPrice - item.Sales?.SalesPrice).ToString();
                DTO.CompanyName = item.Sales?.Broker?.Name;
                DTO.IsRefund = item.isRefund == null ? false : true;
                if (DTO.IsRefund)
                {
                    DTO.PolicyNumber = item.PolicyNumber;
                    DTO.CompanyName = item.CompanyName;
                }

                if (item.TransactionType == TransactionType.Credit)
                {
                    outstanding_balance += item.Amount;
                    DTO.Credit = item.Amount;
                    DTO.ReferenceNumber = item.TransactionReferenceNumber;
                }
                else
                {
                    outstanding_balance -= item.Amount;
                    DTO.Debit = item.Amount;
                    DTO.ReferenceNumber = item.TransactionReferenceNumber;
                }

                DTO.Balance = outstanding_balance;
                list.Add(DTO);
            }

            var agentInfo = _context.Set<Agent>()
                .SingleOrDefault(x => x.Id == agentId);
            string contentPath = _env.ContentRootPath;

            string fileName = "";
            if(agentInfo != null)
            {

             
                string ransomeNameStr = agentInfo.Name+ new Random().Next(DateTime.Now.Second, 10000).ToString() +
            new DateTime().Ticks.ToString();
                var serverUrl = this.HttpContext.Request.Host.ToString();
                var serverpath = Request.IsHttps ? "https://" : "http://" + serverUrl + "/uploads/" + $"{ransomeNameStr}.xlsx";
                if (requestExcel && !requestPDF)
                {
                    list.ToExcel(contentPath + "\\uploads\\" + $"{ransomeNameStr}.xlsx");



                    return constructResponse(new
                    {
                        excelFileUrl = serverpath,
                        pdfFileUrl = "",
                        data = list.Skip(pageSize * (page - 1))
                .Take(pageSize).ToList()

                    });
                }
                else if (requestPDF && !requestExcel)
                {
                    //Todo PDF Upload 
                    list.ToExcel(contentPath + "\\uploads\\" + $"{ransomeNameStr}.xlsx");




                    return constructResponse(new
                    {
                        excelFileUrl = "",
                        pdfFileUrl = serverpath,
                        data = list.Skip(pageSize * (page - 1))
                .Take(pageSize).ToList()

                    });
                }
                else
                {
                    //Todo PDF Upload and Excel Together
                    list.ToExcel(contentPath + "\\uploads\\" + $"{ransomeNameStr}.xlsx");



                    return constructResponse(new
                    {
                        excelFileUrl = "",
                        pdfFileUrl = serverpath,
                        data = list.Skip(pageSize * (page - 1))
                .Take(pageSize).ToList()

                    });
                }
        

            }
            else
            {
                return constructResponse(NotFound());
            }

            return constructResponse(list);
                
       
        }
    }
        public class Report
    {
        public string BranchName { get; set; }
        public decimal TotalSales { get; set; }
        public List<ReportDetail> SalesAgents { get; set; }
        public List<ReportDetail> Details { get; set; }
    }

    public class AllReport
    {
        public string Name { get; set; }
        public decimal TotalAmount { get; set; }
        public List<ReportDetail> Details { get; set; }
    }

    public class ReportDetail
    {
        public string Name { get; set; }
        public decimal Amount { get; set; }
        public decimal Percentage { get; set; }
    }
}
