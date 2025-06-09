import { SkillProps } from "./Skill";
import { Skills, SkillsProps } from "./Skills";

export const SkillsByName = (props: SkillsProps) => {

    const groupByName = (skills: SkillProps[]) => {
        return skills
            .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                var group = result.find(x => x[0].name[0] === currentValue.name[0])
                if (group) group.push(currentValue)
                else result.push([currentValue])
                return result
            }, [])
            .sort((x, y) => x[0].name[0].localeCompare(y[0].name[0]))
    }

    return (
        groupByName(props.skills!).map(group => (
            <>
                <h4>{group[0].name[0]}</h4>
                <Skills skills={group} />
            </>
        ))
    );
}    