import { Profile } from "./Profile";
import { GithubOutlined, LinkedinOutlined, MenuOutlined } from "@ant-design/icons";
import { Layout as AntdLayout, Button, Drawer, Flex, Menu } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css"
import { Chat } from "@/components/chat/Chat";

export const Layout = () => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuItemClick = ({ key }: { key: string }) => {
        navigate(key);
        toggleMenuOpen();
    }

    return (
        <AntdLayout style={{ minHeight: "100vh" }}>
            <AntdLayout.Header className="layout-header">
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
                            onClick={toggleMenuOpen} />
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
            </AntdLayout.Header>
            <AntdLayout.Content className="layout-content">
                <Drawer
                    placement="left"
                    open={menuOpen}
                    closable={false}
                    onClose={toggleMenuOpen}
                    getContainer={false}>
                    <Menu
                        mode="inline"
                        onClick={handleMenuItemClick}>
                        <Menu.Item key="/">Home</Menu.Item>
                        <Menu.Item key="/contact">Contact</Menu.Item>
                        <Menu.Item key="/privacy">Privacy</Menu.Item>
                    </Menu>
                </Drawer>
                <Chat />
                <Outlet />
            </AntdLayout.Content>
        </AntdLayout>
    );
}