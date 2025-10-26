import { SkillProps } from "./Skill";
import { Skills, SkillsProps } from "./Skills";

export const SkillsByCategory = (props: SkillsProps) => {

    const groupByCategory = (skills: SkillProps[]) => {
        return skills
            .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                var group = result.find(x => x[0].category === currentValue.category)
                if (group) group.push(currentValue)
                else result.push([currentValue])
                return result
            }, [])
    }

    return (
        groupByCategory(props.skills!).map(group => (
            <>
                <h4>{group[0].category}</h4>
                <Skills skills={group} />
            </>
        ))
    );
}    