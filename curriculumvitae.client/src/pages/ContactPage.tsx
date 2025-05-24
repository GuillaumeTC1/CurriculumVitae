import { hiringMessage } from "@/assets/hiringMessage";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Page } from "@/components/page/Page";

const ContactPage = () => {

    const [searchParams] = useSearchParams()

    const isHire = useMemo(() => searchParams.get("hire") === "true", [searchParams])

    return (
        <Page title="Contact">
            <h1>Contact Page</h1>
            <textarea defaultValue={isHire ? hiringMessage : ""} />
        </Page>
    );
}

export default ContactPage;