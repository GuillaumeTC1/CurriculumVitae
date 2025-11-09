import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { Layout } from '@/components/layout/Layout';
import { Page } from '@/components/page/Page';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import PrivacyPage from '@/pages/PrivacyPage';
import ChatPage from "./pages/ChatPage";
import './App.css';

export const App = () => {

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="*" element={
                            <Page.Error
                                statusCode={404}
                                message="Page Not Found" />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}
