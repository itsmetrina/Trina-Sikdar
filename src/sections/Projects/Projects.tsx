import styles from "./ProjectStyles.module.css";

import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";
import { PROJECTS } from "../../assets/constant";

const Projects = () => {
	return (
		<section id="projects" className={styles.container}>
			<motion.h2
				className="sectionTitle"
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
			>
				Projects
			</motion.h2>
			<div className={styles.projectsContainer}>
				{PROJECTS.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						link={project.link}
						image={project.image}
						description={project.description}
						technologies={project.technologies}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;