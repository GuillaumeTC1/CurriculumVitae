import { HomeOutlined, MailOutlined, SafetyOutlined } from "@ant-design/icons";
import { Menu, Layout, theme } from "antd";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export type MenuSiderProps = {
    open: boolean;
    onMenuItemClick?: (key: string) => void;
}

export const MenuSider = (props: MenuSiderProps) => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleMenuItemClick = ({ key }: { key: string }) => {
        navigate(key);
        props.onMenuItemClick?.(key);
    }

    return (
        <Layout.Sider
            collapsed={!props.open}
            collapsedWidth={isSmallScreen ? 0 : 60}
            width={isSmallScreen ? 60 : undefined}
            style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                onClick={handleMenuItemClick}>
                <Menu.Item key="/" icon={<HomeOutlined />}>Home</Menu.Item>
                <Menu.Item key="/contact" icon={<MailOutlined />}>Contact</Menu.Item>
                <Menu.Item key="/privacy" icon={<SafetyOutlined />}>Privacy</Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}