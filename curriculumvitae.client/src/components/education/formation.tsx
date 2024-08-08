import { useMemo } from "react";
import { IFormation } from "../../models/iformation";

export type FormationProps = IFormation & {};

export const Formation = (props: FormationProps) => {

    const logoUrl = useMemo(() => props.logoUrl ?? new URL(`https://cdn.brandfetch.io/${props.school}.com`), [props])
    const duration = useMemo(() => props.startDate.duration(props.endDate), [props])

    return (
        <div className="edu">
            <div className="edu-header">
                <div className="exp-logo-container">
                    <img
                        className="exp-logo"
                        src={logoUrl.toString()} />
                </div>
                <span className="edu-school">{props.school}</span>
                <span className="edu-diploma">{props.diploma}</span>
                <div className="edu-duration">
                    <span>{props.startDate.toLocaleDateString()} - {props.endDate?.toLocaleDateString() ?? "Now"}</span>
                    <span>{`(${duration.years()}y ${duration.months()}m)`}</span>
                </div>
            </div>
            <p className="edu-description">{props.description}</p>
        </div>
    );
}