import { Page } from "@/components/page/Page";
import { Spin } from "antd";

export type LoadingPageProps = {}

export const LoadingPage = (_: LoadingPageProps) => {

    return (
        <Page title="Loading...">
            <Spin />
        </Page>
    );
}