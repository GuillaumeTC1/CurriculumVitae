import { useAsync } from "@/hooks/useAsync";
import { Flex, Spin } from "antd";
import axios from "axios";
import { Formation, FormationProps } from "./Formation";

export type EducationProps = {};

export const Education = () => {

    const {
        data: education,
        loading
    } = useAsync(() => axios.get<FormationProps[]>("/info/education")
        .then(response => response.data))

    if (loading) {
        return <Spin />
    }

    return (
        <Flex vertical
            gap="8px">
            {education!.map(formation => (
                <Formation key={crypto.randomUUID()}
                    {...formation} />
            ))}
        </Flex>   
    );
}