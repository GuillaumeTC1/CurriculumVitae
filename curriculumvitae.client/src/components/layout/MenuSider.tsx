import { HomeOutlined, MailOutlined, SafetyOutlined } from "@ant-design/icons";
import { Menu, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";

export type MenuSiderProps = {
    open: boolean;
}

export const MenuSider = (props: MenuSiderProps) => {

    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleMenuItemClick = ({ key }: { key: string }) => {
        navigate(key);
    }

    return (
        <Layout.Sider
            collapsed={!props.open}
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