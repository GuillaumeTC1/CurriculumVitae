import { Collapse, Flex, Typography } from "antd";

export type CvCardProps = {
    title: React.ReactNode;
    content: React.ReactNode;
    image?: string;
    dir?: "ltr" | "rtl";
}

export const CvCard = (props: CvCardProps) => {

    return (
        <Collapse defaultActiveKey={["1"]}>
            <Collapse.Panel key="1"
                style={{ alignItems: "center" }}
                header={
                    <Flex dir={props.dir}
                        style={{ alignItems: "center" }}>

                        <Flex className="cv-card-title"
                            vertical
                            dir="ltr">
                            {props.title}
                        </Flex>
                    </Flex>
                }>
                <Typography.Paragraph
                    style={{ whiteSpace: "pre-wrap" }}>
                    {props.content}
                </Typography.Paragraph>
            </Collapse.Panel>
        </Collapse>
    );
}