import styles from './ProjectStyles.module.css';
import weather from '../../assets/cloud.gif';
import freshBurger from '../../assets/fresh-burger.png';
import portfolio from '../../assets/portfolio.gif';
import hipsster from '../../assets/hipsster.png';
import ProjectCard from '../../common/ProjectCard';

interface MyProjects {
	src: string;
	link: string;
	h3: string;
	p: string;
}

const Projects = () => {
	
	const projectList: MyProjects[] = [
		{ src: weather, link: "https://github.com/itsmetrina/weather-app", h3: "Weather", p: "Weather App" },
		{ src: freshBurger, link: "https://github.com/itsmetrina/Trina-Sikdar", h3: "Fresh Burger", p: "Restaurant Shop" },
		{ src: portfolio, link: "https://github.com/itsmetrina/Trina-Sikdar", h3: "Portfolio", p: "Portfolio App" },
		{ src: hipsster, link: "https://github.com/itsmetrina/Trina-Sikdar", h3: "Hipsster", p: "Glasses Shop" }
	];
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				{projectList.map(obj => (
					<ProjectCard
						key={obj.src}
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