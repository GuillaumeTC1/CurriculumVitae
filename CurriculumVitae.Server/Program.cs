using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient();

builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
})
   .AddCookie()
   .AddOpenIdConnect(options =>
   {
       options.SignInScheme = "Cookies";
       options.Authority = builder.Configuration["Authentication:LinkedIn:Authority"];
       options.CallbackPath = builder.Configuration.GetValue<PathString>("Authentication:LinkedIn:CallbackPath");
       options.RequireHttpsMetadata = true;
       options.ClientId = builder.Configuration["Authentication:LinkedIn:ClientId"];
       options.ClientSecret = builder.Configuration["Authentication:LinkedIn:ClientSecret"];
       options.ResponseType = "code";
       options.Scope.Add("openid");
       options.Scope.Add("profile");
       options.Scope.Add("email");
       options.SkipUnrecognizedRequests = true;
       options.ProtocolValidator.RequireNonce = false;
       options.Events = new OpenIdConnectEvents
       {
           OnAuthorizationCodeReceived = async context =>
           {
               // Remove the 'code_verifier' parameter
               context.TokenEndpointRequest?.Parameters.Remove("code_verifier");
               await Task.CompletedTask;
           }
       };
   });
builder.Services.AddAuthorization();

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

//app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();
