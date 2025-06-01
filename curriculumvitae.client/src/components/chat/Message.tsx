import "./Chat.css"

export interface IMessage {
    self: boolean,
    content: string
}

export type MessageProps = IMessage & {}

export const Message = (props: MessageProps) => {

    const messageContent = <p className="message-content">{props.content}</p>

    if (props.self) {
        return <div className="message message-self">{messageContent}</div>;
    }

    return <div className="message message-other">{messageContent}</div>;
}    