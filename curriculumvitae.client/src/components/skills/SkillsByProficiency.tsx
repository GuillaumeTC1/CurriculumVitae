import { Proficiency } from "./models/SkillModel";
import { SkillProps } from "./Skill";
import { Skills, SkillsProps } from "./Skills";

const proficiencyOrder: Proficiency[] = [
    "expert",
    "advanced",
    "intermediate",
    "beginner"
]

export const SkillsByProficiency = (props: SkillsProps) => {

    const groupByLevel = (skills: SkillProps[]) => {
        return skills
            .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                var group = result.find(x => x[0].proficiency === currentValue.proficiency)
                if (group) group.push(currentValue)
                else result.push([currentValue])
                return result
            }, [])
    }

    return (
        groupByLevel(props.skills!)
            .sort((x, y) => proficiencyOrder.indexOf(x[0].proficiency) - proficiencyOrder.indexOf(y[0].proficiency))
            .map(group => (
                <>
                    <h4>{group[0].proficiency}</h4>
                    <Skills skills={group} />
                </>
            ))
    );
}    