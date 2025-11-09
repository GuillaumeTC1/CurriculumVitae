import { Avatar, Card, Collapse, Flex, Typography } from "antd";
// import { useState } from "react";

export type CvCardProps = {
    title: React.ReactNode;
    content: React.ReactNode;
    image?: string;
    dir?: "ltr" | "rtl";
}

export const CvCard = (props: CvCardProps) => {

    // const [expanded, setExpanded] = useState(false);

    return (
        <Card styles={{ body: { padding: 0 } }}>
            <Collapse defaultActiveKey={["1"]}>
                <Collapse.Panel key="1"
                    style={{ alignItems: "center" }}
                    header={
                        <Flex dir={props.dir}
                            style={{ alignItems: "center" }}>
                            {props.image &&
                                <Avatar
                                    shape="square"
                                    src={props.image} />
                            }
                            <Flex className="cv-card-title"
                                vertical
                                dir="ltr">
                                {props.title}
                            </Flex>
                        </Flex>
                    }>
                    <Typography.Paragraph
                        // ellipsis={{
                        //     rows: 2,
                        //     expandable: 'collapsible',
                        //     expanded,
                        //     onExpand: (_, info) => setExpanded(info.expanded),
                        // }}
                        style={{ whiteSpace: "pre-wrap" }}>
                        {props.content}
                    </Typography.Paragraph>
                </Collapse.Panel>
            </Collapse>

        </Card>
    );
}