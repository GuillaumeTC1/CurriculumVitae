import { Page } from "@/components/page/Page";
import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";

export type ErrorPageProps = {
    statusCode?: number;
    message?: string
}

export const ErrorPage = (props: ErrorPageProps) => {

    const statusCode = props.statusCode && [403, 404, 500].includes(props.statusCode) ? props.statusCode : 500;
    const status = statusCode.toString() as ResultStatusType;
    const title = props.statusCode ? props.statusCode.toString() : "Error";
    const message = props.message || "Sorry, something went wrong.";

    return (
        <Page title="Error">
            <Result
                status={status}
                title={title}
                subTitle={message}
                extra={
                    <Button type="primary" href="/">
                        Back Home
                    </Button>
                } />
        </Page>
    );
}