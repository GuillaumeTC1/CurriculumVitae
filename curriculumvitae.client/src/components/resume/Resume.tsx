import axios from "axios";
import { Avatar, Divider, Flex, Spin, Typography } from "antd";
import { ResumeTour } from "./ResumeTour";
import { useAsync } from "@/hooks/useAsync";
import { useMediaQuery } from "react-responsive";
import { ResumeTimeline } from "./ResumeTimeline";
import { AboutModel } from "./resume.types";
import "./Resume.css";

export const Resume = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });
    const {
        data: about,
        loading
    } = useAsync(() => axios.get<AboutModel>("/resume/about")
        .then(response => response.data));

    if (loading) {
        return <Spin />;
    }

    return (
        <>
            <Flex vertical>
                <Flex id="info"
                    justify="space-between">
                    <Avatar
                        shape="square"
                        size={isSmallScreen ? 64 : 128}
                        src="./profile_picture.jfif" />
                    <Flex vertical
                        gap="8px"
                        align="flex-end">
                        <Typography.Title level={3} style={{ margin: 0 }}>{about!.name}</Typography.Title>
                        <Typography.Title level={4} style={{ margin: 0 }}>{about!.jobTitle}</Typography.Title>
                        <Typography.Link href={`mailto:${about!.email}`}>{about!.email}</Typography.Link>
                    </Flex>
                </Flex>
                <Divider style={{ margin: 8 }} />
                <Typography.Text
                    style={{ whiteSpace: "pre-wrap" }}>
                    {about!.description}
                </Typography.Text>
                <Divider style={{ margin: 8 }} />
                <ResumeTimeline />
            </Flex>
            <ResumeTour />
        </>
    );
}    