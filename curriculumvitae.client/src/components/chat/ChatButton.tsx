import { FloatButton } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

export type ChatButtonProps = {
    onClick?: () => void;
}

export const ChatButton = (props: ChatButtonProps) => {

    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    // Quick fix to hide float button useless hovering while in chat page
    // TODO: Make something better
    if (window.location.href.endsWith("/chat")) {
        return;
    }

    return (
        <FloatButton
            style={{ insetInlineEnd: isSmallScreen ? 24 : 48 }}
            icon={<MessageOutlined id="chat-icon" />}
            onClick={props.onClick} />
    );
}    