import { Card, Flex, Typography } from "antd";
import { useState } from "react";

export type CvCardProps = {
    title: React.ReactNode;
    content: React.ReactNode;
    image?: string;
    dir?: "ltr" | "rtl";
}

export const CvCard = (props: CvCardProps) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <Card styles={{ body: { padding: 0 } }}>
            <Flex dir={props.dir}>
                <img src={props.image} />
                <Flex vertical
                    dir="ltr"
                    style={{ flexGrow: 1, padding: 24 }}>
                    <div>{props.title}</div>
                    <Typography.Paragraph
                        ellipsis={{
                            rows: 2,
                            expandable: 'collapsible',
                            expanded,
                            onExpand: (_, info) => setExpanded(info.expanded),
                        }}>
                        {props.content}
                    </Typography.Paragraph>
                </Flex>
            </Flex>
        </Card>
    );
}