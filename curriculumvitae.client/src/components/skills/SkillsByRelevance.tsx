import { SkillProps } from "./Skill";
import { Skills, SkillsProps } from "./Skills";

export const SkillsByRelevance = (props: SkillsProps) => {

    const groupByRelevance = (skills: SkillProps[]) => {
        return skills
            .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                var group = result.find(x => x[0].relevance === currentValue.relevance)
                if (group) group.push(currentValue)
                else result.push([currentValue])
                return result
            }, [])
            .sort((x, y) => y[0].relevance - x[0].relevance)
    }

    return (
        groupByRelevance(props.skills!).map(group => <Skills skills={group} />)
    );
}    