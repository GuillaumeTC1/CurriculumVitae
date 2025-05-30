import { Head } from "@/components/page/Head";
import { ErrorPage } from "./ErrorPage";

export type PageProps = {
    title?: string;
    children?: React.ReactNode
}

const pageStyle = {
    height: "100%",
    width: "100%",
    padding: "24px 128px",
}

export const Page = (props: PageProps) => {

    return (
        <div style={pageStyle}>
            <Head title={props.title} />
            {props.children}
        </div>
    );
}

Page.Error = ErrorPage;