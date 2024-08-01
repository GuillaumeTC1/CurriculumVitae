import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export type LayoutProps = {};

export const Layout = (props: LayoutProps) => {

    return (
        <>
            <ul className="nav">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/experiences"}>Experiences</Link></li>
                <li><Link to={"/education"}>Education</Link></li>
                <li><Link to={"/skills"}>Skills</Link></li>
            </ul>
            <Outlet />
        </>

    );
}