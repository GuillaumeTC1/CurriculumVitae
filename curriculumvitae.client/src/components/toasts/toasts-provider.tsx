import { useCallback, useMemo, useState } from "react";
import { ToastsContext } from "./context";
import { Toast } from "./toast";
import { IToast } from "./toasts.types";

export type ToastsProviderProps = {
    children?: React.ReactNode
}

export const ToastsProvider = (props: ToastsProviderProps) => {

    const [toasts, setToasts] = useState<IToast[]>([]);

    const addToast = useCallback((toast: IToast) => {
        setToasts([...toasts, toast])
    }, [toasts, setToasts])

    const removeToast = useCallback((id: string) => {
        setToasts(toasts.filter(toast => toast.id !== id))
    }, [toasts, setToasts])

    const toastsContext = useMemo(() => ({
        addToast,
        removeToast
    }), [addToast, removeToast]);

    return (
        <ToastsContext.Provider value={toastsContext}>
            {props.children}
            <div className="toasts">
                {toasts.map(toast => (
                    <Toast key={toast.id} {...toast} />
                )) }
            </div>
        </ToastsContext.Provider>
    );
}