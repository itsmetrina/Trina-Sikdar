import styles from "./SkillStyles.module.css";
import SkillList from "../../common/SkillList";

import { Skill } from "../../common/interface";

import { FaAngular, FaCss3, FaGitAlt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { SiJavascript, SiLeaflet, SiPostgresql, SiTypescript } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
    const skills: Skill[] = [
        { name: "HTML", iconLink: FaHtml5, color: "#E44D26" },
        { name: "CSS", iconLink: FaCss3, color: "#006fab" },
        { name: "JavaScript", iconLink: SiJavascript, color: "#f7df1e" },
        { name: "TypeScript", iconLink: SiTypescript, color: "#0f5da1" },
        { name: "Python", iconLink: FaPython, color: "#006fab" },
        { name: "Angular", iconLink: FaAngular, color: "#006fab" },
        { name: "React", iconLink: FaReact, color: "#006fab" },
        { name: "Angular Material", iconLink: FaAngular, color: "#006fab" },
        { name: "Leaflet.js", iconLink: SiLeaflet, color: "#006fab" },
        { name: "PostgreSQL", iconLink: SiPostgresql, color: "#006fab" },
        { name: "Git", iconLink: FaGitAlt, color: "#006fab" },
        { name: "VS Code", iconLink: VscCode, color: "#006fab" }

    ];

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                {skills.map((obj, index) => (
                    <SkillList
                        key={index}
                        icon={obj.iconLink}
                        skill={obj.name}
                        color={obj.color}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
