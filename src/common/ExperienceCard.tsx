import { motion } from "framer-motion";
import styles from "./../sections/Experiences/ExperienceStyles.module.css";
import { ExperienceCardProps } from "./interface";
import TextAnimation from "../animation/TextAnimation";
// import IsLargeScreen from "./IsLargeScreen";

const ExperienceCard = ({
	year,
	role,
	company,
	description,
	technologies,
}: ExperienceCardProps) => {
	// const isLargeScreen = IsLargeScreen(800);
	return (
		<div className={styles.experienceCard}>
			<motion.div
				className={styles.yearBox}
			// whileInView={
			// 	isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
			// }
			// initial={
			// 	isLargeScreen ? { opacity: 0, x: -100 } : { opacity: 0, y: -100 }
			// }
			// transition={{ duration: 1 }}
			>
				<span>{year}</span>
			</motion.div>
			<motion.div
				className={styles.experienceDetails}
			// whileInView={
			// 	isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
			// }
			// initial={
			// 	isLargeScreen ? { opacity: 0, x: 100 } : { opacity: 0, y: 100 }
			// }
			// transition={{ duration: 1 }}
			>
				<motion.h4
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.3,
						ease: [0, 0.71, 0.2, 1.01],
						scale: {
							type: "spring",
							damping: 5,
							stiffness: 100,
							restDelta: 0.001
						}
					}}
				>
					{role}
				</motion.h4>
				<p>{company}</p>
				<TextAnimation text={description} />
				{/* <p>{description}</p> */}
				<div className={styles.techStack}>
					{technologies.map((tech, idx) => (
						<span key={idx}>{tech}</span>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default ExperienceCard;