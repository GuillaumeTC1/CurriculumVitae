import { AuthView } from "@/components/auth/AuthView";
import { Page } from "@/components/page/Page";
import { Resume } from "@/components/resume/Resume";

const HomePage = () => {

    return (
        <Page title="Home">
            <AuthView>
                <Resume
                    jobTitle="Tech Lead"
                    description="Graduated of software engineering (MEng) & computational graphics (MS) at 22 years old, I am now Tech Lead of web products and cloud solutions at L'Oreal R&I. After two years working for L'Oreal, I am looking for new challenges in a tech-oriented company."
                    email="gcastelnau@laposte.net"
                    name="Guillaume Thomas-Castelnau"
                />
            </AuthView>
        </Page>
    );
}

export default HomePage;