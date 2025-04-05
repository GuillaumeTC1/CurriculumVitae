import React from 'react';
import { useAuthContext } from './Context';

export type AuthViewProps = {
    children?: React.ReactNode
}

export const AuthView = (props: AuthViewProps) => {

    const authContext = useAuthContext();

    if (authContext.isLogged) {

        return (
            <>
                {props.children}
            </>
        );
    }

    return (
        <></>
    );
}