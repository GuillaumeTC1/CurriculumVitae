import "./icon.css"

export type IconProps = {
    name: string;
}

export const Icon = (props: IconProps) => {

    return (
        <i className={`fa-solid fa-${props.name}`} />
    );
}