import { useAsync } from "@/hooks/useAsync";
import { Flex, Segmented, Select, Spin } from "antd";
import axios from "axios";
import { SkillModel } from "./models/SkillModel";
import { useEffect, useMemo, useState } from "react";
import { SkillsByRelevance } from "./SkillsByRelevance";
import { SkillsByLevel } from "./SkillsByLevel";
import { SkillsByType } from "./SkillsByType";
import { SkillsByName } from "./SkillsByName";

type skillsTransform = "byRelevance" | "byLevel" | "byName" | "byType";

export const SkillsDashbord = () => {

    const [transform, setTransform] = useState<skillsTransform>("byRelevance");
    const [filteredSkills, setFilterSkills] = useState<SkillModel[]>([]);

    const {
        data: skills,
        loading
    } = useAsync(() => axios.get<SkillModel[]>("/info/skills")
        .then(response => response.data));

    useEffect(() => {
        if (skills) setFilterSkills(skills);
    }, [skills, setFilterSkills]);

    const skillsTypes = useMemo(() => [...new Set(skills?.map(skill => skill.type))], [skills]);

    const SelectedTransform = useMemo(() => {
        switch (transform) {
            case "byRelevance":
                return SkillsByRelevance;
            case "byLevel":
                return SkillsByLevel;
            case "byType":
                return SkillsByType;
            case "byName":
            default:
                return SkillsByName;
        }
    }, [transform]);

    const handleFiltering = (types: string[]) => {
        if (!types || types.length === 0) {
            setFilterSkills(skills ?? []);
        }
        else setFilterSkills(skills?.filter(x => types.includes(x.type)) ?? []);
    }

    if (loading) {
        return <Spin />;
    }

    return (
        <Flex vertical gap="24px">
            <Flex justify="space-between">
                <Segmented<skillsTransform>
                    options={[
                        { label: "Relevance", value: "byRelevance" },
                        { label: "Expertise", value: "byLevel" },
                        { label: "Type", value: "byType" },
                        { label: "Name", value: "byName" }
                    ]}
                    onChange={(value) => setTransform(value)}
                />
                <Select
                    mode="multiple"
                    placeholder="Filter skills..."
                    style={{ minWidth: 200 }}
                    options={skillsTypes.map(type => ({ label: type, value: type }))}
                    onChange={(values) => handleFiltering(values)} />
            </Flex>
            <Flex vertical
                gap="12px">
                {<SelectedTransform skills={filteredSkills} />}
            </Flex>
        </Flex>
    );
}