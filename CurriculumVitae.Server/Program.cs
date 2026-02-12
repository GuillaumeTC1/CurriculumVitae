using CurriculumVitae.Server;
using CurriculumVitae.Server.Services.Chat;
using CurriculumVitae.Server.Services.Identity;
using CurriculumVitae.Server.Services.Mail;
using CurriculumVitae.Server.Services.Resume;
using Microsoft.AspNetCore.Rewrite;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLinkedInAuthentication();
builder.Services.AddCvAuthorization();

builder.Services.AddDatabase(builder.Configuration);

builder.Services.AddResumeServices();
builder.Services.AddChatServices(builder.Configuration);
builder.Services.AddMailServices(builder.Configuration);

builder.Services.AddRouting(options => options.LowercaseUrls = true);
builder.Services.AddControllers();

builder.Services.AddOpenApi();

var app = builder.Build();

app.UseHsts();
app.UseHttpsRedirection();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseAuthentication();
app.UseAuthorization();

app.MapOpenApi();

app.UseRewriter(new RewriteOptions()
    .AddRedirectToWwwPermanent());

#region Map Endpoints

app.MapOpenApiExplorerUI();

app.MapControllers();

app.MapFallbackToFile("/index.html");

#endregion

app.Run();
