using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class _56456465 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Agent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    Name = table.Column<string>(nullable: true),
                    OpeningBalance = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agent", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    PrimaryPhone = table.Column<string>(nullable: true),
                    SecondaryPhone = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Nationality = table.Column<string>(nullable: true),
                    DateOfBirth = table.Column<string>(nullable: true),
                    JobTitle = table.Column<string>(nullable: true),
                    MarriageStatus = table.Column<int>(nullable: false),
                    TypeOfUser = table.Column<int>(nullable: false),
                    Gender = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BankAccount",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    BankName = table.Column<string>(nullable: true),
                    BankShortName = table.Column<string>(nullable: true),
                    BankAccountNo = table.Column<string>(nullable: true),
                    BankIBANNo = table.Column<string>(nullable: true),
                    BankLogoUrl = table.Column<string>(nullable: true),
                    BranchName = table.Column<string>(nullable: true),
                    SWIFTCode = table.Column<string>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    AccountType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankAccount", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Broker",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Broker", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Company",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    Name = table.Column<string>(nullable: true),
                    OpeningBalance = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Company", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Expense",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    ExpenseId = table.Column<int>(nullable: true),
                    ExpenseName = table.Column<string>(nullable: true),
                    ExpenseDate = table.Column<DateTime>(nullable: false),
                    ExpenseAmount = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expense", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Expense_Expense_ExpenseId",
                        column: x => x.ExpenseId,
                        principalTable: "Expense",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Invoice",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    InvoicedTo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoice", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MotorType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MotorType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VehicleModel",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicleModel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sales",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    PolicyNumber = table.Column<string>(nullable: true),
                    CustomerName = table.Column<string>(nullable: true),
                    Commission = table.Column<decimal>(nullable: false),
                    NETPrice = table.Column<decimal>(nullable: false),
                    SalesPrice = table.Column<decimal>(nullable: false),
                    PremiumPrice = table.Column<decimal>(nullable: false),
                    SalesDate = table.Column<DateTime>(nullable: false),
                    CompanyId = table.Column<int>(nullable: false),
                    VehicleModelId = table.Column<int>(nullable: false),
                    MotorTypeId = table.Column<int>(nullable: false),
                    SalesAgentId = table.Column<int>(nullable: false),
                    InvoiceId = table.Column<int>(nullable: true),
                    BrokerId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sales", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sales_Broker_BrokerId",
                        column: x => x.BrokerId,
                        principalTable: "Broker",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Sales_Company_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Company",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Sales_Invoice_InvoiceId",
                        column: x => x.InvoiceId,
                        principalTable: "Invoice",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Sales_MotorType_MotorTypeId",
                        column: x => x.MotorTypeId,
                        principalTable: "MotorType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Sales_Agent_SalesAgentId",
                        column: x => x.SalesAgentId,
                        principalTable: "Agent",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Sales_VehicleModel_VehicleModelId",
                        column: x => x.VehicleModelId,
                        principalTable: "VehicleModel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Transaction",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    TransactionDate = table.Column<DateTime>(nullable: false),
                    BankId = table.Column<int>(nullable: true),
                    TransactionType = table.Column<int>(nullable: false),
                    AgentId = table.Column<int>(nullable: true),
                    CompanyId = table.Column<int>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    isRefund = table.Column<bool>(nullable: true),
                    CompanyName = table.Column<string>(nullable: true),
                    RecevingFromBroker = table.Column<decimal>(nullable: true),
                    GivenToAgent = table.Column<decimal>(nullable: true),
                    VehicleModelId = table.Column<int>(nullable: true),
                    MotorTypeId = table.Column<int>(nullable: true),
                    TransactionReferenceNumber = table.Column<string>(nullable: true),
                    PolicyNumber = table.Column<string>(nullable: true),
                    SalesId = table.Column<int>(nullable: true),
                    ExpenseId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transaction", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Transaction_Agent_AgentId",
                        column: x => x.AgentId,
                        principalTable: "Agent",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transaction_BankAccount_BankId",
                        column: x => x.BankId,
                        principalTable: "BankAccount",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transaction_Company_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Company",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transaction_Expense_ExpenseId",
                        column: x => x.ExpenseId,
                        principalTable: "Expense",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transaction_MotorType_MotorTypeId",
                        column: x => x.MotorTypeId,
                        principalTable: "MotorType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transaction_Sales_SalesId",
                        column: x => x.SalesId,
                        principalTable: "Sales",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Transaction_VehicleModel_VehicleModelId",
                        column: x => x.VehicleModelId,
                        principalTable: "VehicleModel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Outstandings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateUserId = table.Column<string>(nullable: true),
                    EditUserId = table.Column<string>(nullable: true),
                    EditTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    CompanyId = table.Column<int>(nullable: true),
                    DateOfOutstanding = table.Column<DateTime>(nullable: false),
                    AgentId = table.Column<int>(nullable: true),
                    SalesId = table.Column<int>(nullable: true),
                    TransactionId = table.Column<int>(nullable: true),
                    InvoiceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Outstandings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Outstandings_Agent_AgentId",
                        column: x => x.AgentId,
                        principalTable: "Agent",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Outstandings_Company_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Company",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Outstandings_Invoice_InvoiceId",
                        column: x => x.InvoiceId,
                        principalTable: "Invoice",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Outstandings_Sales_SalesId",
                        column: x => x.SalesId,
                        principalTable: "Sales",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Outstandings_Transaction_TransactionId",
                        column: x => x.TransactionId,
                        principalTable: "Transaction",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a18be9c0-aa65-4af8-bd17-00bd9344e575", "1e8c3458-bf4f-4bcf-a85b-f955c775743b", "Admin", "Admin" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "Address", "City", "ConcurrencyStamp", "Country", "DateOfBirth", "Email", "EmailConfirmed", "FirstName", "Gender", "JobTitle", "LastName", "LockoutEnabled", "LockoutEnd", "MarriageStatus", "Nationality", "NormalizedEmail", "NormalizedUserName", "Password", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "PrimaryPhone", "SecondaryPhone", "SecurityStamp", "TwoFactorEnabled", "TypeOfUser", "UserName" },
                values: new object[] { "a18be9c0-aa65-4af8-bd17-00bd9344e575", 0, null, null, "d31e0ffa-cb4b-407f-82cb-f92f7962e720", null, null, "sales1@panoramains.com", true, "sales1@panoramains.com", 1, null, null, false, null, 1, null, "sales1@panoramains.com", "sales1@panoramains.com", null, "AQAAAAEAACcQAAAAEKoI9CVPzgph0PbX1ksjGJxAlIn8XGTmCytfdJzcEEY1lR6TLSwFhRHgYc/RtLdROQ==", null, false, null, null, "", false, 2, "sales1@panoramains.com" });

            migrationBuilder.InsertData(
                table: "AspNetRoleClaims",
                columns: new[] { "Id", "ClaimType", "ClaimValue", "RoleId" },
                values: new object[,]
                {
                    { 1, "Dashboard", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 29, "Statements", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 30, "Statements", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 31, "Statements", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 32, "Statements", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 33, "Settings", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 34, "Settings", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 35, "Settings", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 36, "Settings", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 37, "Agent", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 38, "Agent", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 39, "Agent", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 40, "Agent", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 41, "VehicleType", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 42, "VehicleType", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 43, "VehicleType", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 44, "VehicleType", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 45, "MotorType", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 46, "MotorType", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 47, "MotorType", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 48, "MotorType", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 49, "Expenses", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 50, "Expenses", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 51, "Expenses", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 28, "TeamMember", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 52, "Expenses", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 27, "TeamMember", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 25, "TeamMember", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 2, "Dashboard", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 3, "Dashboard", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 4, "Dashboard", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 5, "SalesManagement", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 6, "SalesManagement", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 7, "SalesManagement", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 8, "SalesManagement", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 9, "BankAccount", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 10, "BankAccount", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 11, "BankAccount", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 12, "BankAccount", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 13, "Broker", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 14, "Broker", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 15, "Broker", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 16, "Broker", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 17, "Outstandings", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 18, "Outstandings", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 19, "Outstandings", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 20, "Outstandings", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 21, "Transaction", "Create", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 22, "Transaction", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 23, "Transaction", "View", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 24, "Transaction", "Delete", "a18be9c0-aa65-4af8-bd17-00bd9344e575" },
                    { 26, "TeamMember", "Edit", "a18be9c0-aa65-4af8-bd17-00bd9344e575" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "a18be9c0-aa65-4af8-bd17-00bd9344e575", "a18be9c0-aa65-4af8-bd17-00bd9344e575" });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Expense_ExpenseId",
                table: "Expense",
                column: "ExpenseId");

            migrationBuilder.CreateIndex(
                name: "IX_Outstandings_AgentId",
                table: "Outstandings",
                column: "AgentId");

            migrationBuilder.CreateIndex(
                name: "IX_Outstandings_CompanyId",
                table: "Outstandings",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Outstandings_InvoiceId",
                table: "Outstandings",
                column: "InvoiceId");

            migrationBuilder.CreateIndex(
                name: "IX_Outstandings_SalesId",
                table: "Outstandings",
                column: "SalesId");

            migrationBuilder.CreateIndex(
                name: "IX_Outstandings_TransactionId",
                table: "Outstandings",
                column: "TransactionId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_BrokerId",
                table: "Sales",
                column: "BrokerId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_CompanyId",
                table: "Sales",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_InvoiceId",
                table: "Sales",
                column: "InvoiceId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_MotorTypeId",
                table: "Sales",
                column: "MotorTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_SalesAgentId",
                table: "Sales",
                column: "SalesAgentId");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_VehicleModelId",
                table: "Sales",
                column: "VehicleModelId");

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_AgentId",
                table: "Transaction",
                column: "AgentId");

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_BankId",
                table: "Transaction",
                column: "BankId");

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_CompanyId",
                table: "Transaction",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_ExpenseId",
                table: "Transaction",
                column: "ExpenseId");

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_MotorTypeId",
                table: "Transaction",
                column: "MotorTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_SalesId",
                table: "Transaction",
                column: "SalesId");

            migrationBuilder.CreateIndex(
                name: "IX_Transaction_VehicleModelId",
                table: "Transaction",
                column: "VehicleModelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Outstandings");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Transaction");

            migrationBuilder.DropTable(
                name: "BankAccount");

            migrationBuilder.DropTable(
                name: "Expense");

            migrationBuilder.DropTable(
                name: "Sales");

            migrationBuilder.DropTable(
                name: "Broker");

            migrationBuilder.DropTable(
                name: "Company");

            migrationBuilder.DropTable(
                name: "Invoice");

            migrationBuilder.DropTable(
                name: "MotorType");

            migrationBuilder.DropTable(
                name: "Agent");

            migrationBuilder.DropTable(
                name: "VehicleModel");
        }
    }
}
