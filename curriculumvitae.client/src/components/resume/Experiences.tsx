import { useAsync } from "@/hooks/useAsync";
import { Spin } from "antd";
import axios from "axios";
import { Experience, ExperienceProps } from "./Experience";
import { CvTimeline } from "./CvTimeline";

export const Experiences = () => {

    const {
        data: experiences,
        loading
    } = useAsync(() => axios.get<ExperienceProps[]>("/info/experiences")
        .then(response => response.data))

    if (loading) {
        return <Spin />
    }

    return (
        <CvTimeline<ExperienceProps>
            items={experiences!}
            render={item => <Experience {...item} />} />
    );
}