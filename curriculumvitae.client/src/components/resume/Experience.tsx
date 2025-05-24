import { CvCard } from "./CvCard";

export type ExperienceProps = {
    company: string;
    jobTitle: string;
    description: string;
    startDate: string;
    endDate?: string;
    logoUrl?: URL;
};

export const Experience = (props: ExperienceProps) => {
    return (
        <CvCard title={
            <>
                <span>{props.company}</span>
                <>
                    <span className="job-title">{props.jobTitle}</span>
                    <div className="exp-duration">
                        <span>{new Date(props.startDate).toLocaleDateString()} - {props.endDate ? new Date(props.endDate).toLocaleDateString() : "Now"}</span>
                        {/*<span>{`(${duration.years()}y ${duration.months()}m)`}</span>*/}
                    </div>
                </>
            </>
            } content={props.description} />
    );
}