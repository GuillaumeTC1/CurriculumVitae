import { useChildren } from "../../services/hooks/use-children";
import { NavMenuItem, NavMenuItemProps } from "./nav-menu-item";
import "./nav-menu.css";

export type NavMenuProps = {
    children: React.ReactElement<NavMenuItemProps> | React.ReactElement<NavMenuItemProps>[]
}

export const NavMenu = (props: NavMenuProps) => {

    const menuItems = useChildren(props.children);

    return (
        <ul className="nav">
            {menuItems.map(item => item)}
        </ul>
    );
}

NavMenu.Item = NavMenuItem;