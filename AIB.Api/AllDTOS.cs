
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AIB.Api
{
    public class ConnectionMiddleware
    {
        private readonly RequestDelegate _next;

        public ConnectionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            // Check if the request contains the connection header
            if (context.Request.Headers.TryGetValue("ConnectionHeader", out var headerValue))
            {
                // Parse the header value into a Guid
                if (Guid.TryParse(headerValue, out var connectionId))
                {
                    // Set the connection information based on the connection ID
                    SetConnectionInfo(connectionId);
                }
            }

            await _next(context);
        }

        private void SetConnectionInfo(Guid connectionId)
        {
            // Logic to set the connection information based on the connection ID
            ConnectionManager.Id = connectionId;
            ConnectionManager.IsDefault = GetIsDefault(connectionId);
            ConnectionManager.Name = GetName(connectionId);
            ConnectionManager.ConString = GetConnectionString(connectionId);
            ConnectionManager.IsActive = GetIsActive(connectionId);
        }

        private bool GetIsDefault(Guid connectionId)
        {
            // Logic to determine if the connection is default or not
            // Here's an example implementation assuming connection ID "c5e7a6b1-8e9f-4d8a-af14-18c36c079201" is the default
            return connectionId == new Guid("c5e7a6b1-8e9f-4d8a-af14-18c36c079201");
        }

        private string GetName(Guid connectionId)
        {
            // Logic to retrieve the name associated with the connection ID
            // Here's an example implementation based on a dictionary lookup
            var connectionNames = new Dictionary<Guid, string>
        {
            { new Guid("c5e7a6b1-8e9f-4d8a-af14-18c36c079201"), "Connection 1" },
            { new Guid("d9f520c6-3bf7-49f2-9cd0-8f2f06342b71"), "Connection 2" }
        };

            return connectionNames.ContainsKey(connectionId) ? connectionNames[connectionId] : "Unknown Connection";
        }

        private string GetConnectionString(Guid connectionId)
        {
            // Logic to retrieve the connection string based on the connection ID
            // Here's an example implementation based on a dictionary lookup
            var connectionStrings = new Dictionary<Guid, string>
        {
            { new Guid("c5e7a6b1-8e9f-4d8a-af14-18c36c079201"), "Connection String 1" },
            { new Guid("d9f520c6-3bf7-49f2-9cd0-8f2f06342b71"), "Connection String 2" }
        };

            return connectionStrings.ContainsKey(connectionId) ? connectionStrings[connectionId] : "Default Connection String";
        }

        private bool GetIsActive(Guid connectionId)
        {
            // Logic to determine if the connection is active or not
            // Here's an example implementation assuming connection ID "d9f520c6-3bf7-49f2-9cd0-8f2f06342b71" is active
            return connectionId == new Guid("d9f520c6-3bf7-49f2-9cd0-8f2f06342b71");
        }
    }

    public static class ConnectionManager
    {
        public static Guid Id { get; set; }
        public static bool IsDefault { get; set; }
        public static string Name{ get; set; }
        public static string ConString { get; set; }
        public static bool IsActive { get; set; }
    }
    public class SalesDto
    {
        public string PolicyNumber { get; set; }
        public string CustomerName { get; set; }
        public decimal Commission { get; set; }
        public decimal NETPrice { get; set; }
        public decimal SalesPrice { get; set; }
        public decimal PremiumPrice { get; set; }
        public DateTime SalesDate { get; set; }
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public int VehicleModelId { get; set; }
        public string VehicleModelName { get; set; }

        public CompanyDto Company { get; set; }

        public VehicleModelDto VehicleModel { get; set; }
        public int MotorTypeId { get; set; }
        public MotorTypeDto MotorType { get; set; }
        public string MotorTypeName { get; set; }
        public AgentDto SalesAgent { get; set; }
        public int SalesAgentId { get; set; }
        public string SalesAgentName { get; set; }
        public int BrokerId { get; set; }
        public string BrokerName { get; set; }
        public Guid? BranchId { get; set; }
 



        public int? InvoiceId { get; set; }
        public InvoiceDto Invoice { get; set; }

        public BrokerDto Broker { get; set; }

        public BranchDto Branch { get; set; }
        public string BranchName { get; set; }
        public int Status { get; set; }
        public string PolicyIssuer { get; set; }
        public string Remark { get; set; }
        public decimal? SaleCommission { get; set; }

        public class PolicyDto
        {
            public string PolicyNumber { get; set; }
            public string CustomerName { get; set; }
            public decimal Commission { get; set; }
            public decimal NETPrice { get; set; }
            public decimal SalesPrice { get; set; }
            public decimal PremiumPrice { get; set; }
            public DateTime SalesDate { get; set; }
            public int CompanyId { get; set; }
            public CompanyDto Company { get; set; }
            public int VehicleModelId { get; set; }
            public VehicleModelDto VehicleModel { get; set; }
            public int MotorTypeId { get; set; }
            public MotorTypeDto MotorType { get; set; }
            public int SalesAgentId { get; set; }
            public AgentDto SalesAgent { get; set; }
            public int? InvoiceId { get; set; }
            public InvoiceDto Invoice { get; set; }
            public int BrokerId { get; set; }
            public BrokerDto Broker { get; set; }
            public Guid? BranchId { get; set; }
            public BranchDto Branch { get; set; }
            public int Status { get; set; }
            public string PolicyIssuer { get; set; }
            public string Remark { get; set; }
            public decimal? SaleCommission { get; set; }
        }

        public class CompanyDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        public class VehicleModelDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        public class MotorTypeDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        public class AgentDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        public class InvoiceDto
        {
            public int Id { get; set; }
            public string InvoiceNumber { get; set; }
        }

        public class BrokerDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        public class BranchDto
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
        }

    }
}
