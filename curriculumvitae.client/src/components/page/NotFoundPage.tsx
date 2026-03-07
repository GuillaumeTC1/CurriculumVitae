import { ErrorPage } from "./ErrorPage";

export type NotFoundPageProps = {}

export const NotFoundPage = (_: NotFoundPageProps) => {

    return (
        <ErrorPage
            statusCode={404}
            message="Sorry, the page you visited does not exist." />
    );
}