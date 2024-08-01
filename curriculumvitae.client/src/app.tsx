import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Education } from './components/education/education';
import { Experiences } from './components/experiences/experiences';
import { Layout } from './components/layout/layout';
import { Skills } from './components/skills/skills';
import { Summary } from './components/summary/summary';
import './styles/app.css';

export const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" Component={Layout}>
                    <Route path="/" Component={Summary} />
                    <Route path="/experiences" Component={Experiences} />
                    <Route path="/education" Component={Education} />
                    <Route path="/skills" Component={Skills} />
                </Route>
                {/*<Route path="*" Component={"error"} />*/}
            </Routes>
        </Router>
    );
}
