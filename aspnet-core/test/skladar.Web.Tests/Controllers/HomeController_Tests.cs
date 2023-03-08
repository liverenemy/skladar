using System.Threading.Tasks;
using skladar.Models.TokenAuth;
using skladar.Web.Controllers;
using Shouldly;
using Xunit;

namespace skladar.Web.Tests.Controllers
{
    public class HomeController_Tests: skladarWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}