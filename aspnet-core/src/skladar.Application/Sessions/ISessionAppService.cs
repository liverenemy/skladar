using System.Threading.Tasks;
using Abp.Application.Services;
using skladar.Sessions.Dto;

namespace skladar.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
