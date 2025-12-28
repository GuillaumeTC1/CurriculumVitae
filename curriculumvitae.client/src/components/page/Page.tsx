import { Head } from "@/components/page/Head";
import { ErrorPage } from "./ErrorPage";
import { NotFoundPage } from "./NotFoundPage";
import { LoadingPage } from "./LoadingPage";
import "./Page.css"

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
Page.Loading = LoadingPage;
Page.NotFound = NotFoundPage;