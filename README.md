# CurriculumVitae

This project is a modern, full-stack web application to showcase a professional curriculum vitae (CV) with interactive features, built using React, TypeScript, Vite, ASP.NET Core, and OpenAI integration.

## Features
- Interactive CV with education, experience, and skills
- AI-powered chat for Q&A about the profile
- Secure authentication (LinkedIn)
- Responsive, modern UI (Ant Design)
- RESTful API backend

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Ant Design
- **Backend:** ASP.NET Core Web API, C#, OpenAI, Semantic Kernel
- **Authentication:** LinkedIn OAuth

## Project Structure
```
CurriculumVitae.sln                # Solution file
curriculumvitae.client/            # Frontend (React)
CurriculumVitae.Server/            # Backend (ASP.NET Core)
```

## Getting Started
### Prerequisites
- Node.js (v18+)
- .NET 8 SDK

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
- Update `CurriculumVitae.Server/appsettings.json` with your OpenAI and LinkedIn credentials.

## Usage
- Access the app at `https://localhost:5001` (or as configured)
- Explore the CV, use the chat, and try authentication features.

## Screenshots
<!-- Add screenshots in public/assets and reference here -->

## API
See [CurriculumVitae.Server/README.md](CurriculumVitae.Server/README.md) for API documentation.

## Contributing
Pull requests are welcome! For major changes, open an issue first.

## License
[MIT](LICENSE)

## Contact
Created by Guillaume. For questions, open an issue.