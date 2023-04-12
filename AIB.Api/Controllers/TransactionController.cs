using AIB.Common;
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
using AIB.Data.Repositories;
using System.IO;
using FluentExcel;
using Microsoft.AspNetCore.Hosting;
using static System.Net.WebRequestMethods;
using AIB.Common.ExcelKit;
using AIB.Data;

namespace AIB.Api.Controllers
{

    public class TransactionController : BaseController<Transaction, int>
    {
        private readonly ITransactionService _service;
        private readonly IOutstandingService _outstanding;
        private readonly ITransactionRepository _repo;
        private readonly IBankAccountService _bank;
        private readonly IExpenseService expenseService;
        private readonly AIBContext _context;
        private readonly ISalesService salesService;
        private readonly IWebHostEnvironment _env;

        public TransactionController(IServiceProvider serviceProvider,
            
            AIBContext context,
            IMapper mapper, ITransactionService service,
            ITransactionRepository repo,
            IBankAccountService bank,
            IExpenseService expenseService,
            IOutstandingService outstandingService,
            ISalesService salesService,
            IWebHostEnvironment env
            ) : base(serviceProvider, mapper, service)

        {
            _service = service;
            _outstanding = outstandingService;
            this.salesService = salesService;
            _repo = repo;
            _bank = bank;
            _env = env;
            this.expenseService = expenseService;
            _context=context;
        }

        public async override Task<BaseResponse> Get()
        {
            var result = (await _service.Get(x => x.Include(x => x.Agent).Include(x => x.Bank).Include(x => x.Company).Include(x => x.Sales))).Values.ToList();
            return constructResponse( result);
        }
        [HttpGet("GetPaginated")]
        public async Task<ActionResult> GetPaginated(bool isBroker,bool isAgent,bool isBank, int page = 1, int pageSize = 10)
        {
            return new JsonResult(constructResponse(await _repo.GetPaginatedAPI(isBroker,isAgent,isBank, page, pageSize)));
        }



        [HttpGet("Search")]
        public async Task<ActionResult> Search(string search, bool isBroker, bool isAgent, bool isBank ,bool isRefund)
        {
            var outDate = new DateTime();
            var date = DateTime.TryParse(search, out outDate);

            if (isBroker)
            {
                if (date)
                {
                    var result = (await _service.Get(x => x.Include(x => x.Agent).Include(x => x.Bank).Include(x => x.Company).Include(x => x.Sales),


                   x =>

                  (x.TransactionDate.Date == outDate)
                  && (x.AgentId == null && x.CompanyId != null)




                   )).Values.ToList();
                    return new JsonResult(constructResponse(result));
                }
                else
                {
                    var result = (await _service.Get(x => x.Include(x => x.Agent).Include(x => x.Bank).Include(x => x.Company).Include(x => x.Sales),


                   x =>
                  (
                   (
                   x.TransactionReferenceNumber.Contains(search)
                   ||
                   x.TransactionReferenceNumber.StartsWith(search)
                   ||
                    x.TransactionReferenceNumber.EndsWith(search)
                   )
                   ||

                     (
                   x.PolicyNumber.Contains(search)
                   ||
                   x.PolicyNumber.StartsWith(search)
                   ||
                    x.PolicyNumber.EndsWith(search)
                   )

                   )
                   && (x.AgentId == null && x.CompanyId != null)



                   )).Values.ToList();
                    return new JsonResult(constructResponse(result));
                }

            }
            else if (isAgent)
            {
                if (date)
                {
                    var result = (await _service.Get(x => x.Include(x => x.Agent).Include(x => x.Bank).Include(x => x.Company).Include(x => x.Sales),


                   x =>

                  (x.TransactionDate.Date == outDate)
                  && (x.CompanyId == null && x.AgentId != null)




                   )).Values.ToList();
                    return new JsonResult(constructResponse(result));
                }
                else
                {
                    var result = (await _service.Get(x => x.Include(x => x.Agent).Include(x => x.Bank).Include(x => x.Company).Include(x => x.Sales),


                   x =>
                  (
                   (
                   x.TransactionReferenceNumber.Contains(search)
                   ||
                   x.TransactionReferenceNumber.StartsWith(search)
                   ||
                    x.TransactionReferenceNumber.EndsWith(search)
                   )
                   ||

                     (
                   x.PolicyNumber.Contains(search)
                   ||
                   x.PolicyNumber.StartsWith(search)
                   ||
                    x.PolicyNumber.EndsWith(search)
                   )

                   )
                   && (x.CompanyId == null && x.AgentId != null)



                   )).Values.ToList();
                    return new JsonResult(constructResponse(result));
                }

            }
            else  
            {
                var result = (await _service.Get(x => 
                x.Include(x => x.Agent)
                .Include(x => x.Company)
             .Include(x => x.MotorType)
                .Include(x => x.VehicleModel),


                  x =>
                 (
                  (
                  x.TransactionReferenceNumber.Contains(search)
                  ||
                  x.TransactionReferenceNumber.StartsWith(search)
                  ||
                   x.TransactionReferenceNumber.EndsWith(search)
                  )
                  ||

                    (
                  x.PolicyNumber.Contains(search)
                  ||
                  x.PolicyNumber.StartsWith(search)
                  ||
                   x.PolicyNumber.EndsWith(search)
                  )

                  )
                  && (isRefund==true)



                  )).Values.ToList();
                return new JsonResult(constructResponse(result));
            }
 
        }








        [HttpGet("GetCounts")]
        public async Task<ActionResult> GetCounts()
        {
            var result = (await _service.Get(x => x.Include(x => x.Agent).Include(x => x.Bank).Include(x => x.Company).Include(x => x.Sales))).Values.ToList();
            return new JsonResult(constructResponse(new
            {
                AgentCount = result.Where(x => x.CompanyId == null && x.AgentId != null).Count(),
                BrokerCount = result.Where(x => x.AgentId == null && x.CompanyId != null).Count(),
                BankCount = result.Where(x => x.BankId != null).Count()

            }));

            //   return new JsonResult(constructResponse(await _repo.GetPaginatedAPI(isBroker, isAgent, isBank, page, pageSize)));
        }
        [HttpGet("OutstandingsForCompany")]
        public async Task<BaseResponse> OutstandingsForCompany()
        {
            var transactions = (await _service.Get(x => x.Include(x => x.Company), x => x.AgentId == null && x.CompanyId!=null)).Values.ToList();

            var CompaniesOutStandings = transactions.GroupBy(x => x.Company.Name).Select(x => new
            {
                Company = x.Key,
                Payable = x.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount) - x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount),
                data = x.ToList()


            }).ToList();
            return constructResponse(CompaniesOutStandings);

        }
        [HttpGet("OutstandingsForAgent")]
        public async Task<BaseResponse> OutstandingsForAgent()
        {
            var transactions = (await _service.Get(x => x.Include(x => x.Agent), x => x.CompanyId == null && x.AgentId!=null)).Values.ToList();

            var CompaniesOutStandings = transactions.GroupBy(x => x.Agent.Name).Select(x => new
            {
                Agent = x.Key,
                receving = x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount) - x.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount),
                data = x.ToList()


            }).ToList();
            return constructResponse(CompaniesOutStandings);

        }

        [HttpPost("GetBrokerStatement")]
        public async Task<BaseResponse> GetStatement([FromBody] StatementRequestDTO dto)
        {

            //var transactions = (await _service.Get(x => x.Include(x => x.Sales).ThenInclude(x => x.MotorType).Include(x => x.Sales).ThenInclude(x => x.VehicleModel).Include(x=>x.Sales).ThenInclude(x=>x.Broker)
            //,x => (x.TransactionDate.Date >= dto.DateFrom.Date && x.TransactionDate.Date <= dto.DateTo.Date) && x.CompanyId == dto.CompanyId)).Values.ToList();
            var transactions = (await _service.Get(x =>
            x.Include(x => x.Sales).ThenInclude(x => x.MotorType).Include(x => x.Sales).ThenInclude(x => x.VehicleModel).Include(x => x.Sales).ThenInclude(x => x.Broker)
        , x => x.CompanyId == dto.CompanyId)).Values.ToList();
            var list = new List<StatementDTO>();

            //var debit_balance = (await _service.Get(x=>(x.TransactionDate.Date<=dto.DateFrom && x.TransactionType==TransactionType.Debit) && x.CompanyId == dto.CompanyId)).Values.Sum(x => x.Amount);
            //var credit_balance = (await _service.Get(x => (x.TransactionDate.Date <= dto.DateFrom && x.TransactionType == TransactionType.Credit ) && x.CompanyId == dto.CompanyId)).Values.Sum(x => x.Amount);
            decimal outstanding_balance = 0;
            //if (debit_balance >= credit_balance)
            //    outstanding_balance = debit_balance - credit_balance;
            //else
            //    outstanding_balance = credit_balance - debit_balance;
            //bool IsbeginingBalance = true;
            //var en = new StatementDTO();
            //en.Balance = outstanding_balance;
            //list.Add(en);
            foreach (var item in transactions.OrderBy(x => x.TransactionDate))
            {
                StatementDTO DTO = new StatementDTO();
                DTO.Date = item.TransactionDate.Date;
                DTO.CustomerName = item.Sales?.CustomerName;
                DTO.MotorType = item.Sales?.MotorType?.Name;
                DTO.VehileType = item.Sales?.VehicleModel?.Name;
                DTO.PolicyIssuer = item.Sales?.PolicyIssuer;
                DTO.Remark = item.Sales?.Remark;
                DTO.Status = item.Sales?.Status != null || item.Sales?.Status == 0 ?
                    (item.Sales.Status == PaymentStatus.Pending ? "PENDING" : "PAID") : "";
                DTO.PolicyNumber = item.Sales?.PolicyNumber;
                DTO.CompanyName = item.Sales?.Broker?.Name;
                DTO.GrossPremium = item.Sales?.PremiumPrice.ToString();
                DTO.Comission = item.Sales?.Commission.ToString();
                DTO.IsRefund = item.isRefund == null ? false : true;
                if (DTO.IsRefund)
                {
                    DTO.PolicyNumber = item.PolicyNumber;
                    DTO.CompanyName = item.CompanyName;
                }

                if (item.TransactionType == TransactionType.Credit)
                {
                    outstanding_balance -= item.Amount;
                    DTO.Credit = item.Amount;
                    DTO.ReferenceNumber = item.TransactionReferenceNumber;
                }
                else
                {
                    outstanding_balance += item.Amount;
                    DTO.Debit = item.Amount;
                }

                DTO.Balance = outstanding_balance;
                list.Add(DTO);

            }


            var reservList = list.Where(x => x.Date.Date >= dto.DateFrom.Date).Where(x => x.Date.Date <= dto.DateTo.Date).ToList();

            var debit_balance = list.Where(x => x.Date.Date < dto.DateFrom.Date).Sum(x => x.Debit);
            var credit_balance = list.Where(x => x.Date.Date < dto.DateFrom.Date).Sum(x => x.Credit);
            decimal outstanding = 0;
            if (debit_balance >= credit_balance)
                outstanding = debit_balance - credit_balance;
            else
                outstanding = credit_balance - debit_balance;

            var newList = new List<StatementDTO>();
            var enity = new StatementDTO();
            enity.Balance = outstanding;

            newList.Add(enity);
            newList.AddRange(reservList);


            string wwwPath = _env.WebRootPath;
            string contentPath = _env.ContentRootPath;
            string path = Path.Combine(contentPath, $"\\uploads\\{new DateTime().Ticks.ToString()}.xlsx");
            var serverUrl = this.HttpContext.Request.Host.ToString();
            var ransomeNameStr = new Random().Next(DateTime.Now.Second, 10000).ToString() +
                new DateTime().Ticks.ToString();
            var isHttps = this.HttpContext.Request.IsHttps;
            var agent = await _context.Set<Broker>().SingleOrDefaultAsync(x => x.Id == dto.CompanyId);

            var serverPath =  serverUrl + $"/uploads/{ransomeNameStr}.xlsx";
            if (dto.RequestExcel && dto.RequestPDF==false)
            {
                newList.ToExcel(contentPath + "\\uploads\\" + $"{ransomeNameStr}.xlsx");
                return constructResponse(new
                {
                    excelFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.xlsx",
                   
                    data = newList
                });

            }
            else if (dto.RequestExcel && dto.RequestPDF)
            {
               
                newList.ToExcel(contentPath + "\\uploads\\" + $"{ransomeNameStr}.xlsx");
               
                PdfConverter pdf = new PdfConverter();
                pdf.CreatePdfWithHeaderAndFooter(
                   newList, (new string[] { "Date",
                   "CustomerName",
                    "PolicyNumber",
                         "CompanyName",

                                                              "ReferenceNumber",
                                                                  "VehileType",

                    "MotorType",


                    "Debit",
                    "Credit",
                    "Balance", }),

                    contentPath + "\\uploads\\" + $"{ransomeNameStr}.pdf",
                    agent.Name, outstanding.ToString(), dto.DateFrom.ToShortDateString() + " to " + dto.DateTo.ToShortDateString());
                OtherConstants.isSuccessful = true;
                return constructResponse(new
                {
                    excelFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.xlsx",
                    pdfFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.pdf",
                    data = newList
                });
            }
            else if(dto.RequestExcel==false && dto.RequestPDF == true)
            {
                PdfConverter pdf = new PdfConverter();
                pdf.CreatePdfWithHeaderAndFooter(
                     newList, (new string[] { "Date",
                   "CustomerName",
                    "PolicyNumber",
                         "CompanyName",

                                                              "ReferenceNumber",
                                                                  "VehileType",

                    "MotorType",


                    "Debit",
                    "Credit",
                    "Balance", }),

                      contentPath + "\\uploads\\" + $"{ransomeNameStr}.pdf",
                      agent.Name, outstanding.ToString(), dto.DateFrom.ToShortDateString() + " to " + dto.DateTo.ToShortDateString());

                OtherConstants.isSuccessful = true;
                return constructResponse(new
                {

                    pdfFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.pdf",
                    data = newList
                });
            }
            else
            {
                return constructResponse(new
                {
                   
                    data = newList
                });
            }
             


            }

        [HttpPost("GetAgentStatement")]
        public async Task<BaseResponse> GetAgentStatement([FromBody] StatementRequestDTO dto)
        {

            var transactions = (await _service.Get(x => x.Include(x => x.Sales).ThenInclude(x => x.MotorType).Include(x => x.Sales).ThenInclude(x => x.VehicleModel).Include(x => x.Sales).ThenInclude(x => x.Broker)
            , x => x.AgentId == dto.CompanyId)).Values.ToList();
            var list = new List<StatementDTO>();

            decimal outstanding_balance = 0;
            foreach (var item in transactions.OrderBy(x=>x.TransactionDate))
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
                DTO.Comission = (item.Sales?.PremiumPrice- item.Sales?.SalesPrice).ToString();
                DTO.CompanyName = item.Sales?.Broker?.Name;
                DTO.IsRefund = item.isRefund==null?false:true;
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



            var reservList = list.Where(x => x.Date.Date >= dto.DateFrom.Date).Where(x => x.Date.Date <= dto.DateTo.Date).ToList();

            var debit_balance = list.Where(x => x.Date.Date < dto.DateFrom.Date).Sum(x => x.Debit);
            var credit_balance = list.Where(x => x.Date.Date < dto.DateFrom.Date).Sum(x => x.Credit);
            decimal outstanding = 0;
            if (debit_balance >= credit_balance)
                outstanding = debit_balance - credit_balance;
            else
                outstanding = credit_balance - debit_balance;

            var newList = new List<StatementDTO>();
            var enity = new StatementDTO();
            enity.Balance = outstanding;

            newList.Add(enity);
            newList.AddRange(reservList);

            newList.OrderBy(x => x.Date).ToList();

            string wwwPath = _env.WebRootPath;
            string contentPath = _env.ContentRootPath;
            string path = Path.Combine(contentPath, $"\\uploads\\{new DateTime().Ticks.ToString()}.xlsx");
            var serverUrl = this.HttpContext.Request.Host.ToString();
            var ransomeNameStr = new Random().Next(DateTime.Now.Second, 10000).ToString() +
                new DateTime().Ticks.ToString();
            var isHttps = this.HttpContext.Request.IsHttps;

            var columnConfig = new List<ExcelColumnConfig>
{
    // add column mapping configuration here
        new ExcelColumnConfig("Date", p => ((StatementDTO)p).Date),
    new ExcelColumnConfig("Policy Number", p => ((StatementDTO)p).PolicyNumber ?? string.Empty),
    new ExcelColumnConfig("Customer Name", p => ((StatementDTO)p).CustomerName ?? string.Empty),
    new ExcelColumnConfig("Insurance Company Name", p => ((StatementDTO)p).CompanyName ?? string.Empty),
    new ExcelColumnConfig("Reference No", p => ((StatementDTO)p).ReferenceNumber ?? string.Empty),
    new ExcelColumnConfig("Vehicle Type", p => ((StatementDTO)p).VehileType ?? string.Empty),



    new ExcelColumnConfig("Motor Type", p => ((StatementDTO)p).MotorType ?? string.Empty),
    new ExcelColumnConfig("Debit", p => ((StatementDTO)p).Debit.ToString()?? string.Empty),
    new ExcelColumnConfig("Credit", p => ((StatementDTO)p).Credit.ToString()?? string.Empty),
    new ExcelColumnConfig("Balance", p => ((StatementDTO)p).Balance.ToString()?? string.Empty),
  
};
            var agent = await _context.Set<Agent>().SingleOrDefaultAsync(x => x.Id == dto.CompanyId);

            var serverPath = isHttps ? "https://" : "http://" + serverUrl + $"/uploads/{ransomeNameStr}.xlsx";
            if (dto.RequestExcel && dto.RequestPDF == false)
            {
                newList.ToExcel(contentPath + "\\uploads\\" + $"{ransomeNameStr}.xlsx",columnConfig);
                return constructResponse(new
                {
                    excelFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.xlsx",

                    data = newList
                });

            }
            else if (dto.RequestExcel && dto.RequestPDF)
            {
                newList.ToExcel(contentPath + "\\uploads\\" + $"{ransomeNameStr}.xlsx", columnConfig);
                PdfConverter pdf = new PdfConverter();
                pdf.CreatePdfWithHeaderAndFooter(
                   newList, (new string[] { "Date",
                   "CustomerName",
                    "PolicyNumber",
                         "CompanyName",

                                                              "ReferenceNumber",
                                                                  "VehileType",

                    "MotorType",


                    "Debit",
                    "Credit",
                    "Balance", }),

                    contentPath + "\\uploads\\" + $"{ransomeNameStr}.pdf",
                    agent.Name, outstanding.ToString(), dto.DateFrom.ToShortDateString() + " to " + dto.DateTo.ToShortDateString()); ;
                OtherConstants.isSuccessful = true;
                return constructResponse(new
                {
                    excelFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.xlsx",
                    pdfFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.pdf",
                    data = newList
                });
            }
            else if (dto.RequestExcel == false && dto.RequestPDF == true)
            {
                PdfConverter pdf = new PdfConverter();
                pdf.CreatePdfWithHeaderAndFooter(
                   newList, (new string[] { "Date",
                   "CustomerName",
                    "PolicyNumber",
                         "CompanyName",

                                                              "ReferenceNumber",
                                                                  "VehileType",

                    "MotorType",


                    "Debit",
                    "Credit",
                    "Balance", }),

                    contentPath + "\\uploads\\" + $"{ransomeNameStr}.pdf",
                    agent.Name, outstanding.ToString(),dto.DateFrom.ToShortDateString()+" to "+ dto.DateTo.ToShortDateString()  );
                OtherConstants.isSuccessful = true;
                return constructResponse(new
                {

                    pdfFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.pdf",
                    data = newList
                });
            }
            else
            {
                return constructResponse(new
                {

                    data = newList
                });
            }





        }


        [HttpPost("GetBankStatement")]
        public async Task<BaseResponse> GetBankStatement([FromBody] StatementRequestDTO dto)
        {

         
            var transactions = (await _service.Get(x => x.Include(x => x.Bank)
            .Include(x => x.Company)
            .Include(x => x.Agent)
, x =>  x.BankId == dto.CompanyId)).Values.ToList();

            var list = new List<StatementDTO>();

            decimal outstanding_balance = 0;
            foreach (var item in transactions)
            {
              
              
                    StatementDTO DTO = new StatementDTO();
                    DTO.Date = item.TransactionDate.Date;
                    DTO.CompanyName = item.Company?.Name != null ? item.Company?.Name : item.Agent?.Name;
                    DTO.ReferenceNumber = item.TransactionReferenceNumber;
                if (item.Company == null && item.Agent == null)
                {
                    DTO.CompanyName = "Opening Balance";
                    if (item.TransactionType == TransactionType.Debit)
                    {
                        DTO.Debit = item.Amount;
                        DTO.Balance = item.Amount;
                        outstanding_balance = item.Amount;
                    }
                }
                else
                {
                    if (item.TransactionType == TransactionType.Credit)
                    {
                      
                        outstanding_balance -= item.Amount;
                        DTO.Credit = item.Amount;
                        DTO.ReferenceNumber = item.TransactionReferenceNumber;
                    }
                    else
                    {
                        outstanding_balance += item.Amount;
                        DTO.Debit = item.Amount;
                    }
                }


                    DTO.Balance = outstanding_balance;
                    list.Add(DTO);
                }


            var reservList = list.Where(x => x.Date.Date >= dto.DateFrom.Date).Where(x => x.Date.Date <= dto.DateTo.Date).ToList();

            var debit_balance = list.Where(x => x.Date.Date < dto.DateFrom.Date).Sum(x => x.Debit);
            var credit_balance= list.Where(x => x.Date.Date < dto.DateFrom.Date).Sum(x => x.Credit);
            decimal outstanding = 0;
            if (debit_balance >= credit_balance)
                outstanding = debit_balance - credit_balance;
            else
                outstanding = credit_balance - debit_balance;

            var newList = new List<StatementDTO>();
            var enity =new StatementDTO();
            enity.Balance = outstanding;

            newList.Add(enity);
            newList.AddRange(reservList);
            string wwwPath = _env.WebRootPath;
            string contentPath = _env.ContentRootPath;
            string path = Path.Combine(contentPath, $"\\uploads\\{new DateTime().Ticks.ToString()}.xlsx");
            var serverUrl = this.HttpContext.Request.Host.ToString();
            var ransomeNameStr = new Random().Next(DateTime.Now.Second, 10000).ToString() +
                new DateTime().Ticks.ToString();
            var isHttps = this.HttpContext.Request.IsHttps;

            var columnConfig = new List<ExcelColumnConfig>
{
    // add column mapping configuration here
        new ExcelColumnConfig("Date", p => ((StatementDTO)p).Date),
    new ExcelColumnConfig("Transaction Reference Number", p => ((StatementDTO)p).ReferenceNumber ?? string.Empty),

    new ExcelColumnConfig("Debit", p => ((StatementDTO)p).Debit),
    new ExcelColumnConfig("Credit", p => ((StatementDTO)p).Credit ),
    new ExcelColumnConfig("Balance", p => ((StatementDTO)p).Balance),




};
            newList.ToExcel(contentPath + "\\uploads\\" + $"{ransomeNameStr}.xlsx", columnConfig);
            OtherConstants.isSuccessful = true;
            return constructResponse(new
            {
                excelFileUrl = "https://" + serverUrl + $"/uploads/{ransomeNameStr}.xlsx",

                data = newList
            });
        }
         


        [HttpGet("GetRevenuePerMonthData")]
        public async Task<BaseResponse> GetRevenuePerMonthData(DateTime date)
        {
            date = date.ToUniversalTime();

           // var receivables = (await _service.Get(x => x.CompanyId == null && x.AgentId != null && x.TransactionType == TransactionType.Credit)).Values.Where(x => x.TransactionDate.Year == date.Year).ToList();
            //);
            //var sales = (await salesService.Get()).Values.Where(x => x.SalesDate.Year == date.Year).ToList();
           // var payables = (await _service.Get(x => x.AgentId == null && x.CompanyId != null && x.TransactionType == TransactionType.Debit)).Values.Where(x => x.TransactionDate.Year == date.Year).ToList(); ;
           var expense = (await expenseService.Get()).Values.Where(x => x.ExpenseDate.Year == date.Year).ToList(); ;
            var banks = (await _service.Get(x => x.BankId != null)).Values.Where(x => x.TransactionDate.Year == date.Year).ToList();

            var transactions = (await _service.Get()).Values.Where(x => x.TransactionDate.Year == date.Year).ToList();
            decimal totalRevenue = 0;

            var model = new List<decimal>();
            for (int i = 1; i <= 12; i++)
            {
                totalRevenue = 0;

                var receivables = transactions.Where(x => x.CompanyId == null && x.AgentId != null && x.TransactionType == TransactionType.Credit && x.TransactionDate.Month == i).ToList();

                        var payables = transactions.Where(x => x.AgentId == null && x.CompanyId != null && x.TransactionType == TransactionType.Debit && x.TransactionDate.Month == i).ToList();

                        var tempExpense = expense.Where(x => x.ExpenseDate.Month == i);
                        var bankbalance = banks.Where(x => x.TransactionType == TransactionType.Debit && x.TransactionDate.Month == i).Sum(x => x.Amount) - banks.Where(x => x.TransactionType == TransactionType.Credit && x.TransactionDate.Month == i).Sum(x => x.Amount);
                        totalRevenue = (bankbalance + receivables.Sum(x=>x.Amount)) - payables.Sum(x=>x.Amount);

                        //var totalTransactions = transactions.Where(p => p.CaseId == item.Id && p.CreatedDate.Month == item.CreatedDate.Month).Sum(p => p.Paid);
                        //var totalCommisions = Convert.ToDecimal(commissions.Where(p => p.CaseId == item.Id && p.CreatedDate.Month == item.CreatedDate.Month).Sum(p => p.Paid));
                        //totalRevenue += totalTransactions - totalCommisions;
                

                if (totalRevenue < 0)
                    model.Add(0);
                else
                    model.Add(totalRevenue);
               
            }


            return constructResponse(model);
          
        }
        private bool IsTheSameDay(DateTime date1, DateTime date2)
        {
            return (date1.Year == date2.Year && date1.DayOfYear == date2.DayOfYear);
        }

        [HttpGet("GetAnalytics")]
        public async Task<BaseResponse> GetAnalytics()
        {


            ProfitDTO dto = new ProfitDTO();
            var companies = (await _service.Get(x => x.Include(x => x.Company), x => x.AgentId == null && x.CompanyId != null)).Values.ToList();

            var CompaniesOutStandings = companies.GroupBy(x => x.Company.Name).Select(x => new
            {
                Company = x.Key,
                Payable = x.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount) - x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount),
                data = x.ToList()


            }).ToList();

            var agents = (await _service.Get(x => x.Include(x => x.Agent), x => x.CompanyId == null && x.AgentId != null)).Values.ToList();

            var AgentOutStandings = agents.GroupBy(x => x.Agent.Name).Select(x => new
            {
                Agent = x.Key,
                receving = x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount) - x.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount),
                data = x.ToList()


            }).ToList();
            var receivables = (await _service.Get(x => x.CompanyId==null && x.AgentId!=null && x.TransactionType==TransactionType.Credit)).Values;
            var sales = (await salesService.Get()).Values;
            var payables = (await _service.Get(x => x.AgentId == null && x.CompanyId != null && x.TransactionType == TransactionType.Debit)).Values;
            var expense = (await expenseService.Get()).Values.Sum(x=>x.ExpenseAmount);
            var banks = (await _service.Get(x=>x.BankId!=null)).Values.ToList();
            var bankBalance = banks.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount) - banks.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount);
            dto.TotalPayable = CompaniesOutStandings.Sum(x=>x.Payable);
            dto.TotalReceviable = AgentOutStandings.Sum(x=>x.receving);
            dto.TotalSales = sales.Count;
            dto.TotalProfit = (bankBalance + dto.TotalReceviable) - dto.TotalPayable;
            dto.TotalProfit -= expense;

            var transactions = (await _service.Get(x => x.Include(x => x.Bank).Include(x => x.Company).Include(x => x.Agent)
                        , x => x.BankId != null)).Values.ToList().Where(x=>x.TransactionDate.Date<=DateTime.Now.Date.AddDays(-1).Date).GroupBy(x=>x.Bank.BankName).Select(x=> new { 
                        BankName=x.Key,
                        Balance = (x.Where(x=>x.TransactionType==TransactionType.Debit).Sum(x=>x.Amount) - x.Where(x=>x.TransactionType==TransactionType.Credit).Sum(x=>x.Amount) )
                        
                        }).ToList();
            var yesterdayReceivables = (await _service.Get(x => x.CompanyId == null && x.AgentId != null && x.TransactionType == TransactionType.Credit )).Values.ToList().Where(x=>x.TransactionDate.Date.Date <= DateTime.Now.Date.AddDays(-1).Date).ToList().Sum(x=>x.Amount);
            var yesterdayPayables = (await _service.Get(x => x.AgentId == null && x.CompanyId != null && x.TransactionType == TransactionType.Debit )).Values.ToList().Where(x=> x.TransactionDate.Date.Date <= DateTime.Now.Date.AddDays(-1).Date).ToList().Sum(x => x.Amount);
            var yesterdayExpsense = (await expenseService.Get(x=>x.ExpenseDate.Date<=DateTime.Now.Date.AddDays(-1))).Values.Sum(x => x.ExpenseAmount); ;
            var yesterdayBanks = transactions.Sum(x => x.Balance);
            dto.YesterdaysReceviable = yesterdayReceivables;
            dto.YesterdaysPayable = yesterdayPayables;
            dto.YesterdaysSales = (await salesService.Get(x=>x.SalesDate.Date<= DateTime.Now.Date.AddDays(-1))).Values.ToList().Count;
            dto.YesterdaysProfit = (yesterdayBanks + dto.YesterdaysReceviable) - dto.YesterdaysPayable;
            dto.YesterdaysProfit -= yesterdayExpsense;
            //var receivables = (await _outstanding.Get(x => x.CompanyId == null));
            //var payables = (await _outstanding.Get(x => x.AgentId == null)).Values;
            //foreach (var item in receivables.Values)
            //{
            //    var IsToday = item.DateOfOutstanding.IsSameDay(DateTime.Now);
            //    var IsYesterday = item.DateOfOutstanding.IsYesterday();
            //    if (IsToday)
            //    {
            //        dto.TodayReceviable += item.Amount;
            //    }
            //     if (IsYesterday)
            //    {
            //        dto.YesterdaysReceviable += item.Amount;
            //    }


            //}
            //foreach (var item in payables)
            //{
            //    var IsToday = item.DateOfOutstanding.IsSameDay(DateTime.Now);
            //    var IsYesterday = item.DateOfOutstanding.IsYesterday();
            //    if (IsToday)
            //    {
            //        dto.TodaysPayable += item.Amount;
            //        dto.TodaySales++;
            //    }
            //    if (IsYesterday)
            //    {
            //        dto.YesterdaysPayable += item.Amount;
            //        dto.YesterdaysSales++;
            //    }
            //}
            //if (dto.YesterdaysPayable>dto.YesterdaysReceviable)
            //{
            //    dto.YesterdaysProfit = dto.YesterdaysPayable - dto.YesterdaysReceviable;
            //}
            //else
            //{
            //    dto.YesterdaysProfit = dto.YesterdaysReceviable - dto.YesterdaysPayable ;
            //}
            //if (dto.TodaysPayable > dto.TodayReceviable)
            //{
            //    dto.TodayProfit = dto.TodaysPayable - dto.TodayReceviable;
            //}
            //else
            //{
            //    dto.TodayProfit = dto.TodayReceviable - dto.TodaysPayable;
            //}




            //dto.TotalReceviable = (await _outstanding.Get(x => x.CompanyId == null )).Values.Sum(x => x.Amount);
            //dto.TotalPayable = (await _outstanding.Get(x => x.AgentId == null )).Values.Sum(x => x.Amount);
            //dto.TotalProfit = (await salesService.Get()).Values.Sum(x => x.SalesPrice);
            //dto.TotalSales = (await salesService.Get()).Values.Count;
            //if (dto.TotalPayable>dto.TotalReceviable)
            //{
            //    dto.TotalProfit = dto.TotalProfit - dto.TotalReceviable;
            //}
            //else if (dto.TotalReceviable > dto.TotalPayable)
            //{
            //    dto.TotalProfit = dto.TotalReceviable - dto.TotalProfit;
            //}

            OtherConstants.isSuccessful = true;
            return constructResponse(dto);
  
        }

        [HttpPost("RefundTransaction")]
        public async Task<BaseResponse> RefundTransaction([FromBody] Transaction tran)
        {
            var refundTransactionForAgent = new Transaction();
            refundTransactionForAgent.AgentId = tran.AgentId;
            refundTransactionForAgent.Amount = tran.GivenToAgent??0;
            refundTransactionForAgent.TransactionType = TransactionType.Debit;
            refundTransactionForAgent.VehicleModelId = tran.VehicleModelId;
            refundTransactionForAgent.MotorTypeId = tran.MotorTypeId;
            refundTransactionForAgent.PolicyNumber = tran.PolicyNumber;
            refundTransactionForAgent.isRefund = true;
            refundTransactionForAgent.TransactionDate = tran.TransactionDate;
            refundTransactionForAgent.CompanyName = tran.CompanyName;
            await _repo.Insert(new[] { refundTransactionForAgent });
            await _repo.SaveChanges();

            var refundForBroker = new Transaction();
            refundForBroker.CompanyId = tran.CompanyId;
            refundForBroker.Amount = tran.RecevingFromBroker??0;
            refundForBroker.TransactionType = TransactionType.Credit;
            refundForBroker.VehicleModelId = tran.VehicleModelId;
            refundForBroker.MotorTypeId = tran.MotorTypeId;
            refundForBroker.PolicyNumber = tran.PolicyNumber;
            refundForBroker.TransactionDate = tran.TransactionDate;
            refundForBroker.isRefund = true;
            refundForBroker.CompanyName = tran.CompanyName;
            await _repo.Insert(new[] { refundForBroker });
            await _repo.SaveChanges();
            OtherConstants.isSuccessful = true;
            return constructResponse(true);
        }

        [HttpGet("OverallInfo")]
        public async Task<BaseResponse> OverallInfo()
        {
            var companies = (await _service.Get(x => x.Include(x => x.Company), x => x.AgentId == null && x.CompanyId != null)).Values.ToList();

            var CompaniesOutStandings = companies.GroupBy(x => x.Company.Name).Select(x => new
            {
                Company = x.Key,
                Payable = x.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount) - x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount),
                data = x.ToList()


            }).ToList();

            var agents = (await _service.Get(x => x.Include(x => x.Agent), x => x.CompanyId == null && x.AgentId != null)).Values.ToList();

            var AgentOutStandings = agents.GroupBy(x => x.Agent.Name).Select(x => new
            {
                Agent = x.Key,
                receving = x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount) - x.Where(x => x.TransactionType == TransactionType.Debit).Sum(x => x.Amount),
                data = x.ToList()


            }).ToList();

            var transactions = (await _service.Get(x => x.Include(x => x.Bank)
, x => x.BankId !=null)).Values.ToList().GroupBy(x=>x.Bank.BankName).Select(x=> new { 

            BankName=x.Key,
            Amount=x.Where(x=>x.TransactionType==TransactionType.Debit).Sum(x=>x.Amount)- x.Where(x => x.TransactionType == TransactionType.Credit).Sum(x => x.Amount)

});
            OtherConstants.isSuccessful = true;

            return constructResponse(new { Brokers = CompaniesOutStandings, Agents = AgentOutStandings, Banks = transactions });
        }

        [HttpGet("GetRefundTransactions")]
        public async Task<BaseResponse> GetRefundTransactions(int page, int pageSize) {

            OtherConstants.isSuccessful = true;

            return constructResponse(await _repo.GetRefundTransactions(page, pageSize));  
        }
    }

    
    public class ProfitDTO
    {
        public decimal? TodayProfit { get; set; }
        public decimal? TodaySales { get; set; }
        public decimal? TodaysPayable { get; set; }
        public decimal? TodayReceviable { get; set; }
        public decimal? YesterdaysProfit { get; set; }
        public decimal? YesterdaysSales { get; set; }
        public decimal? YesterdaysPayable { get; set; }
        public decimal? YesterdaysReceviable { get; set; }

        public decimal? TotalProfit { get; set; }
        public decimal? TotalSales { get; set; }
        public decimal? TotalPayable { get; set; }
        public decimal? TotalReceviable { get; set; }

    }
    public class StatementRequestDTO
    {
        public int CompanyId { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public bool RequestExcel { get; set; }
        public bool RequestPDF { get; set; }
    }
    public class StatementDTO
    {

        public DateTime Date { get; set; }
        public string ReferenceNumber { get; set; }
        public string MotorType { get; set; }
        public string CustomerName { get; set; }
        public string CompanyName { get; set; }
        public string GrossPremium { get; set; }
        public string Comission { get; set; }
        public string Status { get; set; }
        public string PolicyIssuer { get; set; }
        public string Remark { get; set; }
        public string VehileType { get; set; }
        public TransactionType TransactionType { get; set; }
        public decimal Debit { get; set; }
        public decimal Credit { get; set; }
        public decimal Balance { get; set; }
        public string PolicyNumber { get; set; }
        public bool IsRefund { get; set; }
    }
    public static class ExtensionMethods
    {
        public static bool IsSameDay(this DateTime datetime1, DateTime datetime2)
        {
            return datetime1.Year == datetime2.Year
                && datetime1.Month == datetime2.Month
                && datetime1.Day == datetime2.Day;
        }
        public static bool IsYesterday(this DateTime datetime1)
        {
            return DateTime.Today - datetime1.Date == TimeSpan.FromDays(1);
        }
    }
}
