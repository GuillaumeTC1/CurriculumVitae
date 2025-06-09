import { SkillProps } from "./Skill";
import { Skills, SkillsProps } from "./Skills";

export const SkillsByType = (props: SkillsProps) => {

    const groupByType = (skills: SkillProps[]) => {
        return skills
            .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                var group = result.find(x => x[0].type === currentValue.type)
                if (group) group.push(currentValue)
                else result.push([currentValue])
                return result
            }, [])
    }

    return (
        groupByType(props.skills!).map(group => (
            <>
                <h4>{group[0].type}</h4>
                <Skills skills={group} />
            </>
        ))
    );
}    