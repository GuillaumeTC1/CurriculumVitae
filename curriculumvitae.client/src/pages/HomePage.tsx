import { AuthView } from "@/components/auth/AuthView";
import { Page } from "@/components/page/Page";
import { Resume } from "@/components/resume/Resume";

const HomePage = () => {

    return (
        <Page title="Home">
            <AuthView>
                <Resume />
            </AuthView>
        </Page>
    );
}

export default HomePage;