import { Flex, Typography } from "antd";
import { CvCard } from "./CvCard";
import { ExperienceModel } from "./models/ExperienceModel";
import { DateRange } from "./DateRange";

export type ExperienceProps = ExperienceModel & {}

export const Experience = (props: ExperienceProps) => {

    return (
        <CvCard title={
            <Flex vertical>
                <Typography.Title level={4}
                    style={{ marginTop: 0 }}>
                    {props.companyName}
                </Typography.Title>
                <Flex justify="space-between">
                    <Typography.Text italic>{props.jobTitle}</Typography.Text>
                    <DateRange
                        startDate={props.startDate}
                        endDate={props.endDate} />
                </Flex>
            </Flex>
        } content={props.description} />
    );
}