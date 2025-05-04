import { Page } from "@/components/page/Page";

const LoginPage = () => {

    return (
        <Page title="Login">
            <a href="/auth/linkedin">
                <img src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png" />
            </a>
        </Page>
    );
}

export default LoginPage;