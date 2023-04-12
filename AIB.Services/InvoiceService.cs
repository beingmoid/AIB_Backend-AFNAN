using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace AIB.Services.Core
{
    public class InvoiceService : BaseService<Invoice,int>, IInvoiceService
    {
        public InvoiceService(IServiceProvider serviceProvider,IMapper mapper,IInvoiceRepository repository)
            :base(serviceProvider,mapper,repository)
        {

        }
    }
    public interface IInvoiceService : IBaseService<Invoice, int>
    {

    }
}
