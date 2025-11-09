import axios from "axios";
import { Button, Flex, Form, Input, Select, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { IMessage, Message } from "./Message";
import { useMessageHistory } from "./useMessageHistory";
import { useScrollToEnd } from "./useScrollToEnd";
import { ChatHeader } from "./ChatHeader";
import "./Chat.css"

export type ChatProps = {
    onCloseButtonClick?: () => void;
}

export const Chat = (props: ChatProps) => {

    const [form] = Form.useForm();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [model, setModel] = useState<string>("mistral");
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [response, setResponse] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const { historyLoading } = useMessageHistory({
        onHistoryLoaded: (history) => setMessages(history)
    });

    useScrollToEnd(messagesEndRef, [messages]);

    const pushMessage = (message: IMessage) => {
        setMessages([...messages, message]);
    }

    const handleSubmit = () => {
        const model = form.getFieldValue("model");
        const userMessage = form.getFieldValue("userMessage");
        form.resetFields();

        // Push user input to message feed
        pushMessage({ isUser: true, content: userMessage });
        setLoading(true);

        // Send the prompt to the chat API
        axios.post<string>("/chat", { model, userMessage })
            .then(response => setResponse(response.data))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        if (response) {
            pushMessage({ isUser: false, content: response })
        }
    }, [response]);

    return (
        <Flex vertical style={{ height: "100%" }}>
            <ChatHeader
                backButton
                closeButton
                onCloseButtonClick={props.onCloseButtonClick} />
            <Flex className="chat-container"
                vertical>
                <Flex className="feed"
                    vertical
                    ref={messagesEndRef}>
                    {messages.map(message => <Message {...message} />)}
                    {(loading || historyLoading) && <Message.Loading />}
                    <div ref={messagesEndRef} />
                </Flex>
                <Form form={form}
                    layout="inline"
                    style={{ marginTop: 8 }}>
                    <Form.Item name="userMessage" style={{ flexGrow: 1 }}>
                        <Space.Compact className="message-input">
                            <Input
                                allowClear
                                placeholder="Aa"
                                style={{ flexGrow: 1 }}
                                onPressEnter={handleSubmit} />
                            <Button icon={<SendOutlined />} onClick={handleSubmit} />
                        </Space.Compact>
                    </Form.Item>
                    <Form.Item name="model" initialValue={model}>
                        <Select className="model-select"
                            value={model}
                            onChange={value => setModel(value)}>
                            <Select.Option value="mistral">Mistral Small</Select.Option>
                            <Select.Option value="openai">GPT 3.5</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
    );
}    