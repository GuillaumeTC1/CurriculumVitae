import { Education } from "@/components/education/Education";
import { Experiences } from "@/components/experiences/Experiences";
import { Skills } from "@/components/skills/Skills";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Space, Tabs, TabsProps } from "antd";
import "./Profile.css";

export type ProfileProps = {
    jobTitle: string;
    description: string;
    email: string;
    name: string;
    phone: string;
    address: string;
    birthDate: string;
}

export const Profile = (props: ProfileProps) => {

    const items: TabsProps['items'] = [
        {
            key: "1",
            label: "Experiences",
            children: <Experiences />,
        },
        {
            key: "2",
            label: "Education",
            children: <Education />,
        },
        {
            key: "3",
            label: "Skills",
            children: <Skills />,
        },
    ];

    return (
        <Flex className="profile"
            vertical
            gap="small">
            <Flex className="profile-header"
                align="center"
                justify="space-between">
                <Avatar
                    size={100}
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGjbGaHuDiPBw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731353082624?e=1745452800&v=beta&t=VtnOb2Wn4Zvl81lY8fVAcKk2xtllb4sAoEnBe3yLg-4" />
                <Flex
                    vertical
                    align="flex-end">
                    <h3>Technical Lead</h3>
                    <p>{props.description}</p>
                </Flex>
            </Flex>
            <Flex
                justify="space-between"
                gap="24px"
                style={{ padding: "0 100px" }}>
                <Tabs items={items} />
                <Flex className="profile-info"
                    vertical
                    justify="flex-end">
                    <h2>Personnal Info</h2>
                    <Space direction="vertical">
                        <span>{props.email}</span>
                        <span>{props.name}</span>
                        <span>{props.phone}</span>
                        <span>{props.address}</span>
                        <span>{props.birthDate}</span>
                    </Space>
                    <Space className="profile-buttons"
                        direction="vertical">
                        <Button
                            icon={<i className="fa-solid fa-briefcase" />}
                            href="/contact?hire=true">
                            Hire
                        </Button>
                        <Button
                            icon={<LinkedinOutlined />}
                            href="https://www.linkedin.com/in/guillaume-thomas-castelnau/">
                            LinkedIn
                        </Button>
                        <Button
                            icon={<GithubOutlined />}
                            href="https://github.com/GuillaumeTC1">
                            GitHub
                        </Button>
                    </Space>
                </Flex>
            </Flex>
        </Flex>  
    );
}    