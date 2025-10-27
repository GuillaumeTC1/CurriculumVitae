import { useAsync } from "@/hooks/useAsync";
import { Spin } from "antd";
import axios from "axios";
import { Experience, ExperienceProps } from "./Experience";
import { CvTimeline } from "./CvTimeline";
import { ExperienceModel } from "./models/ExperienceModel";

export const Experiences = () => {

    const {
        data: experiences,
        loading
    } = useAsync(() => axios.get<ExperienceModel[]>("/resume/experiences")
        .then(response => response.data));

    if (loading) {
        return <Spin />;
    }

    return (
        <CvTimeline<ExperienceProps>
            items={experiences!}
            render={item => <Experience {...item} />} />
    );
}