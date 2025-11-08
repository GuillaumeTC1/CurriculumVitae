import { Button, Flex, Form, Input, Select, Space, Spin } from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { IMessage, Message } from "./Message";
import { useAsync } from "@/hooks/useAsync";
import "./Chat.css"

export const Chat = () => {

    const [form] = Form.useForm();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [messages, setMessages] = useState<IMessage[]>([]);
    const [response, setResponse] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const pushMessage = (message: IMessage) => {
        setMessages([...messages, message]);
    }

    const {
        data: experiences,
        loading: historyLoading
    } = useAsync(() => axios.get<IMessage[]>("/chat/history")
        .then(response => response.data));

    const handleSubmit = () => {
        // Get form prompt and clear input 
        const prompt = form.getFieldValue("prompt");
        form.resetFields();

        // Push user input to message feed
        pushMessage({ isUser: true, content: prompt });

        setLoading(true); // Set loading to display loading animation while API is responding

        // Send the prompt to the chat API
        axios.post<string>("/chat", { prompt })
            .then(response => setResponse(response.data)) // Set response as state to avoid double state update
            .finally(() => setLoading(false)); // API has responded
    }

    useEffect(() => {
        setMessages(experiences || []);
    }, [experiences]);

    useEffect(() => {
        if (response) {
            pushMessage({ isUser: false, content: response })
        }
    }, [response]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <Flex vertical
            style={{ height: "100%", padding: "12px 8px" }}>
            <Flex className="feed"
                vertical
                style={{ flexGrow: 1 }}
                ref={messagesEndRef}>
                {messages.map(message => <Message {...message} />)}
                {(loading || historyLoading) && <Spin />}
                <div ref={messagesEndRef} />
            </Flex>
            <Form form={form}
                layout="horizontal"
                style={{ maxWidth: 600 }}>
                <Form.Item name="prompt">
                    <Space.Compact style={{ width: "100%" }}>
                        <Input
                            allowClear
                            placeholder="Aa"
                            onPressEnter={handleSubmit} />
                        <Button icon={<SendOutlined />} onClick={handleSubmit} />
                    </Space.Compact>
                    <Select>
                        <Select.Option value="mistral">Mistral Small</Select.Option>
                        <Select.Option value="openai">GPT 3.5</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Flex>
    )
}    