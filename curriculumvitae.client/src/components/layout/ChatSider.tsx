import { Layout, theme } from "antd";
import { Chat } from "@/components/chat/Chat";

export type ChatSiderProps = {
    open: boolean;
    onBackButtonClick?: () => void;
}

export const ChatSider = (props: ChatSiderProps) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout.Sider className="chat-sider"
            collapsed={!props.open}
            collapsedWidth={0}
            width="30%"
            style={{ background: colorBgContainer }}>
            <Chat onBackButtonClick={props.onBackButtonClick} />
        </Layout.Sider>
    );
}