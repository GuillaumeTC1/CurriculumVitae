import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { hiringMessage } from "../assets/hiring-message";
import { Head } from "../components/head/head";

const ContactPage = () => {

    const [searchParams] = useSearchParams()

    const isHire = useMemo(() => searchParams.get("hire") === "true", [searchParams])

    return (
        <>
            <Head title="Contact" />
            <h1>Contact Page</h1>
            <textarea defaultValue={isHire ? hiringMessage : ""} />
        </>
    );
}

export default ContactPage;