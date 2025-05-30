import { useMemo } from "react";
import { CvCard } from "./CvCard";
import { Flex } from "antd";

export type FormationProps = {
    school: string
    diploma: string
    description: string
    startDate: string;
    endDate?: string;
    logoUrl?: URL
};

export const Formation = (props: FormationProps) => {

    const logoUrl = useMemo(() => props.logoUrl ?? new URL(`https://cdn.brandfetch.io/${props.school}.com`), [props])
    //const duration = useMemo(() => props.startDate.duration(props.endDate), [props])

    return (
        <CvCard
            title={
                <Flex justify="space-between">
                    <span>{props.diploma} * {props.school}</span>
                    <span>{new Date(props.startDate).toLocaleDateString()} - {props.endDate ? new Date(props.endDate).toLocaleDateString() : "Now"}</span>
                </Flex>
            } content={props.description}
            image={logoUrl.toString()}
            dir="rtl"
        />
    );
}