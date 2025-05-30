import { Flex } from "antd";
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
            <Flex vertical>
                <span>{props.company}</span>
                <Flex justify="space-between">
                    <span className="job-title">{props.jobTitle}</span>
                    <span>{new Date(props.startDate).toLocaleDateString()} - {props.endDate ? new Date(props.endDate).toLocaleDateString() : "Now"}</span>
                </Flex>
            </Flex>
        }
            content={props.description} />
    );
}