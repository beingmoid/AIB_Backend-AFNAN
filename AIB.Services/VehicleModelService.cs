using AIB.Data.Entities;
using AIB.Data.Repositories;
using AIB.Data.Repositories.Core;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIB.Services.Core
{
    public class VehicleModelService : BaseService<VehicleModel, int>, IVehicleModelService
    {
        public VehicleModelService(IServiceProvider serviceProvider,IMapper mapper,IVehicleModelRepository repository)
            :base(serviceProvider,mapper,repository)
        {

        }
        public async Task<object> Filterlist(string searchterm)
        {
            var filterlist = (await this.Get(x => x.Name.StartsWith(searchterm))).Values.ToList();
            return filterlist;
        }
    }
    public interface IVehicleModelService : IBaseService<VehicleModel, int>
    {
        Task<object> Filterlist(string searchterm);
    }
}
