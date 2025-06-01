import { useAsync } from "@/hooks/useAsync";
import { Spin } from "antd";
import axios from "axios";
import { Formation, FormationProps } from "./Formation";
import { CvTimeline } from "./CvTimeline";
import { FormationModel } from "./models/FormationModel";

export const Education = () => {

    const {
        data: education,
        loading
    } = useAsync(() => axios.get<FormationModel[]>("/info/education")
        .then(response => response.data));

    if (loading) {
        return <Spin />;
    }

    return (
        <CvTimeline<FormationProps>
            items={education!}
            render={item => <Formation {...item} />} />
    );
}