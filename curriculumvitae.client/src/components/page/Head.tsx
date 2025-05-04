export type HeadProps = {
    title?: string;
}

export const Head = (props: HeadProps) => {

    if (props.title) {
        document.title = props.title
    }

    return (
        <></>
    );
}