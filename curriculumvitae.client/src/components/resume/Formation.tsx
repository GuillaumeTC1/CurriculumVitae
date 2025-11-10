import { CvCard } from "./CvCard";
import { Avatar, Col, Flex, Row, Tooltip, Typography } from "antd";
import { EducationModel } from "./models/EducationModel";
import MediaQuery from "react-responsive";
import { DateRange } from "./DateRange";

export type FormationProps = EducationModel & {}

export const Formation = (props: FormationProps) => {

    return (
        <CvCard dir="rtl"
            title={
                <Row align="middle">
                    <Col span={8}
                        style={{ textAlign: "left" }}>
                        <Typography.Text strong italic>{props.degree}</Typography.Text>
                    </Col>
                    <Col span={8}>
                        <Flex justify="center" align="center" gap="small">
                            {props.logoUrl &&
                                <Tooltip
                                    title={props.institutionName}>
                                    <Avatar
                                        shape="square"
                                        src={props.logoUrl.toString()} />
                                </Tooltip>
                            }
                            <MediaQuery minWidth={768}>
                                <Typography.Text strong>{props.institutionName}</Typography.Text>
                            </MediaQuery>
                        </Flex>
                    </Col>
                    <Col span={8}
                        style={{ textAlign: "right" }}>
                        <DateRange
                            startDate={props.startDate}
                            endDate={props.endDate} />
                    </Col>
                </Row>
            }
            content={props.description} />
    );
}