import { Head } from "@/components/page/Head";
import { ErrorPage } from "./ErrorPage";

export type PageProps = {
    title?: string;
    children?: React.ReactNode
}

export const Page = (props: PageProps) => {

    return (
        <div className="page">
            <Head title={props.title} />
            {props.children}
        </div>
    );
}

Page.Error = ErrorPage;