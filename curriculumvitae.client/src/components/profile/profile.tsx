import { useNavigate } from "react-router-dom";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import "./profile.css";
import { useAddToast } from "../toasts/context";

export type ProfileProps = {
    name: string;
};

export const Profile = (props: ProfileProps) => {

    const navigate = useNavigate();
    const notify = useAddToast();

    return (
        <div className="profile">
            <div className="profile-header">
                <img
                    className="profile-picture"
                    src="https://media.licdn.com/dms/image/C5603AQELV6axpp2wfA/profile-displayphoto-shrink_200_200/0/1570293340285?e=2147483647&v=beta&t=rTNHWmiM4Z60KncJtinfqJ4_eGnrhmBcD55TlIJKUTA" />
                <div className="profile-titles">
                    <h3>Technical Lead</h3>
                </div>
            </div>
            <p>
                Graduated of software engineering (MEng) & computational graphics (MS) at 22 years old, I am now Tech Lead of web products and cloud solutions at L'Oréal R&I. After two years working for L’Oréal, I am looking for new challenges in a tech-oriented company.
            </p>
            <div className="profile-info">
                <h2>Personnal Info</h2>
                <span>**email**</span>
                <span>Guillaume Thomas-Castelnau</span>
                <span>**phone**</span>
                <span>**address**</span>
                <span>**birthday**</span>
            </div>
            <div className="profile-buttons">
                <Button
                    onClick={() => navigate("/contact?hire=true")}>
                    <div>
                        <Icon name="briefcase" />
                        <div>Hire</div>
                    </div>
                </Button>
                <Button
                    onClick={() => notify({ id: crypto.randomUUID(), message: "LinkedIn!" })}>
                    <div>
                        <Icon name="earth" />
                        <div>LinkedIn</div>
                    </div>
                </Button>
                <Button
                    onClick={() => notify({ id: crypto.randomUUID(), message: "GitHub!" })}>
                    <div>
                        <Icon name="earth" />
                        <div>GitHub</div>
                    </div>
                </Button>
            </div>
        </div>  
    );
}    