import weather from "../assets/cloud.png";
import portfolio from "../assets/girl.png";
import minispotify from "../assets/music.png";

export const STAR_CONTENT = "Frontend Engineer with expertise in Angular development, recognized for driving impactful solutions and delivering superior user experiences. Proficient in React and Python.";

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
	},
	{
		title: "MiniSpotify 🎧",
		link: "https://github.com/yourusername/minispotify",
		image: minispotify,
		description: "Built a Spotify-powered music dashboard using React and TypeScript. Features include OAuth login, top tracks/artists/playlists display, persistent state with Zustand, and polished Tailwind UI. Focused on clean architecture and real-time music insights.",
		technologies: ["React", "TypeScript", "TailwindCSS", "daisyui", "Zustand", "Spotify API", "Vite"],
	}

];

export const CONTACT = {
	address: "West Bengal, IN",
	phoneNo: "+91 78648 22328 ",
	email: "trinasikdar2000@gmail.com",
};