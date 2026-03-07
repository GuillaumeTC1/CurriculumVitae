import { useMediaQuery } from "react-responsive";
import { Avatar, Button, Flex, Space, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Page } from "@/components/page/Page";

const HomePage = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    return (
        <Page title="Home">
            <Flex justify="space-between">
                <Flex vertical
                    gap="large">
                    <Space vertical>
                        <Typography.Text>Hi I am</Typography.Text>
                        <Typography.Text>Guillaume Thomas-Castelnau</Typography.Text>
                        <Typography.Title>Software Engineer</Typography.Title>
                    </Space>
                    <Space size="large">
                        <Button icon={<LinkedinOutlined />} />
                        <Button icon={<GithubOutlined />} />
                        <Button icon={<LinkedinOutlined />} />
                    </Space>
                    <Space>
                        <Button type="primary">Hire me</Button>
                        <Button href="/cv.pdf" target="_blank">Download CV</Button>
                    </Space>
                    <Space separator>
                        <Space vertical size="small">
                            <Typography.Text>4+</Typography.Text>
                            <Typography.Text>Years of experience</Typography.Text>
                        </Space>
                        <Space vertical size="small">
                            <Typography.Text>10+</Typography.Text>
                            <Typography.Text>Projects completed</Typography.Text>
                        </Space>
                        <Space vertical size="small">
                            <Typography.Text>5+</Typography.Text>
                            <Typography.Text>Technologies mastered</Typography.Text>
                        </Space>
                    </Space>
                </Flex>
                <div style={{ margin: "auto" }}>
                    <Avatar
                        size={isSmallScreen ? 256 : 384}
                        shape="square"
                        src="./profile_picture_transparentBg.png" />
                </div>
            </Flex>
        </Page>
    );
}

export default HomePage;