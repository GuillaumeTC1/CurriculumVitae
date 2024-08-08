import { skills } from "../assets/skills";
import { Head } from "../components/head/head";
import { Skills } from "../components/skills/skills";

const SkillsPage = () => {

    return (
        <>
            <Head title="Skills" />
            <Skills skills={skills} />
        </>
    );
}

export default SkillsPage;