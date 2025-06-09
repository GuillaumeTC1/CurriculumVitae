using CurriculumVitae.Server;
using CurriculumVitae.Server.Identity;
using CurriculumVitae.Server.Services;
using Microsoft.SemanticKernel;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLinkedInAuthentication();
builder.Services.AddCvAuthorization();

builder.Services.AddSingleton<IInfoService, InfoService>();

builder.Services.AddSingleton(serviceProvider => Kernel.Builder.Build());
builder.Services.Configure<OpenAiServiceOptions>(builder.Configuration.GetSection("OpenAI"))
    .AddSingleton<IChatService, ChatService>();

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
app.MapScalarApiReference(options => options.OpenApiRoutePattern = "swagger/v1/swagger.json");

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
