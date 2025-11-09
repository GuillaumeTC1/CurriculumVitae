import { Layout, theme, Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";

export const MainContent = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb
                items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
                style={{ margin: '16px 0' }} />
            <Layout.Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                <Outlet />
            </Layout.Content>
        </Layout>
    );
}