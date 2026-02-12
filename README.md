# CurriculumVitae

This project is a modern, full-stack web application to showcase a professional curriculum vitae (CV) with interactive features, built using React, TypeScript, Vite, ASP.NET Core, and AI integration.

## Features
- Interactive CV with education, experience, and skills
- AI-powered chat for Q&A about the profile (Mistral and OpenAI support)
- Chat history storage and retrieval
- Email contact functionality
- Secure authentication (LinkedIn OAuth)
- Responsive, modern UI (Ant Design)
- RESTful API backend with caching

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Ant Design
- **Backend:** ASP.NET Core Web API, C#, Entity Framework Core
- **AI:** OpenAI, Mistral integration via Semantic Kernel
- **Authentication:** LinkedIn OAuth
- **Database:** Entity Framework Core (local database)

## Project Structure
```
CurriculumVitae.sln                # Solution file
curriculumvitae.client/            # Frontend (React)
CurriculumVitae.Server/            # Backend (ASP.NET Core)
```

## Getting Started
### Prerequisites
- Node.js (v18+)
- .NET 10 SDK

### Setup
#### 1. Clone the repository
```sh
git clone <repo-url>
cd CurriculumVitae
```
#### 2. Install frontend dependencies
```sh
cd curriculumvitae.client
npm install
```
#### 3. Run the frontend
```sh
npm run dev
```
#### 4. Run the backend
```sh
cd ../CurriculumVitae.Server
dotnet run
```

### Configuration
Update `CurriculumVitae.Server/appsettings.json` with your credentials:
- OpenAI API key and settings
- Mistral API key and settings (optional)
- LinkedIn OAuth credentials
- Email service configuration

## Usage
- Access the app at `https://localhost:5001` (or as configured)
- Explore the CV, use the chat feature to ask questions about the profile
- Authenticate with LinkedIn to access all features
- Use the contact form to send emails

## API Documentation
See [CurriculumVitae.Server/README.md](CurriculumVitae.Server/README.md) for detailed API documentation, including:
- Resume data endpoints (education, experience, skills, about)
- AI chat endpoints with model selection
- Authentication and user info endpoints
- Email service endpoints

## Screenshots
<!-- Add screenshots in public/assets and reference here -->

## Contributing
Pull requests are welcome! For major changes, open an issue first.

## License
[MIT](LICENSE)

## Contact
Created by Guillaume. For questions, open an issue.