import { AuthView } from "../components/auth/auth-view";
import { Head } from "../components/head/head";
import { Profile } from "../components/profile/profile";

const HomePage = () => {

    return (
        <>
            <Head title="Home" />
            <AuthView>
                <Profile name="guillaume-thomas-castelnau" />
            </AuthView>
        </>
    );
}

export default HomePage;