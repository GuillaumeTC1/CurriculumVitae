using CurriculumVitae.Server;
using CurriculumVitae.Server.Services;
using CurriculumVitae.Server.Services.Chat;
using CurriculumVitae.Server.Services.Identity;
using CurriculumVitae.Server.Services.Resume;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLinkedInAuthentication();
builder.Services.AddCvAuthorization();

builder.Services.AddSingleton<IMailingService, MailingService>();
builder.Services.AddDatabase(builder.Configuration);

builder.Services.AddResumeServices();
builder.Services.AddChatServices(builder.Configuration);

builder.Services.AddRouting(options => options.LowercaseUrls = true);
builder.Services.AddControllers();

builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHsts();
app.UseHttpsRedirection();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseAuthentication();
app.UseAuthorization();

app.UseSwagger();

#region Map Endpoints

app.MapScalarApiReference(options => options.OpenApiRoutePattern = "swagger/v1/swagger.json");

app.MapControllers();

app.MapFallbackToFile("/index.html");

#endregion

app.Run();
