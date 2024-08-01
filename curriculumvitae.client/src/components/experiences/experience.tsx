import { IExperience } from "../../models/iexperience";
import "./experiences.css"

export type ExperienceProps = IExperience & {};

export const Experience = (props: ExperienceProps) => {

    return (
        <div className="exp">
            <h4 className="exp-header">
                <span className="company">{props.company}</span>
                <span className="job-title">{props.jobTitle}</span>
            </h4>
            <p className="exp-description">{props.description}</p>
        </div>
    );
}