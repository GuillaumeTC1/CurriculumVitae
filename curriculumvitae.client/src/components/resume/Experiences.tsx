import { useAsync } from "@/hooks/useAsync";
import { Flex, Spin } from "antd";
import axios from "axios";
import { Experience, ExperienceProps } from "./Experience";

export const Experiences = () => {

    const {
        data: experiences,
        loading
    } = useAsync(() => axios.get<ExperienceProps[]>("/info/experiences")
        .then(response => response.data))

    if (loading) {
        return <Spin />
    }

    return (
        <Flex vertical
            gap="8px">
            {experiences!.map(experience => (
                <Experience key={crypto.randomUUID()}
                    {...experience} />
            ))}
        </Flex>
    );
}