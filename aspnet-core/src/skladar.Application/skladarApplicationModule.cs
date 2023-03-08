using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using skladar.Authorization;

namespace skladar
{
    [DependsOn(
        typeof(skladarCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class skladarApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<skladarAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(skladarApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
