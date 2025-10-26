import { Flex, Typography } from "antd";
import { CvCard } from "./CvCard";
import { ExperienceModel } from "./models/ExperienceModel";

export type ExperienceProps = ExperienceModel & {}

export const Experience = (props: ExperienceProps) => {

    return (
        <CvCard title={
            <Flex vertical>
                <Typography.Text strong>{props.companyName}</Typography.Text>
                <Flex justify="space-between">
                    <Typography.Text italic>{props.jobTitle}</Typography.Text>
                    <Typography.Text italic>
                        {new Date(props.startDate).toLocaleDateString()} - {props.endDate ? new Date(props.endDate).toLocaleDateString() : "Now"}
                    </Typography.Text>
                </Flex>
            </Flex>
        } content={props.description} />
    );
}