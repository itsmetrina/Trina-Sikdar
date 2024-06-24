import weather from "../assets/cloud.png";
import portfolio from "../assets/girl.png";

export const HERO_CONTENT = "I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.";

export const ABOUT_TEXT = "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.";

export const EDUCATION = [
	{
		year: "2018 - 2021",
		clg: "Swami Vivekananda Institute of Modern Studies",
		grd: "Bachelor Of Computer Applications (BCA)",
	}
];

export const EXPERIENCES = [
	{
		year: "2021 - Present",
		role: "Developer",
		company: "Wipro",
		description: "Directed Angular development efforts for a sophisticated SMART CITY application, demonstrating mastery in Angular (10+), Angular Material, and integration of Leaflet Maps and diverse chart libraries. Led UI development to ensure alignment with project requirements and timelines. Engineered reusable components to boost performance, while collaborating closely with backend teams to seamlessly integrate microservices and Webmethods API. Additionally, proficiently developed Python scripts for efficient API calls, JSON parsing, and data analysis using Pandas, alongside optimizing PostgreSQL queries for enhanced database functionality.",
		technologies: ["HTML", "SCSS", "JavaScript", "TypeScript", "Angular", "LeafletJs", "PostgresSQL", "Python"],
	}
];

export const PROJECTS = [
	{
		title: "Weather App",
		link: "https://github.com/itsmetrina/weather-app",
		image: weather,
		description: "Developed a React-based Weather App integrating OpenWeatherMap APIs for real-time weather updates and 5 days forecasts. Features include intuitive UI, responsive design, and location-based weather detection.",
		technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
	},
	{
		title: "Portfolio Website",
		link: "https://github.com/itsmetrina/Trina-Sikdar",
		image: portfolio,
		description: "A personal portfolio website showcasing projects, skills, and contact information.",
		technologies: ["HTML", "CSS", "TypeScript", "React", "Vite", "Framer Motion"],
	}
];

export const CONTACT = {
	address: "West Bengal, IN",
	phoneNo: "+91 78648 22328 ",
	email: "trinasikdar2000@gmail.com",
};