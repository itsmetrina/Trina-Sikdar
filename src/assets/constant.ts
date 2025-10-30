import weather from "../assets/cloud.png";
import portfolio from "../assets/girl.png";
import minispotify from "../assets/music.png";

export const STAR_CONTENT = "Frontend Engineer with 4+ years of experience building scalable, high-performance web applications using Angular, React, TypeScript, and Node.js. Strong in state management (Zustand/Redux), UI architecture, API integration, and performance optimization. Known for delivering impactful solutions, leading UI releases, and mentoring developers.";

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
		role: "Frontend Developer",
		company: "Wipro",
		description: "Leading frontend development for a large-scale Smart City IoT platform accessed by 5,000+ daily users. Architected modular UI components using Angular, React, TypeScript, Tailwind and Zustand. Improved performance by 25% via lazy loading, API caching and RxJS optimizations. Developed Python microservices for data processing and PostgreSQL automation. Acted as UI Lead, driving releases and mentoring junior developers. Delivered high-impact POCs including a React SPA that influenced a major client win.",
		technologies: [
			"Angular",
			"React",
			"TypeScript",
			"RxJS",
			"TailwindCSS",
			"Zustand",
			"Python",
			"Node.js",
			"PostgreSQL",
			"REST APIs",
			"Azure"
		],
	}
];

export const PROJECTS = [
	{
		title: "MiniSpotify 🎧",
		link: "https://github.com/itsmetrina/minispotify",
		image: minispotify,
		description:
			"Engineered a Spotify-powered music dashboard with secure OAuth 2.0 + PKCE authentication, real-time playlist browsing, and media insights. Designed performant global state using Zustand and crafted an elegant Tailwind UI optimized for responsiveness.",
		technologies: ["React", "TypeScript", "Zustand", "TailwindCSS", "daisyUI", "Spotify Web API", "Vite"],
	},
	{
		title: "Weather App",
		link: "https://github.com/itsmetrina/weather-app",
		image: weather,
		description:
			"Built a weather intelligence dashboard integrating OpenWeather APIs to deliver real-time updates and 5-day forecasts. Designed an intuitive and responsive UI with seamless search and location-based detection.",
		technologies: ["React", "JavaScript", "CSS", "OpenWeather API"],
	},
	{
		title: "Portfolio Website",
		link: "https://github.com/itsmetrina/Trina-Sikdar",
		image: portfolio,
		description:
			"Developed a modern personal portfolio to showcase projects and experience. Built with motion-rich UI animations, responsive layouts, and component-driven architecture using Vite and Framer Motion.",
		technologies: ["React", "TypeScript", "Vite", "Framer Motion", "TailwindCSS"],
	}
];

export const CONTACT = {
	address: "West Bengal, IN",
	phoneNo: "+91 78648 22328 ",
	email: "trinasikdar2000@gmail.com",
};
