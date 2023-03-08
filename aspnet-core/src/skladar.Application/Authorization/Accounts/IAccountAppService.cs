using System.Threading.Tasks;
using Abp.Application.Services;
using skladar.Authorization.Accounts.Dto;

namespace skladar.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
