import axios from "axios";
import { Button, Flex, Form, Input, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { IMessage, Message } from "./Message";
import { useMessageHistory } from "./useMessageHistory";
import { useScrollToEnd } from "./useScrollToEnd";
import { ChatHeader } from "./ChatHeader";
import "./Chat.css";

export type ChatProps = {
    onBackButtonClick?: () => void;
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

        // Ignore empty messages
        if (!userMessage || userMessage.trim() === "") {
            return;
        }

        // Push user input to message feed
        pushMessage({ isUser: true, content: userMessage });
        setLoading(true);

        // Send the prompt to the chat API
        axios.post<string>("/chat", { model, userMessage })
            .then(response => setResponse(response.data))
            .finally(() => setLoading(false));
    }

    const handleEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
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
                onBackButtonClick={props.onBackButtonClick} />
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
                    autoFocus={false}
                    style={{ marginTop: 8, alignItems: "flex-end" }}>
                    <Form.Item name="userMessage" style={{ flexGrow: 1 }}>
                        <Input.TextArea className="message-input"
                            allowClear
                            placeholder="Aa"
                            autoFocus={false}
                            autoSize={{ maxRows: 5 }}
                            style={{ flexGrow: 1 }}
                            onPressEnter={handleEnterPress} />
                    </Form.Item>
                    <Form.Item name="model" initialValue={model}>
                        <Select className="model-select"
                            value={model}
                            onChange={value => setModel(value)}>
                            <Select.Option value="mistral">Mistral Small</Select.Option>
                            <Select.Option value="openai">GPT 3.5</Select.Option>
                        </Select>
                    </Form.Item>
                    <Button
                        icon={<SendOutlined />}
                        onClick={handleSubmit} />
                </Form>
            </Flex>
        </Flex>
    );
}    