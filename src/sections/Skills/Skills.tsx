import styles from './SkillStyles.module.css';
import checkMarkLight from '../../assets/checkmark-light.svg';
import checkMarkDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

interface SkillSet {
    [category: string]: string[];
}

const Skills = () => {
    const { theme } = useTheme() as { theme: string };

    const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

    const skills: SkillSet = {
        Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Angular Material', 'Leaflet.js'],
        Backend: ['Python', 'PostgreSQL'],
        Tools: ['Git']
    };

    const renderSkills = (category: string) => {
        return skills[category].map(skill => (
            <SkillList key={skill} src={checkMarkIcon} skill={skill} />
        ));
    };

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                {renderSkills('Frontend')}
            </div>
            <hr />
            <div className={styles.skillList}>
                {renderSkills('Backend')}
            </div>
            <hr />
            <div className={styles.skillList}>
                {renderSkills('Tools')}
            </div>
        </section>
    )
}

export default Skills