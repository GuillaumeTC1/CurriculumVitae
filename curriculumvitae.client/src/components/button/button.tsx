import { Icon } from "../icon/icon";
import "./button.css"

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    icon?: string;
}

export const Button = (props: ButtonProps) => {

    return (
        <button {...props}
            className="btn">
            {props.icon
                && <Icon name={props.icon} />}
            {props.children}
        </button>
    );
}