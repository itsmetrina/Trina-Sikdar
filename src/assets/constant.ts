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
