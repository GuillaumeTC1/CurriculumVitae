import { useAsync } from "@/hooks/useAsync";
import { Avatar, Flex, Segmented, Spin } from "antd";
import axios from "axios";
import { Skill, SkillProps } from "./Skill";
import { SkillModel } from "./models/SkillModel";
import { useState } from "react";

type skillsTransform = "all" | "byName" | "byType" | "byExpertise";

export const Skills = () => {

    const [transform, setTransform] = useState<skillsTransform>("all");

    const {
        data: skills,
        loading
    } = useAsync(() => axios.get<SkillModel[]>("/info/skills")
        .then(response => response.data));

    const selectTransform = () => {
        switch (transform) {
            case "byName":
                return renderByName;
            case "byType":
                return renderByType;
            case "all":
            default:
                return renderAll;
        }
    }

    const renderAll = (skills: SkillProps[]) => {
        return (
            <Avatar.Group shape="square">
                {skills!.map(skill => (
                    <Skill key={`${skill.type}-${skill.detail}`}
                        {...skill} />
                ))}
            </Avatar.Group>
        );
    }

    const renderByName = (skills: SkillProps[]) => {

        return (
            renderAll(skills.sort((x, y) => x.detail.localeCompare(y.detail)))
        )
    }

    const renderByType = (skills: SkillProps[]) => {

        const groupByType = (skills: SkillProps[]) => {
            return skills
                .reduce((result: SkillProps[][], currentValue: SkillProps) => {
                    var group = result.find(x => x[0].type == currentValue.type)
                    if (group) group.push(currentValue)
                    else result.push([currentValue])
                    return result
                }, [])
        }

        return (
            groupByType(skills!).map(group => (
                <>
                    <h4>{group[0].type}</h4>
                    {renderAll(group)}
                </>
            ))
        );
    }

    if (loading) {
        return <Spin />
    }

    return (
        <Flex vertical
            gap="8px">
            <Segmented<skillsTransform>
                options={[
                    { label: "All", value: "all" },
                    { label: "By Name", value: "byName" },
                    { label: "By Type", value: "byType" },
                    { label: "By Expertise", value: "byExpertise" }
                ]}
                onChange={(value) => setTransform(value)}
            />
            {selectTransform()(skills!)}
        </Flex>
    );
}    