import { education } from "../../assets/education";
import { Formation } from "./formation";
import "./education.css";

export type EducationProps = {};

export const Education = (props: EducationProps) => {

    return (
        <div className="edu-container">
            {education.map(formation => (
                <Formation {...formation} />
            ))}
        </div>   
    );
}