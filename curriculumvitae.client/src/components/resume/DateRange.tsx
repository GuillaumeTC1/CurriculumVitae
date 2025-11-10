import { Typography } from "antd";
import MediaQuery from "react-responsive";

export type DateRangeProps = {
    startDate: string;
    endDate?: string;
}

export const DateRange = (props: DateRangeProps) => {
    return (
        <MediaQuery maxWidth={768}>
            {(matches) => matches ?
                <ShortDisplay {...props} /> :
                <LongDisplay {...props} />}
        </MediaQuery>
    );
}

const ShortDisplay = (props: DateRangeProps) => {
    return (
        <Typography.Text italic>
            {new Date(props.startDate).getFullYear()} - {props.endDate ? new Date(props.endDate).getFullYear() : "Now"}
        </Typography.Text>
    );
}

const LongDisplay = (props: DateRangeProps) => {
    return (
        <Typography.Text italic>
            {new Date(props.startDate).toLocaleDateString()} - {props.endDate ? new Date(props.endDate).toLocaleDateString() : "Now"}
        </Typography.Text>
    );
}