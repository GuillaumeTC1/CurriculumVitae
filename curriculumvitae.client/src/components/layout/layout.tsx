import { Profile } from "./Profile";
import { CloseOutlined, GithubOutlined, HomeOutlined, LinkedinOutlined, MailOutlined, MenuOutlined, SafetyOutlined } from "@ant-design/icons";
import { Layout as AntdLayout, Breadcrumb, Button, Flex, Menu, theme, Typography } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css"
import { Chat } from "@/components/chat/Chat";
import { ChatButton } from "../chat/ChatButton";

export const Layout = () => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleChatOpen = () => {
        setChatOpen(!chatOpen);
    }

    const handleMenuItemClick = ({ key }: { key: string }) => {
        navigate(key);
    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <AntdLayout style={{ height: "100vh" }}>
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
            <AntdLayout>
                <AntdLayout.Sider
                    collapsed={!menuOpen}
                    style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        onClick={handleMenuItemClick}>
                        <Menu.Item key="/" icon={<HomeOutlined />}>Home</Menu.Item>
                        <Menu.Item key="/contact" icon={<MailOutlined />}>Contact</Menu.Item>
                        <Menu.Item key="/privacy" icon={<SafetyOutlined />}>Privacy</Menu.Item>
                    </Menu>
                </AntdLayout.Sider>
                <AntdLayout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb
                        items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
                        style={{ margin: '16px 0' }} />
                    <AntdLayout.Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        <Outlet />
                        {!chatOpen && <ChatButton onClick={toggleChatOpen} />}
                    </AntdLayout.Content>
                </AntdLayout>
                <AntdLayout.Sider
                    collapsed={!chatOpen}
                    collapsedWidth={0}
                    width="30%"
                    style={{ background: colorBgContainer }}>
                    <Flex vertical style={{ height: "100%" }}>
                        <Flex align="center" style={{ padding: 8 }}>
                            <Typography.Title level={4}
                                style={{ display: "inline-block", margin: "16px" }}>
                                AI Chat
                            </Typography.Title>
                            <Button
                                style={{ marginLeft: "auto", marginRight: 8 }}
                                icon={<CloseOutlined />}
                                onClick={toggleChatOpen} />
                        </Flex>
                        <div style={{ flexGrow: 1 }}>
                            <Chat />
                        </div>
                    </Flex>
                </AntdLayout.Sider>
            </AntdLayout>
        </AntdLayout>
    );
}