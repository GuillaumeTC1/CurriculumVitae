import { CloseOutlined } from "@ant-design/icons";
import { Layout, theme, Button, Flex, Typography } from "antd";
import { Chat } from "@/components/chat/Chat";

export type ChatSiderProps = {
    open: boolean;
    onCloseButtonClick?: () => void;
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
            <Flex vertical style={{ height: "100%" }}>
                <Flex align="center" style={{ padding: 8 }}>
                    <Typography.Title level={4}
                        style={{ display: "inline-block", margin: "16px" }}>
                        AI Chat
                    </Typography.Title>
                    <Button
                        style={{ marginLeft: "auto", marginRight: 8 }}
                        icon={<CloseOutlined />}
                        onClick={props.onCloseButtonClick} />
                </Flex>
                <div style={{ flexGrow: 1 }}>
                    <Chat />
                </div>
            </Flex>
        </Layout.Sider>
    );
}