import { Avatar, Flex, Tabs, TabsProps } from "antd";
import { useRef } from "react";
import { Education } from "./Education";
import { Experiences } from "./Experiences";
import { Skills } from "./Skills";
import { CvTour } from "./CvTour";

export type ResumeProps = {
    jobTitle: string;
    description: string;
    email: string;
    name: string;
}

export const Resume = (props: ResumeProps) => {

    var infoRef = useRef(null);
    var experiencesRef = useRef(null);
    var educationRef = useRef(null);
    var personalsRef = useRef(null);
    var awardsRef = useRef(null);

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
            label: <div ref={personalsRef}>Personnal Projects</div>,
            children: <Skills />,
        },
        {
            key: "4",
            label: <div ref={awardsRef}>Awards</div>,
            children: <Skills />,
        },
    ];

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
                        <h2 style={{ margin: 0 }}>{props.name}</h2>
                        <h3 style={{ margin: 0 }}>Technical Lead</h3>
                        <span>{props.email}</span>
                    </Flex>
                </Flex>
                <p>{props.description}</p>
                <Tabs items={items} />
            </Flex>
            <CvTour
                experiencesRef={experiencesRef}
                educationRef={educationRef}
                personalsRef={personalsRef}
                awardsRef={awardsRef} />
        </>
    );
}    