import { GithubOutlined, LinkedinOutlined, MenuOutlined } from "@ant-design/icons";
import { Layout, Button, Flex } from "antd";
import { Profile } from "./Profile";
import MediaQuery from "react-responsive";

export type LayoutHeaderProps = {
    onMenuButtonClick?: () => void;
}

export const LayoutHeader = (props: LayoutHeaderProps) => {

    return (
        <Layout.Header className="layout-header">
            <Flex align="center"
                justify="space-between"
                style={{ height: "100%" }}>
                <Flex gap="8px"
                    align="center"
                    style={{ padding: 0, color: "white" }}>
                    <Button className="menu-button layout-button"
                        ghost
                        icon={<MenuOutlined />}
                        onClick={props.onMenuButtonClick} />
                    <Button className="layout-button"
                        ghost
                        href="/"
                        style={{ fontSize: "1rem" }}>
                        CurriculumVitae
                    </Button>
                </Flex>
                <Flex gap="small" style={{ padding: 0 }}>
                    <LinkedInButton />
                    <GitHubButton />
                    <Profile />
                </Flex>
            </Flex>
        </Layout.Header>
    );
}

const LinkedInButton = () => (
    <Button className="layout-button"
        ghost
        icon={<LinkedinOutlined />}
        href="https://www.linkedin.com/in/gthomascast/">
        <MediaQuery minWidth={768}>
            LinkedIn
        </MediaQuery>
    </Button>
);

const GitHubButton = () => (
    <Button className="layout-button"
        ghost
        icon={<GithubOutlined />}
        href="https://github.com/GuillaumeTC1">
        <MediaQuery minWidth={768}>
            GitHub
        </MediaQuery>
    </Button>
);