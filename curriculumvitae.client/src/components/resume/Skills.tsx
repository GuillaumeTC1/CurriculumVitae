import { useAsync } from "@/hooks/useAsync";
import { Avatar, Flex, Spin } from "antd";
import axios from "axios";
import { Skill, SkillProps } from "./Skill";

export const Skills = () => {

    const {
        data: skills,
        loading
    } = useAsync(() => axios.get<SkillProps[]>("/info/skills")
        .then(response => response.data));

    //@ts-ignore
    const groupByType = (skills: SkillProps[]) => {
        return skills
            .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                var group = result.find(x => x[0].type == currentValue.type)
                if (group) group.push(currentValue)
                else result.push([currentValue])
                return result
            }, [])
    }

    if (loading) {
        return <Spin />
    }

    return (
        <Flex gap="8px">
            <Avatar.Group shape="square">
                {skills!.map(skill => (
                    <Skill key={crypto.randomUUID()}
                        {...skill} />
                ))}
            </Avatar.Group>
        </Flex>
    );
}    