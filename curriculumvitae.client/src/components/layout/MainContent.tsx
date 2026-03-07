import { Layout, theme, ConfigProvider } from "antd";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

export const MainContent = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="main-content">
            <ConfigProvider theme={{
                token: {
                    fontSize: isSmallScreen ? 10 : 14,
                }
            }}>
                <Layout.Content className="layout-content"
                    style={{
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Outlet />
                </Layout.Content>
            </ConfigProvider>

        </Layout>
    );
}