import { useAsync } from "@/hooks/useAsync";
import { Spin } from "antd";
import { useMemo } from "react";
import { IUser } from "./auth.types";
import { AuthContext } from "./context";

async function fetchCurrentUser(): Promise<IUser> {
    const response = await fetch("/auth/ping");
    if (!response.ok) {
        throw new Error("Failed to fetch current user");
    }
    return response.json();
}

export type AuthProviderProps = {
    children?: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {

    const {
        loading,
        data: user
    } = useAsync(fetchCurrentUser);

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