import { CvCard } from "./CvCard";
import { Flex, Typography } from "antd";
import { FormationModel } from "./models/FormationModel";

export type FormationProps = FormationModel & {}

export const Formation = (props: FormationProps) => {

    return (
        <CvCard
            title={
                <Flex justify="space-between">
                    <Typography.Text strong italic>{props.diploma}</Typography.Text>
                    <Typography.Text strong>{props.school}</Typography.Text>
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