import { experiences } from "../../assets/experiences";
import { Experience } from "./experience";
import "./experiences.css";

export type ExperiencesProps = {};

export const Experiences = (props: ExperiencesProps) => {

    return (
        <div className="exp-container">
            {experiences.map(experience => (
                <Experience key={crypto.randomUUID()}
                    {...experience} />
            ))}
        </div>
    );
}