import { Spin, Timeline } from "antd";
import { useAsync } from "@/hooks/useAsync";
import { EducationModel, ExperienceModel } from "./resume.types";
import { Experience } from "./Experience";
import { Education } from "./Education";

async function fetchExperiences(): Promise<ExperienceModel[]> {
    const response = await fetch("/resume/experiences");
    if (!response.ok) {
        throw new Error("Failed to fetch experiences");
    }
    return response.json();
}

async function fetchEducation(): Promise<EducationModel[]> {
    const response = await fetch("/resume/education");
    if (!response.ok) {
        throw new Error("Failed to fetch education");
    }
    return response.json();
}

export type ResumeTimelineProps = {}

export const ResumeTimeline = (_: ResumeTimelineProps) => {

    const {
        data: experiences,
        loading: experiencesLoading
    } = useAsync(fetchExperiences);

    const {
        data: education,
        loading: educationLoading
    } = useAsync(fetchEducation);

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