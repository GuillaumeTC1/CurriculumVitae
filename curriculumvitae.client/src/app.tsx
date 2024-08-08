import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './components/auth/auth-provider';
import { Layout } from './components/layout/layout';
import { ToastsProvider } from './components/toasts/toasts-provider';
import ContactPage from './pages/contact-page';
import EducationPage from './pages/education-page';
import ErrorPage from './pages/error-page';
import ExperiencesPage from './pages/experiences-page';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import PrivacyPage from './pages/privacy-page';
import SkillsPage from './pages/skills-page';
import './styles/app.css';

export const App = () => {

    return (
        <AuthProvider>
            <ToastsProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/experiences" element={<ExperiencesPage />} />
                            <Route path="/education" element={<EducationPage />} />
                            <Route path="/skills" element={<SkillsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                        </Route>
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Router>
            </ToastsProvider>
        </AuthProvider>
    );
}
