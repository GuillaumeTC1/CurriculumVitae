import { Profile } from "@/components/layout/Profile";
import { GithubOutlined, LinkedinOutlined, MenuOutlined } from "@ant-design/icons";
import { Layout as AntdLayout, Button, Drawer, Flex, FloatButton, Menu } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const menuButtonStyle = {
    height: "100%",
    color: "white",
    background: "transparent",
    border: 0,
    fontSize: "1.2rem"
}

const linkButtonStyle = {
    color: "white"
}

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
            <AntdLayout.Header style={{ padding: "0 24px", position: "sticky", top: 0, zIndex: 1000 }}>
                <Flex align="center"
                    justify="space-between"
                    style={{ height: "100%" }}>
                    <Flex gap="8px"
                        align="center"
                        style={{ padding: 0, color: "white", fontSize: "1.2rem" }}>
                        <Button
                            style={menuButtonStyle}
                            icon={<MenuOutlined />}
                            onClick={toggleMenuOpen} />
                        <span>CurriculumVitae</span>
                    </Flex>
                    <Flex gap="8px"
                        style={{ padding: 0 }}>
                        <Button
                            type="link"
                            icon={<LinkedinOutlined />}
                            href="https://www.linkedin.com/in/guillaume-thomas-castelnau/"
                            style={linkButtonStyle}>
                            LinkedIn
                        </Button>
                        <Button
                            type="link"
                            icon={<GithubOutlined />}
                            href="https://github.com/GuillaumeTC1"
                            style={linkButtonStyle}>
                            GitHub
                        </Button>
                        <Profile />
                    </Flex>
                </Flex>
            </AntdLayout.Header>
            <AntdLayout.Content style={{ position: "relative", height: "100%" }}>
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
                <FloatButton onClick={() => console.log('onClick')} />
                <Outlet />
            </AntdLayout.Content>
        </AntdLayout>
    );
}