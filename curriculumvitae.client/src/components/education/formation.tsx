import { IFormation } from "../../models/iformation";

export type FormationProps = IFormation & {};

export const Formation = (props: FormationProps) => {

    return (
        <div className="edu">
            <h3 className="edu-header">
                <span className="edu-school">{props.school}</span>
                <span className="edu-diploma">{props.diploma}</span>
            </h3>
            <p className="edu-description">{props.description}</p>
        </div>
    );
}