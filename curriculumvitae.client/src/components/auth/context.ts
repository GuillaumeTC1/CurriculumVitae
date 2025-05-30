import { createContext, useContext } from "react";
import { IUser } from "./auth.types";

export interface IAuthContext {
    user?: IUser;
    isLogged: boolean
}

export const AuthContext = createContext<IAuthContext>({
    user: undefined,
    isLogged: false
});

export const useAuthContext = () => useContext(AuthContext);