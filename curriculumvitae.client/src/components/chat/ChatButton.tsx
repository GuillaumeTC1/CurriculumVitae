import { FloatButton } from "antd";
import { MessageOutlined } from "@ant-design/icons";

export type ChatButtonProps = {
    onClick?: () => void;
}

export const ChatButton = (props: ChatButtonProps) => {

    return (
        <FloatButton
            style={{ insetInlineEnd: 48 }}
            icon={<MessageOutlined id="chat-icon" />}
            onClick={props.onClick} />
    );
}    