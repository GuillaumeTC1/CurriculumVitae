import { Spin, Timeline } from "antd";
import { useAsync } from "@/hooks/useAsync";
import axios from "axios";
import { EducationModel, ExperienceModel } from "./resume.types";
import { Experience } from "./Experience";
import { Education } from "./Education";

export type ResumeTimelineProps = {}

export const ResumeTimeline = (_: ResumeTimelineProps) => {

    const {
        data: experiences,
        loading: experiencesLoading
    } = useAsync(() => axios.get<ExperienceModel[]>("/resume/experiences")
        .then(response => response.data));

    const {
        data: education,
        loading: educationLoading
    } = useAsync(() => axios.get<EducationModel[]>("/resume/education")
        .then(response => response.data));

    if (experiencesLoading || educationLoading) {
        return <Spin />;
    }

    return (
        <Timeline
            mode="left"
            items={[
                ...experiences!.map(item => ({
                    children: <Experience {...item} />,
                })),
                ...education!.map(item => ({
                    children: <Education {...item} />,
                }))
            ]} />
    );
}