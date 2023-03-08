using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace skladar.EntityFrameworkCore
{
    public static class skladarDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<skladarDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<skladarDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
