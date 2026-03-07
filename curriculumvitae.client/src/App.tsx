import { lazy } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { Layout } from '@/components/layout/Layout';
import { Page } from '@/components/page/Page';
import './App.css';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ResumePage = lazy(() => import('@/pages/ResumePage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const ChatPage = lazy(() => import('@/pages/ChatPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));

export const App = () => {
    return (
        <AuthProvider>
            <Router>
                <RemoveTrailingSlash />
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/resume" element={<ResumePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="*" element={<Page.NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

const RemoveTrailingSlash = ({ ...rest }) => {
    const location = useLocation()

    // If the last character of the url is '/'
    if (location.pathname.match('/.*/$')) {
        return <Navigate replace {...rest} to={{
            pathname: location.pathname.replace(/\/+$/, ""),
            search: location.search
        }} />
    }

    return null;
}