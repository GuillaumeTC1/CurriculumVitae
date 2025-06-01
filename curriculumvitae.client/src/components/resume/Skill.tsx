import { useMemo } from "react";
import Avatar from "antd/es/avatar/Avatar";
import { Tooltip } from "antd";
import { SkillModel } from "./models/SkillModel";

export type SkillProps = SkillModel & {}

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
        <Tooltip title={props.detail}>
            <Avatar
                shape="square"
                size="large"
                src={logoUrl.toString()} />
        </Tooltip>
    );
}    