import { useMemo } from "react";
import { CvCard } from "./CvCard";

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
                <>
                    <span className="edu-school">{props.school}</span>
                    <span className="edu-diploma">{props.diploma}</span>
                    <div className="edu-duration">
                        <span>{new Date(props.startDate).toLocaleDateString()} - {props.endDate ? new Date(props.endDate).toLocaleDateString() : "Now"}</span>
                        {/*<span>{`(${duration.years()}y ${duration.months()}m)`}</span>*/}
                    </div>
                </>
            } content={props.description}
            image={logoUrl.toString()}
            dir="rtl"
        />
    );
}