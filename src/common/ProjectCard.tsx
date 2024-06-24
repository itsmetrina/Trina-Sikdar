import { motion } from "framer-motion";
import styles from "./../sections/Projects/ProjectStyles.module.css";
import { ProjectCardProps } from "./interface";

const ProjectCard = ({
	title,
	link,
	image,
	description,
	technologies,
}: ProjectCardProps) => {
	return (
		<div className={styles.projectCard}>
			<motion.img
				src={image}
				alt={`${title} logo`}
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1 }}
			/>
			<motion.div
				className={styles.projectDetails}
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 100 }}
				transition={{ duration: 1 }}
			>
				<a className="hover" href={link} target="_blank">
					<motion.h4 initial={{ opacity: 0, scale: 0.5 }}
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
						}}>{title}</motion.h4>
				</a>
				<p>{description}</p>
				<div className={styles.techStack}>
					{technologies.map((tech, idx) => (
						<span key={idx}>{tech}</span>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectCard;