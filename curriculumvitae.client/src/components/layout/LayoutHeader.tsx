import { GithubOutlined, LinkedinOutlined, MenuOutlined } from "@ant-design/icons";
import { Layout, Button, Flex } from "antd";
import { Profile } from "./Profile";

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
                    <Button
                        className="menu-button layout-button"
                        ghost
                        icon={<MenuOutlined />}
                        onClick={props.onMenuButtonClick} />
                    <a className="layout-button"
                        href="/">
                        CurriculumVitae
                    </a>
                </Flex>
                <Flex gap="8px"
                    style={{ padding: 0 }}>
                    <Button className="layout-button"
                        type="link"
                        icon={<LinkedinOutlined />}
                        href="https://www.linkedin.com/in/guillaume-thomas-castelnau/">
                        LinkedIn
                    </Button>
                    <Button className="layout-button"
                        type="link"
                        icon={<GithubOutlined />}
                        href="https://github.com/GuillaumeTC1">
                        GitHub
                    </Button>
                    <Profile />
                </Flex>
            </Flex>
        </Layout.Header>
    );
}