import { useAuthContext } from "@/components/auth/context";
import { Page } from "@/components/page/Page";
import { Button, Form, Input, Space } from "antd";

const ContactPage = () => {

    const authContext = useAuthContext();
    const [form] = Form.useForm();

    const handleAiFill = () => {
        form.setFieldsValue({ content: "Hello Guillaume!\nThis message has been filled by AI." });
    }

    return (
        <Page title="Contact">
            <Form form={form}
                layout="horizontal"
                style={{ justifySelf: "center", width: "100%", maxWidth: 600 }}>
                <Form.Item name="email">
                    <Input
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
                        <Button type="primary" htmlType="submit">
                            Send
                        </Button>
                        <Button htmlType="button" onClick={handleAiFill}>
                            AI Fill
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Page>
    );
}

export default ContactPage;