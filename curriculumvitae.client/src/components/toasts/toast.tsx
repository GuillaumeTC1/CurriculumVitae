import { useEffect } from "react";
import { useCountdown } from "../../services/hooks/use-countdown";
import { useRemoveToast } from "./context";
import "./toasts.css";
import { IToast } from "./toasts.types";

export type ToastProps = IToast & {}

export const Toast = (props: ToastProps) => {

    const close = useRemoveToast();
    const countdown = useCountdown(5, 1);

    useEffect(() => {
        if (countdown <= 0) {
            close(props.id);
        }
    }, [countdown])

    return (
        <div
            className="toast">
            <span>{props.id}</span>
            <p>{props.message}</p>
        </div>
    );
}