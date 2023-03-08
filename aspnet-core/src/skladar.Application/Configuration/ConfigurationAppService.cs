using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using skladar.Configuration.Dto;

namespace skladar.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : skladarAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
