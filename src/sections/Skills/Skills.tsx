import styles from "./SkillStyles.module.css";
import SkillList from "../../common/SkillList";

import { Skill } from "../../common/interface";

import {
    FaAngular,
    FaCss3,
    FaGitAlt,
    FaHtml5,
    FaPython,
    FaReact,
} from "react-icons/fa";
import {
    SiJavascript,
    SiLeaflet,
    SiPostgresql,
    SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { motion } from "framer-motion";

const Skills = () => {
    const skills: Skill[] = [
        { name: "HTML", iconLink: FaHtml5, duration: 2, y: 0 },
        { name: "CSS", iconLink: FaCss3, duration: 2.5, y: -10 },
        { name: "JavaScript", iconLink: SiJavascript, duration: 2, y: 0 },
        { name: "TypeScript", iconLink: SiTypescript, duration: 2.5, y: -10 },
        { name: "Python", iconLink: FaPython, duration: 2, y: 0 },
        { name: "Angular", iconLink: FaAngular, duration: 2.5, y: -10 },
        { name: "React", iconLink: FaReact, duration: 2, y: 0 },
        { name: "Leaflet.js", iconLink: SiLeaflet, duration: 2, y: 0 },
        { name: "PostgreSQL", iconLink: SiPostgresql, duration: 2.5, y: -10 },
        { name: "Git", iconLink: FaGitAlt, duration: 2, y: 0 },
        { name: "VS Code", iconLink: VscCode, duration: 2.5, y: -10 },
    ];

    return (
        <section id="skills" className={styles.container}>
            <motion.h2
                className="sectionTitle"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5 }}
            >
                Skills
            </motion.h2>
            <motion.div
                className={styles.skillList}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
            >
                {skills.map((obj, index) => (
                    <SkillList
                        key={index}
                        icon={obj.iconLink}
                        duration={obj.duration}
                        y={obj.y}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;