import { useAsync } from "@/services/hooks/UseAsync";
import { Spin } from "antd";
import axios from "axios";
import { useMemo } from "react";
import { IUser } from "./Auth.types";
import { AuthContext } from "./Context";

export type AuthProviderProps = {
    children?: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {

    const {
        loading,
        data: user
    } = useAsync(
        () => axios.get<IUser>("/auth/ping")
            .then(response => response.data));

    const authContext = useMemo(() => ({
        user,
        isLogged: (user !== undefined)
    }), [user]);

    if (loading) {
        return <Spin />;
    }

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );
}