using Microsoft.Extensions.Options;
using System.Net.Mail;

namespace CurriculumVitae.Server.Services.Mail;

public interface IMailService
{
    Task<bool> SendMailAsync(string fromMail, string body, CancellationToken cancellationToken);
}

internal class MailService : IMailService
{
    private readonly ILogger<MailService> _logger;
    private readonly MailOptions _options;
    private readonly SmtpClient _smtpClient;

    public MailService(
        ILogger<MailService> logger,
        IOptions<MailOptions> options)
    {
        _logger = logger;
        _options = options.Value;

        _smtpClient = new SmtpClient(_options.SmtpServer, _options.SmtpPort)
        {
            EnableSsl = true,
            UseDefaultCredentials = false,
            Credentials = new System.Net.NetworkCredential(_options.SmtpUser, _options.SmtpPassword)
        };
    }

    public async Task<bool> SendMailAsync(string fromMail, string body, CancellationToken cancellationToken)
    {
        MailMessage message = new(_options.SmtpUser, _options.ToEmail)
        {
            IsBodyHtml = true,
            Subject = $"CurriculumVitae - <{fromMail}>",
            Body = $"<body>{HtmlSanitizer.Sanitize(body)}</body>"
        };

        try
        {
            await _smtpClient.SendMailAsync(message, cancellationToken);
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occured while sending mail.");
            return false;
        }
    }
}