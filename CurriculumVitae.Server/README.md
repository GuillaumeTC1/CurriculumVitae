# CurriculumVitae.Server

This is the backend for the CurriculumVitae project, built with ASP.NET Core Web API. It provides secure RESTful endpoints for serving CV data, AI-powered chat features, and email functionality.

## Features
- Serve resume data (education, experience, skills, and about info)
- AI-powered chat endpoint (Mistral, OpenAI integration)
- Chat history storage and retrieval
- Email service for contact requests
- LinkedIn OAuth authentication and authorization
- Scalar/Swagger OpenAPI documentation
- Response caching for improved performance

## Getting Started
### Prerequisites
- .NET 10 SDK

### Run the server
```sh
dotnet run
```

### Configuration
Update `appsettings.json` with your credentials:
- `OpenAiOptions` - OpenAI API key and settings
- `MistralOptions` - Mistral API key and settings
- `MailOptions` - Email service configuration
- `LinkedInOAuth` - LinkedIn OAuth credentials

## Project Structure
- `Controllers/` - API controllers (Resume, Chat, Auth, Mail)
  - `ResumeController` - CV data endpoints
  - `ChatController` - Chat and chat history endpoints
  - `AuthController` - Authentication and user info endpoints
  - `MailController` - Email service endpoints
- `Services/` - Business logic organized by feature
  - `Resume/` - Resume services (About, Education, Experiences, Skills)
  - `Chat/` - Chat service with AI model integrations
  - `Mail/` - Email sending service
  - `Identity/` - LinkedIn OAuth and authorization setup
  - `User/` - User model definitions
- `Models/` - Data models and entities
- `MyDbContext.cs` - Entity Framework Core database context

## API Endpoints

### ResumeController (requires authentication)
- `GET /resume/about` - Get about information
- `GET /resume/education` - Get education list
- `GET /resume/experiences` - Get experiences list
- `GET /resume/skills` - Get skills list

### ChatController (requires authentication)
- `POST /chat` - Send a message to the AI chat (supports Mistral and OpenAI models)
- `GET /chat/history` - Get user's chat history

### AuthController
- `GET /auth/ping` - Verify authentication and get current user info (requires authentication)
- `GET /auth/linkedin` - Initiate LinkedIn OAuth flow (public)
- `GET /auth/callback` - LinkedIn OAuth callback (public)
- `POST /auth/login` - Login endpoint (requires authentication)
- `POST /auth/logout` - Logout endpoint (requires authentication)

### MailController (requires authentication)
- `POST /mail` - Send an email with contact request

## Swagger/Scalar API Documentation
- API docs available at `/` or `/api/reference`
- OpenAPI specification at `/swagger/v1/swagger.json`

## Database
The project uses Entity Framework Core with a local database for storing:
- Chat history
- User information
- Resume data

## License
See root LICENSE file.
