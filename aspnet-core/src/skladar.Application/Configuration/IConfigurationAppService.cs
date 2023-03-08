using System.Threading.Tasks;
using skladar.Configuration.Dto;

namespace skladar.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
