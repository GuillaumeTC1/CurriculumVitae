import { useAsync } from "@/hooks/useAsync";
import { Flex, Segmented, Select, Spin } from "antd";
import axios from "axios";
import { SkillModel } from "./models/SkillModel";
import { useEffect, useMemo, useState } from "react";
import { SkillsByRelevance } from "./SkillsByRelevance";
import { SkillsByProficiency } from "./SkillsByProficiency";
import { SkillsByCategory } from "./SkillsByCategory";
import { SkillsByName } from "./SkillsByName";

type skillsTransform = "byRelevance" | "byProficiency" | "byName" | "byCategory";

export const SkillsDashbord = () => {

    const [transform, setTransform] = useState<skillsTransform>("byRelevance");
    const [filteredSkills, setFilterSkills] = useState<SkillModel[]>([]);

    const {
        data: skills,
        loading
    } = useAsync(() => axios.get<SkillModel[]>("/resume/skills")
        .then(response => response.data));

    useEffect(() => {
        if (skills) setFilterSkills(skills);
    }, [skills, setFilterSkills]);

    const skillsTypes = useMemo(() => [...new Set(skills?.map(skill => skill.category))], [skills]);

    const SelectedTransform = useMemo(() => {
        switch (transform) {
            case "byRelevance":
                return SkillsByRelevance;
            case "byProficiency":
                return SkillsByProficiency;
            case "byCategory":
                return SkillsByCategory;
            case "byName":
            default:
                return SkillsByName;
        }
    }, [transform]);

    const handleFiltering = (types: string[]) => {
        if (!types || types.length === 0) {
            setFilterSkills(skills ?? []);
        }
        else setFilterSkills(skills?.filter(x => types.includes(x.category)) ?? []);
    }

    if (loading) {
        return <Spin />;
    }

    return (
        <Flex vertical gap="24px">
            <Flex wrap
                gap="small"
                justify="space-between">
                <Segmented<skillsTransform>
                    options={[
                        { label: "Relevance", value: "byRelevance" },
                        { label: "Proficiency", value: "byProficiency" },
                        { label: "Category", value: "byCategory" },
                        { label: "Name", value: "byName" }
                    ]}
                    onChange={(value) => setTransform(value)}
                />
                <Select
                    mode="multiple"
                    placeholder="Filter skills..."
                    style={{ minWidth: 100, maxWidth: 200, flexGrow: 1 }}
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