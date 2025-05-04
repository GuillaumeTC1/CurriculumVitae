import { useAsync } from "@/services/hooks/UseAsync";
import { Flex, Space, Spin } from "antd";
import axios from "axios";
import { Skill, SkillProps } from "./Skill";
import "./Skills.css";

export const Skills = () => {

    const {
        data: skills,
        loading
    } = useAsync(() => axios.get<SkillProps[]>("/info/skills")
        .then(response => response.data))

    if (loading) {
        return <Spin />
    }

    return (
        <Flex vertical>
            {skills!
                .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                    var group = result.find(x => x[0].type == currentValue.type)
                    if (group) group.push(currentValue)
                    else result.push([currentValue])
                    return result
                }, [])
                .map(skills => (
                    <>
                        <h2>{skills[0].type}</h2>
                        <Space size={[8, 16]} wrap>
                            {skills.map(skill => (
                                <Skill key={crypto.randomUUID()}
                                    {...skill} />
                            ))}
                        </Space>
                    </>
                ))}
        </Flex>
    );
}    