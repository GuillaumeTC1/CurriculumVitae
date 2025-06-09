using System.Net.Mail;

namespace CurriculumVitae.Server.Services;

public class MailingOptions
{
    public string SmtpServer { get; set; } = null!;

    public int SmtpPort { get; set; }

    public string SmtpUser { get; set; } = null!;

    public string SmtpPassword { get; set; } = null!;

    public string ToEmail { get; set; } = null!;
}

public interface IMailingService
{
    Task SendEmailAsync(string to, string subject, string body);
}

internal class MailingService(
    IConfiguration configuration) 
    : IMailingService
{
    private readonly MailingOptions _options = configuration
        .GetSection("Mailing")
        .Get<MailingOptions>() ?? throw new InvalidOperationException("Mailing options are not configured.");

    public Task SendEmailAsync(string from, string subject, string body)
    {
        MailMessage message = new(from, _options.ToEmail)
        {
            Subject = "Using the new SMTP client.",
            Body = @"Using this new feature, you can send an email message from an application very easily."
        };

        using SmtpClient client = new(_options.SmtpServer, _options.SmtpPort);
        client.Credentials = new System.Net.NetworkCredential(_options.SmtpUser, _options.SmtpPassword);

        try
        {
            client.Send(message);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }

        return Task.CompletedTask;
    }
}