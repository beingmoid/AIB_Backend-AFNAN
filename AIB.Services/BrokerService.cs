using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace AIB.Services.Core
{
    public class BrokerService : BaseService<Broker,int>, IBrokerService
    {
        public BrokerService(IServiceProvider serviceProvider,IMapper mapper, IBrokerRepository repository)
            :base(serviceProvider,mapper,repository)
        {

        }
    }
    public interface IBrokerService : IBaseService<Broker, int>
    {

    }
}
