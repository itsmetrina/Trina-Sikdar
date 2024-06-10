import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import fitlift from '../../assets/fitlift.png';
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
		{ src: viberr, link: "https://github.com/itsmetrina/Trina-Sikdar", h3: "Viberr", p: "Streaming App" },
		{ src: freshBurger, link: "https://github.com/itsmetrina/Trina-Sikdar", h3: "Fresh Burger", p: "Restaurant Shop" },
		{ src: fitlift, link: "https://github.com/itsmetrina/Trina-Sikdar", h3: "Fitlift", p: "Fitness App" },
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