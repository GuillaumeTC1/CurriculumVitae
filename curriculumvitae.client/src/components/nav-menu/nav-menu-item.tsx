import { useMemo } from "react";
import { Link, To } from "react-router-dom";

export type NavMenuItemProps = {
    to: To
    label?: string
}

export const NavMenuItem = (props: NavMenuItemProps) => {

    const label = useMemo(() => props.label ?? props.to.toString().slice(1), [props])

    return (
        <li>
            <Link to={props.to}>
                <div className="nav-item">
                    {label}
                </div>
            </Link>
        </li>
    );
}