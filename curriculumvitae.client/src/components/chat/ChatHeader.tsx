import { Button, Flex, Typography } from "antd";
import { ArrowLeftOutlined, CloseOutlined, } from "@ant-design/icons";

export type ChatHeaderProps = {
    backButton?: boolean;
    closeButton?: boolean;
    onCloseButtonClick?: () => void;
}

export const ChatHeader = ({
    backButton = false,
    closeButton = false,
    ...props }: ChatHeaderProps) => {

    return (
        <Flex align="center" style={{ padding: 8 }}>
            {backButton &&
                <Button
                    href="/"
                    icon={<ArrowLeftOutlined />} />
            }
            <Typography.Title level={4}
                style={{ margin: "0 auto", userSelect: "none" }}>
                AI Chat
            </Typography.Title>
            {closeButton &&
                <Button
                    style={{ marginLeft: "auto", marginRight: 8 }}
                    icon={<CloseOutlined />}
                    onClick={props.onCloseButtonClick} />
            }
        </Flex>
    );
}    