import axios from "axios";
import { useMemo } from "react";
import { useAsync } from "../../services/hooks/use-async";
import { IUser } from "./auth.types";
import { AuthContext } from "./context";

export type AuthProviderProps = {
    children?: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {

    const {
        loading,
        data: user
    } = useAsync(
        () => axios.get<IUser>("auth/ping")
            .then(response => response.data)
    );

    const authContext = useMemo(() => ({
        user,
        isLogged: (user !== undefined)
    }), [user]);

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );
}