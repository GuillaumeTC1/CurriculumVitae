import { AuthProfile } from "@/components/auth/AuthProfile";
import { MenuOutlined } from "@ant-design/icons";
import { Layout as AntdLayout, Button, Drawer, Flex, Menu } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";

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
        <AntdLayout style={{ height: "100vh" }}>
            <AntdLayout.Header>
                <Flex
                    align="center"
                    justify="space-between"
                    style={{ height: "100%" }}>
                    <Button
                        icon={<MenuOutlined />}
                        onClick={toggleMenuOpen} />
                    <AuthProfile />
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
                <Outlet />
            </AntdLayout.Content>
        </AntdLayout>
    );
}