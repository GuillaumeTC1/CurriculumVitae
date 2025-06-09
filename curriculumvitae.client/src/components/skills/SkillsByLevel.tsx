import { Level } from "./models/SkillModel";
import { SkillProps } from "./Skill";
import { Skills, SkillsProps } from "./Skills";

const levelOrder: Level[] = [
    "expert",
    "advanced",
    "intermediate",
    "beginner"
]

export const SkillsByLevel = (props: SkillsProps) => {

    const groupByLevel = (skills: SkillProps[]) => {
        return skills
            .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                var group = result.find(x => x[0].level === currentValue.level)
                if (group) group.push(currentValue)
                else result.push([currentValue])
                return result
            }, [])
    }

    return (
        groupByLevel(props.skills!)
            .sort((x, y) => levelOrder.indexOf(x[0].level) - levelOrder.indexOf(y[0].level))
            .map(group => (
                <>
                    <h4>{group[0].level}</h4>
                    <Skills skills={group} />
                </>
            ))
    );
}    