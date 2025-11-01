namespace CurriculumVitae.Server.Services.Mail;

public class MailOptions
{
    public string SmtpServer { get; set; } = null!;

    public int SmtpPort { get; set; }

    public string SmtpUser { get; set; } = null!;

    public string SmtpPassword { get; set; } = null!;

    public string ToEmail { get; set; } = null!;
}
