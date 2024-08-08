import { createContext, useContext } from "react"
import { Themes } from "./themes.types";

export interface IThemesContext {
    theme: Themes
}

export const ThemesContext = createContext<IThemesContext>({
    theme: Themes.Light
});

export const useThemesContext = () => useContext(ThemesContext);
export const useTheme = () => useThemesContext().theme;