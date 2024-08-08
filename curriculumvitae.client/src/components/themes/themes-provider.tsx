import { useMemo } from "react";
import { ThemesContext } from "./context";
import { Themes } from "./themes.types";

export type ThemesProviderProps = {
    children?: React.ReactNode
}

export const ThemesProvider = (props: ThemesProviderProps) => {

    const themesContext = useMemo(() => ({
        theme: Themes.Light,
    }), []);

    return (
        <ThemesContext.Provider value={themesContext}>
            {props.children}
        </ThemesContext.Provider>
    );
}