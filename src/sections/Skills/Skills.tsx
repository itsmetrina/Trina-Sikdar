import styles from "./SkillStyles.module.css";
import SkillList from "../../common/SkillList";

import html from "../../assets/Skill_Icon/HTML.png";
import css from "../../assets/Skill_Icon/CSS.png";
import javascript from "../../assets/Skill_Icon/Javascript.png";
import typescript from "../../assets/Skill_Icon/Typescript.png";
import python from "../../assets/Skill_Icon/Python.png";
import angular from "../../assets/Skill_Icon/Angular.png";
import react from "../../assets/Skill_Icon/React.png";
import leafletJs from "../../assets/Skill_Icon/LeafletJS.png";
import postgres from "../../assets/Skill_Icon/Postgres.png";
import git from "../../assets/Skill_Icon/Git.png";
import vscode from "../../assets/Skill_Icon/VSCode.png";

interface SkillCategory {
    category: string;
    skills: Skill[];
}

interface Skill {
    name: string;
    iconLink: string;
}

const Skills = () => {
    const skills: SkillCategory[] = [
        {
            category: "Languages",
            skills: [
                { name: "HTML", iconLink: html },
                { name: "CSS", iconLink: css },
                { name: "JavaScript", iconLink: javascript },
                { name: "TypeScript", iconLink: typescript },
                { name: "Python", iconLink: python },
            ],
        },
        {
            category: "Frameworks",
            skills: [
                { name: "Angular", iconLink: angular },
                { name: "React", iconLink: react },
            ],
        },
        {
            category: "Libraries",
            skills: [
                { name: "Angular Material", iconLink: angular },
                { name: "Leaflet.js", iconLink: leafletJs },
            ],
        },
        {
            category: "Databases",
            skills: [{ name: "PostgreSQL", iconLink: postgres }],
        },
        {
            category: "Tools",
            skills: [
                { name: "Git", iconLink: git },
                { name: "VS Code", iconLink: vscode },
            ],
        },
    ];

    const renderSkills = (category: string) => {
        const categorySkills = skills.find((cat) => cat.category === category);
        if (!categorySkills) return null;

        return categorySkills.skills.map((skill) => (
            <SkillList key={skill.name} src={skill.iconLink} skill={skill.name} />
        ));
    };

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>{renderSkills("Languages")}</div>
            <hr />
            <div className={styles.skillList}>{renderSkills("Frameworks")}</div>
            <hr />
            <div className={styles.skillList}>{renderSkills("Libraries")}</div>
            <hr />
            <div className={styles.skillList}>{renderSkills("Databases")}</div>
            <hr />
            <div className={styles.skillList}>{renderSkills("Tools")}</div>
        </section>
    );
};

export default Skills;
