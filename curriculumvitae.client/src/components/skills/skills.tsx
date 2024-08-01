import "./skills.css"

export type SkillsProps = {
    skills: ISkill[];
};

export const Skills = (props: SkillsProps) => {

    return (
        <div>
            <h2>Skills</h2>
            <h4>Softwares</h4>
            <span>Visual Studio</span>
            <span>VS Code</span>
            <span>Azure</span>
            <h4>Techs</h4>
            <span>.NET</span>
            <span>TypeScript</span>
            <span>Python</span>
            <h4>Project Managment</h4>
            <span>Agile</span>
            <h4>Languages</h4>
            <span>French</span>
            <span>English</span>
            <span>Spanish</span>
            <span>Japanese</span>
        </div>
    );
}    