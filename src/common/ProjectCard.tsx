import { motion } from "framer-motion";
import styles from "./../sections/Projects/ProjectStyles.module.css";
import { ProjectCardProps } from "./interface";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({
	title,
	link,
	image,
	description,
	technologies,
}: ProjectCardProps) => {
	const isLargeScreen = useMediaQuery({ minWidth: 800 });
	return (
		<div className={styles.projectCard}>
			<motion.img
				src={image}
				alt={`${title} logo`}
				whileInView={
					isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
				}
				initial={
					isLargeScreen ? { opacity: 0, x: -100 } : { opacity: 0, y: -100 }
				}
				transition={{ duration: 1 }}
			/>
			<motion.div
				className={styles.projectDetails}
				whileInView={
					isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
				}
				initial={
					isLargeScreen ? { opacity: 0, x: 100 } : { opacity: 0, y: 100 }
				}
				transition={{ duration: 1 }}
			>
				<a href={link} target="_blank">
					<h4 className="hover">{title}</h4>
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