import { useCallback, useEffect, useImperativeHandle, useState } from "react";
import { cnMerge } from "../../services/utils/classnames-utils";
import "./sidebar.css"

export type SidebarProps = {
    cRef?: React.Ref<ISidebarHandle>
    targetId?: string;
    open?: boolean;
    children?: React.ReactNode
};

export interface ISidebarHandle {
    open: (shouldOpen?: boolean) => void;
}

export const Sidebar = (props: SidebarProps) => {

    const [open, setOpen] = useState<boolean>(props.open ?? false);

    const handleOpen = useCallback((shouldOpen?: boolean) => {
        setOpen(shouldOpen ?? !open);
    }, [open, setOpen]);

    useImperativeHandle(props.cRef, () => ({
        open: handleOpen
    }));

    useEffect(() => {
        const target = document.getElementById(props.targetId ?? "");

        if (target) {
            target.classList.add("sidebar-content");
            target.style.left = open ? "10%" : "0%";
        }
    }, [open])

    return (
        <div className={cnMerge(
            "sidebar",
            { "open": open }
        )}>
            {props.children}
        </div>
    );
}