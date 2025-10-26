import { CvCard } from "./CvCard";
import { Flex, Typography } from "antd";
import { EducationModel } from "./models/EducationModel";

export type FormationProps = EducationModel & {}

export const Formation = (props: FormationProps) => {

    return (
        <CvCard
            title={
                <Flex justify="space-between">
                    <Typography.Text strong italic>{props.degree}</Typography.Text>
                    <Typography.Text strong>{props.institutionName}</Typography.Text>
                    <Typography.Text italic>
                        {new Date(props.startDate).toLocaleDateString()} - {props.endDate ? new Date(props.endDate).toLocaleDateString() : "Now"}
                    </Typography.Text>
                </Flex>
            }
            content={props.description}
            image={props.logoUrl?.toString()} dir="rtl"
        />
    );
}