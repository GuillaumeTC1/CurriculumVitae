# curriculumvitae.client

This is the frontend for the CurriculumVitae project, built with React, TypeScript, Vite, and Ant Design. It provides a modern, responsive UI to showcase a professional CV and interact with the backend API.

## Features
- Interactive CV with education, experience, and skills display
- Multiple skill viewing options (by category, name, or proficiency)
- AI-powered chat about the profile with chat history
- LinkedIn OAuth authentication
- Contact form to send emails
- Responsive design (Ant Design)
- Interactive tour of CV features

## Getting Started
### Install dependencies
```sh
npm install
```
### Run the development server
```sh
npm run dev
```
### Build for production
```sh
npm run build
```

## Project Structure
```
src/
??? components/
?   ??? auth/              # Authentication and authorization
?   ??? chat/              # Chat UI and message display
?   ??? layout/            # Layout components (header, sidebar, content)
?   ??? page/              # Page structure and error handling
?   ??? resume/            # CV components (education, experience, about)
?   ??? skills/            # Skill display with multiple views
??? pages/                 # Page components (Home, Chat, Contact, Login, Privacy)
??? hooks/                 # Custom React hooks
??? utils/                 # Utility functions
??? App.tsx                # Main app component
??? index.tsx              # React entry point
```

## Main Dependencies
- React 19.2.0
- React Router DOM 7.9.5
- TypeScript 5.9.3
- Vite 7.2.2
- Ant Design 5.28.0
- Ant Design Icons 6.1.0
- Axios 1.13.2
- React Responsive 10.0.1
- CLSX 2.1.1

## Environment Variables
Configure API endpoints and authentication in `.env` if needed.

## Scripts
- `npm run dev` - Start dev server
- `npm run build` - Build for production with TypeScript compilation
- `npm run lint` - Lint code with ESLint
- `npm run preview` - Preview production build

## Key Features
- **Resume Display**: View education, experience, skills, and about information
- **Chat Interface**: Interactive chat with AI models and persistent history
- **Skill Filtering**: View skills organized by category, name, or proficiency level
- **Authentication**: Secure LinkedIn OAuth login
- **Contact Form**: Send emails directly from the application
- **Responsive Layout**: Mobile-friendly sidebar and main content layout
- **Error Handling**: Dedicated error page for 404 and other errors

## License
See root LICENSE file.
