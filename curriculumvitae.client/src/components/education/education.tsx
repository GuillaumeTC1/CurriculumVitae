import { useAsync } from "@/services/hooks/UseAsync";
import { Spin } from "antd";
import axios from "axios";
import "./Education.css";
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
        <div className="edu-container">
            {education!.map(formation => (
                <Formation key={crypto.randomUUID()}
                    {...formation} />
            ))}
        </div>   
    );
}