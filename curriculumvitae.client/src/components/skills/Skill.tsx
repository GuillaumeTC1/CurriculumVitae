import Avatar from "antd/es/avatar/Avatar";
import { Tooltip } from "antd";
import { SkillModel } from "./models/SkillModel";
import "./Skills.css"

export type SkillProps = SkillModel & {}

export const Skill = (props: SkillProps) => {

    return (
        <Tooltip title={
            <div>
                <div>{props.name}</div>
                {props.details && <p>{props.details}</p>}
            </div>
        }>
            <Avatar
                className="skill"
                shape="square"
                size="large"
                src={props.logoUrl.toString()}
                style={{ border: 0 }} />
        </Tooltip>
    );
}    