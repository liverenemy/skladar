using skladar.Debugging;

namespace skladar
{
    public class skladarConsts
    {
        public const string LocalizationSourceName = "skladar";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "4f4e679517724c03883309d14f208810";
    }
}
