import { Head } from "../components/head/head";

const LoginPage = () => {

    return (
        <>
            <Head title="Login" />
            <div>
                <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78x5jlbcl09xi1&redirect_uri=https://localhost:5173/auth/callback&scope=openid%20profile">
                    <img src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png" />
                </a>
            </div>
        </>
    );
}

export default LoginPage;