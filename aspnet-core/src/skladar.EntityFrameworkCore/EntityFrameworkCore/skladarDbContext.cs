using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using skladar.Authorization.Roles;
using skladar.Authorization.Users;
using skladar.MultiTenancy;

namespace skladar.EntityFrameworkCore
{
    public class skladarDbContext : AbpZeroDbContext<Tenant, Role, User, skladarDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public skladarDbContext(DbContextOptions<skladarDbContext> options)
            : base(options)
        {
        }
    }
}
