import { createContext, useContext } from "react"
import { IToast } from "./toasts.types";

export interface IToastsContext {
    addToast: (toast: IToast) => void;
    removeToast: (id: string) => void;
}

export const ToastsContext = createContext<IToastsContext>({
    addToast: () => { },
    removeToast: () => { }
});

export const useToastsContext = () => useContext(ToastsContext);
export const useAddToast = () => useToastsContext().addToast;
export const useRemoveToast = () => useToastsContext().removeToast;