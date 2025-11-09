import { Typography } from "antd"
import "./Chat.css"

export interface IMessage {
    isUser: boolean,
    content: string
}

export type MessageProps = IMessage & {}

const MessageContent = (props: MessageProps) => {
    return (
        <Typography.Text
            style={{ whiteSpace: "pre-wrap", color: "inherit" }}>
            {props.content}
        </Typography.Text>
    );
}

const MessageLoading = () => {
    return (
        <div className="message message-other">
            <div className="message-loading">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export const Message = (props: MessageProps) => {

    if (props.isUser) {
        return (
            <div className="message message-self">
                <MessageContent {...props} />
            </div>
        );
    }

    return (
        <div className="message message-other">
            <MessageContent {...props} />
        </div>
    );
}

Message.Loading = MessageLoading;