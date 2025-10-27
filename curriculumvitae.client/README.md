# curriculumvitae.client

This is the frontend for the CurriculumVitae project, built with React, TypeScript, Vite, and Ant Design. It provides a modern, responsive UI to showcase a professional CV and interact with the backend API.

## Features
- View education, experience, and skills
- AI-powered chat about the profile
- LinkedIn authentication
- Responsive design (Ant Design)

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
- `src/` - Main source code
  - `components/` - UI components (auth, chat, layout, etc.)
  - `pages/` - Page components (Home, Contact, Privacy, Login)
  - `hooks/` - Custom React hooks
  - `utils/` - Utility functions
- `public/` - Static assets (images, logos)

## Main Dependencies
- React 18
- TypeScript
- Vite
- Ant Design
- Axios
- React Router DOM

## Environment Variables
Configure API endpoints and authentication in `.env` if needed.

## Scripts
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run lint` - Lint code
- `npm run preview` - Preview production build

## Screenshots
<!-- Add screenshots of the UI here -->

## License
See root LICENSE file.
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
