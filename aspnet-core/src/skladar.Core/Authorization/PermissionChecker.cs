using Abp.Authorization;
using skladar.Authorization.Roles;
using skladar.Authorization.Users;

namespace skladar.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
