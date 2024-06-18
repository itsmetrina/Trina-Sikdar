import styles from './ProjectStyles.module.css';
import weather from '../../assets/cloud.png';
import portfolio from '../../assets/girl.png';
import ProjectCard from '../../common/ProjectCard';
import { MyProjects } from '../../common/interface';

const Projects = () => {
	const projectList: MyProjects[] = [
		{ src: weather, link: "https://github.com/itsmetrina/weather-app", h3: "Weather", p: "A Weather Forecast App" },
		{ src: portfolio, link: "https://github.com/itsmetrina/Trina-Sikdar", h3: "Portfolio", p: "Portfolio App" }
	];
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				{projectList.map((obj, index) => (
					<ProjectCard
						key={index}
						src={obj.src}
						link={obj.link}
						h3={obj.h3}
						p={obj.p} 
					/>
				))}
			</div>
		</section>
	)
}

export default Projects;