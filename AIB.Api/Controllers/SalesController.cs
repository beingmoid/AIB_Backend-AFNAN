using AIB.Common;
using AIB.Common.ExcelKit;
using AIB.Data;
using AIB.Data.Entities;
using AIB.Services.Core;
using AutoMapper;
using Castle.Core.Logging;
using FluentExcel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static AIB.Api.SalesDto;
using static AIB.Common.Constants;


namespace AIB.Api.Controllers
{

    public class SalesController : BaseController<Sales, int>
    {
        private readonly ISalesService _service;
        private readonly IServiceProvider _serviceProvider;
        private readonly ILogger<SalesController> _logger;
        private AIBContext _context;
        private readonly IWebHostEnvironment _env;
        public SalesController(ILogger<SalesController> logger,IServiceProvider serviceProvider,
           IWebHostEnvironment env,
           AIBContext context,
        IMapper mapper, ISalesService service) : base(serviceProvider, mapper, service)
        {
            _service = service;
            _serviceProvider = serviceProvider;
            _logger = logger;
            _env = env;
            _context = context;
        }
        public void ApplyCorrectedFormula(ref Sales sale)
        {
            decimal commissionPercentage = sale.Commission / 100;
            decimal priceWithoutVat = sale.PremiumPrice / 1.05m;
            decimal vat = sale.PremiumPrice - priceWithoutVat;
            decimal commissionRate = priceWithoutVat * commissionPercentage;
            decimal net = (priceWithoutVat - commissionRate) + vat;

            sale.Commission = commissionRate;
            sale.NETPrice = net;
        }
        [AllowAnonymous]
        [HttpGet("updateAffectedSales")]
        public async Task<IActionResult> UpdateAffectedSales()
        {
            // Retrieve the affected sales records from the database
            var salesToUpdate = await _context.Set<Sales>().ToListAsync();

            // Apply the corrected formula and update the records
            for (int i = 0; i < salesToUpdate.Count; i++)
            {
                Sales sale = salesToUpdate[i];
                ApplyCorrectedFormula(ref sale);
                salesToUpdate[i] = sale;
            }

            // Save the updated records back to the database
           var res= await _context.SaveChangesAsync();

            return Ok();
        }
        public async override Task<BaseResponse> Get()
        {
            var sales = (await _service.Get(x => x.Include(x => x.Company).Include(x => x.SalesAgent).Include(x => x.VehicleModel).Include(x => x.MotorType).Include(x => x.Broker))).Values.ToList();
            return constructResponse(sales);
        }
        [HttpGet("GetPaginated")]
        public async Task<ActionResult> GetPaginated(int page, int pageSize)
        {
            OtherConstants.isSuccessful = true;

            var items = (await _service.GetPaginatedAPI(page, pageSize));

            return new JsonResult(constructResponse(items));
        }
        [HttpGet("GetTotalSales")]
        public async Task<ActionResult> GetTotalSales()
        {
            OtherConstants.isSuccessful = true;

            var items = (await _service.Get()).Values.Count;

            return new JsonResult(constructResponse(items));
        }

        [HttpGet("Search")]
        public async Task<ActionResult> SearchSales(string search)
        {
            var searchItems = new List<Sales>();
            var outDate = new DateTime();
            var date = DateTime.TryParse(search, out outDate);
            if (date)
            {
                var response =

              (await _service.Get(x => x.Include(x => x.Company).Include(x => x.SalesAgent).Include(x => x.VehicleModel).
              Include(x => x.MotorType).Include(x => x.Broker), x =>

            x.SalesDate.Date == outDate.Date

              )).Values.ToList();

                return new JsonResult(constructResponse(response));
            }
            else
            {
                var response =

               (await _service.Get(x => x.Include(x => x.Company).Include(x => x.SalesAgent).Include(x => x.VehicleModel).
               Include(x => x.MotorType).Include(x => x.Broker), x =>

               (x.PolicyNumber.StartsWith(search)
               ||
               x.PolicyNumber.Contains(search)
               ||
               x.PolicyNumber.EndsWith(search)
               )
               ||
               (
               (x.CustomerName.StartsWith(search))
                ||
                (x.CustomerName.Contains(search))
                     ||
                (x.CustomerName.EndsWith(search))
               )

               )).Values.ToList();

                return new JsonResult(constructResponse(response));
            }

        }
        [HttpGet("GetPoliciesFromDateRange")]
        public async Task<BaseResponse> GetPoliciesFromDateRange(DateTime fromDate, DateTime toDate, string searchTerm,int pageSize=50, int page=1)
        {
     
            _logger.Log( LogLevel.None, "Log Started at :" +DateTime.Now.ToLongTimeString());
            _context = _serviceProvider.GetRequiredService<AIBContext>();
            var fromDateTime = fromDate;
            var toDateTime = toDate;

            var query = _context.Set<Sales>()
   .Include(p => p.Company)
   .Include(p => p.VehicleModel)
   .Include(p => p.MotorType)
   .Include(p => p.SalesAgent)
   .Include(p => p.Broker)
   .Include(p => p.Branch);

            _logger.Log(LogLevel.Critical, "First Query Executed" + DateTime.Now.ToLongTimeString());
            var ransomeNameStr = new Random().Next(DateTime.Now.Second, 999999999).ToString() +
    new DateTime().Ticks.ToString();
             var fileName = $"{ransomeNameStr}.xlsx";
            var filePath = Path.Combine(_env.ContentRootPath, "uploads", fileName);
            _logger.Log(LogLevel.Critical, "File Name Intialized" + DateTime.Now.ToLongTimeString());
            if (System.IO.File.Exists(filePath))
            {
                return constructResponse(new { message = "Excel file already exists." });
            }

            var columnConfig = new List<ExcelColumnConfig>
{
    // add column mapping configuration here
    new ExcelColumnConfig("Policy Number", p => ((SalesDto)p).PolicyNumber ?? string.Empty),
    new ExcelColumnConfig("Customer Name", p => ((SalesDto)p).CustomerName ?? string.Empty),
    new ExcelColumnConfig("Company Name", p => ((SalesDto)p).CompanyName ?? string.Empty),
    new ExcelColumnConfig("Vehicle Model", p => ((SalesDto)p).VehicleModelName ?? string.Empty),
    new ExcelColumnConfig("Motor Type", p => ((SalesDto)p).MotorTypeName ?? string.Empty),
    new ExcelColumnConfig("Sales Agent", p => ((SalesDto)p).SalesAgentName ?? string.Empty),
    new ExcelColumnConfig("Broker Name", p => ((SalesDto)p).BrokerName ?? string.Empty),
    new ExcelColumnConfig("Branch Name", p => ((SalesDto)p).BranchName ?? string.Empty),
    new ExcelColumnConfig("Sales Date", p => ((SalesDto)p).SalesDate.ToString("dd/MM/yyyy")),
    new ExcelColumnConfig("Commission", p => ((SalesDto)p).Commission.ToString()),
    new ExcelColumnConfig("NET Price", p => ((SalesDto)p).NETPrice.ToString()),
    new ExcelColumnConfig("Sales Price", p => ((SalesDto)p).SalesPrice.ToString()),
    new ExcelColumnConfig("Premium Price", p => ((SalesDto)p).PremiumPrice.ToString()),
    new ExcelColumnConfig("Status", p => ((SalesDto)p).Status.ToString()),
    new ExcelColumnConfig("Policy Issuer", p => ((SalesDto)p).PolicyIssuer ?? string.Empty),
    new ExcelColumnConfig("Remark", p => ((SalesDto)p).Remark ?? string.Empty),
    new ExcelColumnConfig("Sale Commission", p => ((SalesDto)p).SaleCommission.ToString())
};

            _logger.Log(LogLevel.Critical, "Excel Mapping Done" + DateTime.Now.ToLongTimeString());
                var sales = await query
                    .Where(p => p.SalesDate >= fromDateTime && p.SalesDate < toDateTime ||
                        (string.IsNullOrEmpty(searchTerm) ||
                            p.PolicyNumber.Contains(searchTerm) ||
                            p.CustomerName.Contains(searchTerm) ||
                            p.Company.Name.Contains(searchTerm) ||
                            p.VehicleModel.Name.Contains(searchTerm) ||
                            p.MotorType.Name.Contains(searchTerm) ||
                            p.SalesAgent.Name.Contains(searchTerm) ||
                            p.Broker.Name.Contains(searchTerm) ||
                            p.Branch.Name.Contains(searchTerm) ||
                            p.PolicyIssuer.Contains(searchTerm) ||
                            p.Remark.Contains(searchTerm)))
                    .OrderBy(p => p.SalesDate) // sort by SalesDate ascending
                    .Select(p => new SalesDto
                    {
                        PolicyNumber = p.PolicyNumber,
                        CustomerName = p.CustomerName,
                        Commission = p.Commission,
                        NETPrice = p.NETPrice,
                        SalesPrice = p.SalesPrice,
                        PremiumPrice = p.PremiumPrice,
                        SalesDate = p.SalesDate,
                        CompanyId = p.CompanyId,
                        CompanyName = p.Company.Name,
                        VehicleModelId = p.VehicleModelId,
                        VehicleModelName = p.VehicleModel.Name,
                        MotorTypeId = p.MotorTypeId,
                        MotorTypeName = p.MotorType.Name,
                        SalesAgentId = p.SalesAgentId,
                        SalesAgentName = p.SalesAgent.Name,
                        BrokerId = p.BrokerId,
                        BrokerName = p.Broker.Name,
                        BranchId = p.BranchId,
                        BranchName = p.Branch.Name,
                        Status = Convert.ToInt32(p.Status),
                        PolicyIssuer = p.PolicyIssuer,
                        Remark = p.Remark,
                        SaleCommission = p.SaleCommission
                    })
                    .ToListAsync();

                    sales.ToExcel(filePath, columnConfig);
                var serverUrl = this.HttpContext.Request.Host.ToString();
                var serverpath = Request.IsHttps ? "https://" : "http://" + serverUrl + "/uploads/" + fileName;
                OtherConstants.isSuccessful = true;
                _logger.Log(LogLevel.Critical, "All Process Done" + DateTime.Now.ToLongTimeString());

       var policies = await   query.Where(p => p.SalesDate >= fromDateTime && p.SalesDate < toDateTime ||
 (string.IsNullOrEmpty(searchTerm) ||
     p.PolicyNumber.Contains(searchTerm) ||
     p.CustomerName.Contains(searchTerm) ||
     p.Company.Name.Contains(searchTerm) ||
     p.VehicleModel.Name.Contains(searchTerm) ||
     p.MotorType.Name.Contains(searchTerm) ||
     p.SalesAgent.Name.Contains(searchTerm) ||
     p.Broker.Name.Contains(searchTerm) ||
     p.Branch.Name.Contains(searchTerm) ||
     p.PolicyIssuer.Contains(searchTerm) ||
     p.Remark.Contains(searchTerm)))
  .OrderBy(p => p.SalesDate) // sort by SalesDate ascending

.ToListAsync();

            return constructResponse(new { data = policies.Select(p => new PolicyDto
            {
                PolicyNumber = p.PolicyNumber,
                CustomerName = p.CustomerName,
                Commission = p.Commission,
                NETPrice = p.NETPrice,
                SalesPrice = p.SalesPrice,
                PremiumPrice = p.PremiumPrice,
                SalesDate = p.SalesDate,
                CompanyId = p.CompanyId,
                Company = new CompanyDto
                {
                    Id = p.Company.Id,
                    Name = p.Company.Name
                },
                VehicleModelId = p.VehicleModelId,
                VehicleModel = new VehicleModelDto
                {
                    Id = p.VehicleModel.Id,
                    Name = p.VehicleModel.Name
                },
                MotorTypeId = p.MotorTypeId,
                MotorType = new MotorTypeDto
                {
                    Id = p.MotorType.Id,
                    Name = p.MotorType.Name
                },
                SalesAgentId = p.SalesAgentId,
                SalesAgent = new AgentDto
                {
                    Id = p.SalesAgent.Id,
                    Name = p.SalesAgent.Name
                } ,
                BrokerId = p.BrokerId,
                Broker = new BrokerDto
                {
                    Id = p.Broker.Id,
                    Name = p.Broker.Name
                },
                BranchId = p.BranchId,
                Branch = p.Branch != null ? new BranchDto
                {
                    Id = p.Branch.Id,
                    Name = p.Branch.Name
                } : null,
                Status = Convert.ToInt32( p.Status),
                PolicyIssuer = p.PolicyIssuer,
                Remark = p.Remark,
                SaleCommission = p.SaleCommission
            }).ToList().Skip(pageSize * (page - 1))
            .Take(pageSize).ToList(), file = serverpath });

            }

       


     

        [HttpGet("Filter")]
        public async Task<ActionResult> Filter(DateTime from, DateTime to, bool requestExcel)
        {
            var data = await _service.Get(x =>
                x.Include(x => x.Company)
                .Include(x => x.Broker)
                    .Include(x => x.MotorType)

                .Include(x => x.SalesAgent)
                .Include(x => x.VehicleModel)
                ,
                x =>

            (x.SalesDate.Date >= from.Date)

            &&

            (x.SalesDate.Date <= to.Date)

            );



            OtherConstants.isSuccessful = true;
            return new JsonResult(constructResponse(data.Values.ToList()));
        }

    }

    public class SearchOptions
    {

    }
    public class ListResult<T>
    {

        public int TotalCount { get; set; }
        public List<T> ResponseItem { get; set; }

    }
}
