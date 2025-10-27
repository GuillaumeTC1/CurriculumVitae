import { Button, Flex, FloatButton, Form, Input, Popover, Space, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { MessageOutlined, SendOutlined } from "@ant-design/icons";
import { IMessage, Message } from "./Message";
import { useAsync } from "@/hooks/useAsync";
import "./Chat.css"

export const Chat = () => {

    const [form] = Form.useForm();

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

    return (
        <Popover
            title={
                <div>AI Chat</div>
            }
            trigger="click"
            arrow={false}
            placement="topRight"
            content={
                <>
                    <Flex className="feed"
                        vertical
                        style={{ display: "flex" /* force to display container even when empty */ }}>
                        {messages.map(message => <Message {...message} />)}
                        {(loading || historyLoading) && <Spin />}
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
                                <Button icon={<SendOutlined />} />
                            </Space.Compact>
                        </Form.Item>
                    </Form>
                </>
            }>
            <FloatButton icon={<MessageOutlined id="chat-icon" />} />
        </Popover>
    )
}    