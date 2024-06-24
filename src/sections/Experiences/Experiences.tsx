import { motion } from "framer-motion";
import styles from "./ExperienceStyles.module.css";
import { EXPERIENCES } from "../../assets/constant";
import ExperienceCard from "../../common/ExperienceCard";

const Experiences = () => {
	return (
		<section id="experiences" className={styles.container}>
			<motion.h2
				className="sectionTitle"
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
			>
				Experiences
			</motion.h2>
			<motion.div
				className={styles.experiencesContainer}
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 100 }}
				transition={{ duration: 1.75 }}
			>
				{EXPERIENCES.map((exp, idx) => (
					<ExperienceCard
						key={idx}
						year={exp.year}
						role={exp.role}
						company={exp.company}
						description={exp.description}
						technologies={exp.technologies}
					/>
				))}
			</motion.div>
		</section>
	);
};

export default Experiences;