import { useMemo } from "react";
import "./Skills.css";

export type SkillProps = {
    type: string;
    detail: string;
    logoUrl: string;
}

export const Skill = (props: SkillProps) => {

    const logoUrl = useMemo(() => props.logoUrl ?? new URL(`https://cdn.brandfetch.io/${props.detail}.com`), [props])

    if (props.type === "software") {

    }

    if (props.type === "tech") {

    }

    if (props.type === "management") {

    }

    if (props.type === "language") {

    }

    return (
        <div className="skill">
            <img
                className="exp-logo"
                src={logoUrl.toString()} />
            <span>{props.detail}</span>
        </div>
    );
}    