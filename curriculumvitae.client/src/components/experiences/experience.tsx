import { useMemo } from "react";
import { IExperience } from "../../models/iexperience";
import "../../services/extensions/date-extensions"
import "./experiences.css";

export type ExperienceProps = IExperience & { };

export const Experience = (props: ExperienceProps) => {

    const logoUrl = useMemo(() => props.logoUrl ?? new URL(`https://cdn.brandfetch.io/${props.company}.com`), [props])
    const duration = useMemo(() => props.startDate.duration(props.endDate), [props])

    return (
        <div className="exp">
            <div className="exp-header">
                <div className="exp-logo-container">
                    <img
                        className="exp-logo"
                        src={logoUrl.toString()} />
                </div>   
                <span className="job-title">{props.jobTitle}</span>
                <div className="exp-duration">
                    <span>{props.startDate.toLocaleDateString()} - {props.endDate?.toLocaleDateString() ?? "Now"}</span>
                    <span>{`(${duration.years()}y ${duration.months()}m)`}</span>
                </div>
            </div>
            <p className="exp-description">{props.description}</p>
        </div>
    );
}