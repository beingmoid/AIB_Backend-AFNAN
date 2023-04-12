
using System;

namespace AIB.Api
{
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
