import { ISkill, SkillTypes } from "../../models/iskill";
import { Skill } from "./skill";
import "./skills.css";

export type SkillsProps = {
    skills: ISkill[];
    type?: SkillTypes;
};

export const Skills = (props: SkillsProps) => {

    return (
        <div>
            {props.skills
                .filter(skill => props.type ? skill.type === props.type : true)
                .map(skill => (
                    <Skill key={crypto.randomUUID()}
                        {...skill} />
            ))}
        </div>
    );
}    