import { useAuthContext } from "@/components/auth/context";
import { Page } from "@/components/page/Page";
import { Button, Form, Input, Space, notification } from "antd";
import axios from "axios";
import { useState } from "react";

const ContactPage = () => {

    const authContext = useAuthContext();
    const [notificationApi, notificationHolder] = notification.useNotification();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = () => {
        // Get form prompt and clear input 
        const content = form.getFieldValue("content");
        form.resetFields();

        setLoading(true); // Set loading to display loading animation while API is responding

        // Send the prompt to the chat API
        axios.post<string>("/mail", { content })
            .then(_ => {
                notificationApi.success({
                    message: "Message Sent",
                    description: "Your message has been sent successfully."
                });
            }) // Set response as state to avoid double state update
            .catch(_ => {
                notificationApi.error({
                    message: "Error",
                    description: "There was an error sending your message. Please try again later."
                });
            })
            .finally(() => setLoading(false)); // API has responded
    }

    const handleAiFill = () => {
        form.setFieldsValue({ content: "Hello Guillaume!\nThis message has been filled by AI." });
    }

    return (
        <Page title="Contact">
            {notificationHolder}
            <Form form={form}
                layout="horizontal"
                style={{ justifySelf: "center", width: "100%", maxWidth: 1200 }}>
                <Form.Item name="email">
                    <Input
                        disabled
                        placeholder="youremail@email.com"
                        defaultValue={authContext.user?.email} />
                </Form.Item>
                <Form.Item name="content">
                    <Input.TextArea
                        placeholder="Type your message here..."
                        style={{ height: 200 }} />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            onClick={handleSubmit}>
                            Send
                        </Button>
                        <Button
                            htmlType="button"
                            onClick={handleAiFill}>
                            AI Fill
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Page>
    );
}

export default ContactPage;