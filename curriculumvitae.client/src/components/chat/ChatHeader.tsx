import { Button, Flex, Typography } from "antd";
import { ArrowLeftOutlined, } from "@ant-design/icons";

export type ChatHeaderProps = {
    backButton?: boolean;
    onBackButtonClick?: () => void;
}

export const ChatHeader = ({
    backButton = false,
    ...props }: ChatHeaderProps) => {

    return (
        <Flex align="center" style={{ padding: 8 }}>
            {backButton &&
                <Button
                    icon={<ArrowLeftOutlined />}
                    onClick={props.onBackButtonClick} />
            }
            <Typography.Title level={4}
                style={{ margin: "0 auto", userSelect: "none" }}>
                AI Chat
            </Typography.Title>
        </Flex>
    );
}    