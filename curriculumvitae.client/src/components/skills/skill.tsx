import { useMemo } from "react";
import { ISkill, SkillTypes } from "../../models/iskill";
import "./skills.css";

export type SkillProps = ISkill & { }

export const Skill = (props: SkillProps) => {

    const logoUrl = useMemo(() => new URL(`https://cdn.brandfetch.io/${props.detail}.com`), [props])

    if (props.type === SkillTypes.Software) {

    }

    if (props.type === SkillTypes.Tech) {

    }

    if (props.type === SkillTypes.Management) {

    }

    if (props.type === SkillTypes.Language) {

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