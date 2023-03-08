using Abp.Application.Services;
using skladar.MultiTenancy.Dto;

namespace skladar.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

