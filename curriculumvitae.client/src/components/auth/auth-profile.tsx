import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button';
import { useAuthContext } from './context';
import axios from 'axios';

export type AuthProfile = { }

export const AuthProfile = (props: AuthProfile) => {

    const authContext = useAuthContext();
    const navigate = useNavigate();

    if (!authContext.isLogged) {
        return (
            <Button
                onClick={() => navigate("/login")}>
                Login
            </Button>
        );
    }

    return (
        <div>
            <div>
                <img
                    className="profile-picture"
                    src={authContext.user!.picture} />
                <div>{authContext.user!.given_name} {authContext.user!.surname}</div>
                <div>{authContext.user!.email}</div>
            </div>
            <Button
                onClick={() => axios.post("auth/logout")}>
                Logout
            </Button>
        </div>  
    );
}