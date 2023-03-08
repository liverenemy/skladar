using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace skladar.Controllers
{
    public abstract class skladarControllerBase: AbpController
    {
        protected skladarControllerBase()
        {
            LocalizationSourceName = skladarConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
