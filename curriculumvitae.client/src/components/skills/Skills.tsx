import { Avatar } from "antd";
import { Skill, SkillProps } from "./Skill";

export type SkillsProps = {
    skills: SkillProps[]
}

export const Skills = (props: SkillsProps) => {

    return (
        <Avatar.Group shape="square">
            {props.skills!.sort((x, y) => x.name.localeCompare(y.name))
                .map(skill => (
                    <Skill key={`${skill.type}-${skill.name}`}
                        {...skill} />
                ))}
        </Avatar.Group>
    );
}    