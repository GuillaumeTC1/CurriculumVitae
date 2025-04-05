import { useAsync } from "@/services/hooks/UseAsync";
import { Spin } from "antd";
import axios from "axios";
import { Experience, ExperienceProps } from "./Experience";
import "./Experiences.css";

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
        <div className="exp-container">
            {experiences!.map(experience => (
                <Experience key={crypto.randomUUID()}
                    {...experience} />
            ))}
        </div>
    );
}