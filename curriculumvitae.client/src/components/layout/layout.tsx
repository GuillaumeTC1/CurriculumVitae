import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { AuthProfile } from "../auth/auth-profile";
import { Button } from "../button/button";
import { NavMenu } from "../nav-menu/nav-menu";
import { ISidebarHandle, Sidebar } from "../sidebar/sidebar";
import { ToastsProvider } from "../toasts/toasts-provider";
import "./layout.css";

export type LayoutProps = {};

export const Layout = (props: LayoutProps) => {
AuthProfile
    const sidebar = useRef<ISidebarHandle>(null);

    return (
        <ToastsProvider>
            <Sidebar
                cRef={sidebar}
                targetId="menu-top">
                <AuthProfile />
            </Sidebar>
            <div id="menu-top">
                <Button
                    icon="bars"
                    onClick={() => sidebar.current?.open()} />
                <NavMenu>
                    <NavMenu.Item to="/" label="Home" />
                    <NavMenu.Item to="/experiences" />
                    <NavMenu.Item to="/education" />
                    <NavMenu.Item to="/skills" />
                    <NavMenu.Item to="/privacy" />
                </NavMenu>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </ToastsProvider>
    );
}