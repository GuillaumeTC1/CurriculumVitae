# CurriculumVitae.Server

This is the backend for the CurriculumVitae project, built with ASP.NET Core Web API. It provides secure RESTful endpoints for serving CV data and AI-powered chat features.

## Features
- Serve education, experience, skills, and about info
- AI-powered chat endpoint (OpenAI integration)
- LinkedIn authentication and authorization
- Swagger/OpenAPI documentation

## Getting Started
### Prerequisites
- .NET 8 SDK

### Run the server
```sh
dotnet run
```

### Configuration
- Update `appsettings.json` with your OpenAI and LinkedIn credentials.

## Project Structure
- `Controllers/` - API controllers (Info, Chat, Auth)
- `Services/` - Business logic (InfoService, ChatService)
- `Models/` - Data models (About, Experience, Skill, etc.)
- `Data/` - Static JSON data
- `wwwroot/` - Static files

## API Endpoints
### InfoController
- `GET /info/about` - Get about info
- `GET /info/education` - Get education list
- `GET /info/experiences` - Get experiences list
- `GET /info/skills` - Get skills list

### ChatController
- `POST /chat` - Send a prompt to the AI chat

### AuthController
- LinkedIn OAuth endpoints

## Swagger
- API docs available at `/swagger`

## License
See root LICENSE file.
