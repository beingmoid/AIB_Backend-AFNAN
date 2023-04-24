using AIB.Common;
using AIB.Common.EmailService;
using AIB.Data;
using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Services;
using AIB.Services.Core;
using AIB.Services.Mapper;
using AutoMapper;
using DinkToPdf;
using DinkToPdf.Contracts;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;
using System.Text;
using System.Threading.Tasks;
using Wkhtmltopdf.NetCore;
using static AIB.Common.Constants;

namespace AIB.Api
{
    public class Startup
    {

        private readonly IWebHostEnvironment _env;
        public Startup(IWebHostEnvironment env)
        {
            _env = env;
            Utils._config = new ConfigurationBuilder().SetBasePath(_env.ContentRootPath)
              .AddJsonFile("appSettings.json", optional: true, reloadOnChange: true)
               .AddEnvironmentVariables()
          .Build();

            //if (_env.IsDevelopment())
            //{
            //    Utils._config = new ConfigurationBuilder().SetBasePath(_env.ContentRootPath)
            //   .AddJsonFile($"appSettings.{_env.EnvironmentName}.json", optional: true)
            //   .AddEnvironmentVariables()
            //   .Build();
            //}
            ConnectionStrings.AIBConnectionString = Utils._config["ConnectionStrings:AIBConnectionString"];
            this.Configuration = Utils._config;
        }
        
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddAutoMapper(typeof(AutoMapperMappings).Assembly);
            services.AddControllers().AddNewtonsoftJson(options =>
           options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
       );
            services.AddDbContext<AIBContext>(options =>
            {
                options.UseSqlServer(ConnectionStrings.AIBConnectionString)
                .EnableSensitiveDataLogging()
                .UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole().SetMinimumLevel(LogLevel.Information)));
            });

       
            services.Configure<SmtpSettings>(Utils._config.GetSection("SmtpSettings"));
            services.AddSingleton<IMailer, Mailer>();
            //Identity Service
            services.AddIdentity<ExtendedUser, ExtendedRole>(option =>
            {
                option.Password.RequireDigit = false;
                option.Password.RequiredLength = 8;
                option.Password.RequireNonAlphanumeric = true;
                option.Password.RequireUppercase = false;
                option.Password.RequireLowercase = false;
            }).AddEntityFrameworkStores<AIBContext>()
                .AddDefaultTokenProviders();
            services.AddHttpContextAccessor();

            services.AddAuthorization(options =>
            {
                options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
                .RequireAuthenticatedUser().Build();
            });

            services.AddAuthentication()
           .AddCookie()
           .AddJwtBearer(config =>
           {
               config.TokenValidationParameters = new TokenValidationParameters()
               {
                   ValidIssuer = JWTConfiguration.JWTIssuer,
                   ValidAudience = JWTConfiguration.JWTAudience,
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JWTConfiguration.JWTKey)),
                   ClockSkew=TimeSpan.Zero
               };
           });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Casolve API", Version = "v1" });

                c.AddSecurityDefinition("basic", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                    In = ParameterLocation.Header,
                    Description = "Basic Authorization header using the Bearer scheme."
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                      {
                          {
                                new OpenApiSecurityScheme
                                  {
                                      Reference = new OpenApiReference
                                      {
                                          Type = ReferenceType.SecurityScheme,
                                          Id = "basic"
                                      }
                                  },
                                  new string[] {}
                          }
                      });
            });

            ConfigureRepository(services);
            RegisterService(services);

        }

        private void RegisterService(IServiceCollection services)
        {
            services.AddScoped<IBankAccountService, BankAccountService>();
            services.AddScoped<ICompanyService, CompanyService>();
            services.AddScoped<IInvoiceService, InvoiceService>();
            services.AddScoped<IMotorTypeService, MotorTypeService>();
            services.AddScoped<IOutstandingService, OutstandingService>();
            services.AddScoped<ISalesService, SalesService>();
            services.AddScoped<ITransactionService, TransactionService>();
            services.AddScoped<IVehicleModelService, VehicleModelService>();
            services.AddScoped<IEmailService, MailKitService>();
            services.AddScoped<IAgentRepository, AgentRepository>();
            services.AddScoped<IExpenseService, ExpenseService>();
            services.AddScoped<IBranchService, BranchService>();    
        }

        private void ConfigureRepository(IServiceCollection services)
        {
            services.AddScoped<IBankAccountRepository, BankAccountRepository>();
            services.AddScoped<ICompanyRepository, CompanyRepository>();
            services.AddScoped<IInvoiceRepository, InvoiceRepository>();
            services.AddScoped<IMotorTypeRepository, MotorTypeRepository>();
            services.AddScoped<IOutstandingsRepository, OutstandingsRepository>();
            services.AddScoped<ISalesRepository, SalesRepository>();
            services.AddScoped<ITransactionRepository, TransactionRepository>();
            services.AddScoped<IVehicleModelRepository, VehicleModelRepository>();
            services.AddScoped<IExtendedUserRepository, ExtendedUserRepository>();
            services.AddScoped<IExtendedRoleRepository, ExtendedRoleRepository>();
            services.AddScoped<IAgentService, AgentService>();
            services.AddScoped<IStatementService, StatementService>();
            services.AddScoped<IBrokerService, BrokerService>();
            services.AddScoped<IBrokerRepository, BrokerRepository>();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IEmailService, MailKitService>();
            services.AddScoped<IExpenseRepository, ExpenseRepository>();
            services.AddScoped<IBranchRepository, BranchRepository>();



            //var path = _env.WebRootPath;
            //services.AddWkhtmltopdf("wkhtmltopdf");
            //services.AddSingleton(typeof(IConverter), new SynchronizedConverter(new PdfTools()));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(_env.ContentRootPath, "Uploads")),
                RequestPath = "/uploads"
            });
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint(SwaggerConfiguration.SwaggerEndPointURL, SwaggerConfiguration.SwaggerEndPointName);
            });
            app.UseMiddleware<ExceptionMiddleware>();

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(x => x
       .AllowAnyMethod()
               .AllowAnyHeader()
                   .SetIsOriginAllowed(origin => true) // allow any origin
                               .AllowCredentials()
                               ); // allow credentials
                                  //List<string> origins = new List<string> { "http://localhost:4200", "https://localhost:4200", "http://localhost:4300", "http://localhost:4500" };

            //app.UseCors(options =>
            //{
            //    options.WithOrigins(origins.ToArray()).AllowAnyMethod().AllowCredentials().AllowAnyHeader().SetIsOriginAllowed((host) => true);
            //});


            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        
        }
    }
    internal class CustomAssemblyLoadContext : AssemblyLoadContext
    {
        public IntPtr LoadUnmanagedLibrary(string absolutePath)
        {
            return LoadUnmanagedDll(absolutePath);
        }
        protected override IntPtr LoadUnmanagedDll(String unmanagedDllName)
        {
            return LoadUnmanagedDllFromPath(unmanagedDllName);
        }

        protected override Assembly Load(AssemblyName assemblyName)
        {
            throw new NotImplementedException();
        }
    }
}
