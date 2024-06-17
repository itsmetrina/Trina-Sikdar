import ExperienceCard from '../../common/ExperienceCard';
import { MyExperience } from '../../common/interface';
import styles from './ExperienceStyles.module.css'

const Experience = () => {
	const experienceList: MyExperience[] = [
		{ company: "Wipro", role: "Developer", startDate: '2024-07-19', endDate: "current", description: "Developed web applications using React and Node.js" },
	];

	return (
		<section id="experiences" className={styles.container}>
			<h1 className="sectionTitle">Experience</h1>
			<div className={styles.experiencesContainer}>
				{experienceList.map((obj, index) => (
					<ExperienceCard key={index} company={obj.company} role={obj.role} startDate={obj.startDate} endDate={obj.endDate} description={obj.description} />
				))}
			</div>
		</section>
	)
}

export default Experience