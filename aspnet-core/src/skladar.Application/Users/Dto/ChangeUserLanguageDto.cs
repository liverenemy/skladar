using System.ComponentModel.DataAnnotations;

namespace skladar.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}