import { Avatar, Flex, Spin, Tabs, TabsProps, Typography } from "antd";
import { Education } from "./Education";
import { Experiences } from "./Experiences";
import { CvTour } from "./CvTour";
import { useAsync } from "@/hooks/useAsync";
import axios from "axios";
import { AboutModel } from "./models/AboutModel";
import { SkillsDashbord } from "@/components/skills/SkillsDashboard";

export const Resume = () => {

    const items: TabsProps['items'] = [
        {
            key: "1",
            label: <div id="experiences">Experiences</div>,
            children: <Experiences />,
        },
        {
            key: "2",
            label: <div id="education">Education</div>,
            children: <Education />,
        },
        {
            key: "3",
            label: <div id="skills">Skills</div>,
            children: <SkillsDashbord />,
        }
    ];

    const {
        data: about,
        loading
    } = useAsync(() => axios.get<AboutModel>("/info/about")
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
                        size={100}
                        src="./profile_picture.jfif" />
                    <Flex vertical
                        gap="8px"
                        align="flex-end">
                        <h2 style={{ margin: 0 }}>{about!.name}</h2>
                        <h3 style={{ margin: 0 }}>{about!.jobTitle}</h3>
                        <a href={`mailto:${about!.email}`}>{about!.email}</a>
                    </Flex>
                </Flex>
                <Typography.Text
                    style={{ whiteSpace: "pre-wrap" }}>
                    {about!.description}
                </Typography.Text>
                <Tabs items={items} />
            </Flex>
            <CvTour />
        </>
    );
}    