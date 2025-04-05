import { Page } from "@/components/page/Page";

export type ErrorPageProps = {
    statusCode?: number;
    message?: string
}

export const ErrorPage = (props: ErrorPageProps) => {

    return (
        <Page title="Error">
            <h1>Error {props.statusCode}</h1>
            <p>{props.message}</p>
        </Page>
    );
}