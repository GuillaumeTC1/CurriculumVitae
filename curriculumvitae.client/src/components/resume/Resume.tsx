import { Avatar, Flex, Spin, Tabs, TabsProps } from "antd";
import { useRef } from "react";
import { Education } from "./Education";
import { Experiences } from "./Experiences";
import { Skills } from "./Skills";
import { CvTour } from "./CvTour";
import { useAsync } from "@/hooks/useAsync";
import axios from "axios";
import { AboutModel } from "./models/AboutModel";

export const Resume = () => {

    var infoRef = useRef(null);
    var experiencesRef = useRef(null);
    var educationRef = useRef(null);
    var skillsRef = useRef(null);

    const items: TabsProps['items'] = [
        {
            key: "1",
            label: <div ref={experiencesRef}>Experiences</div>,
            children: <Experiences />,
        },
        {
            key: "2",
            label: <div ref={educationRef}>Education</div>,
            children: <Education />,
        },
        {
            key: "3",
            label: <div ref={skillsRef}>Skills</div>,
            children: <Skills />,
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
                <Flex ref={infoRef}
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
                <p>{about!.description}</p>
                <Tabs items={items} />
            </Flex>
            <CvTour
                experiencesRef={experiencesRef}
                educationRef={educationRef}
                skillsRef={skillsRef} />
        </>
    );
}    