import styles from "./StarStyles.module.css";

import starImg from "../../assets/trina.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import gmailLight from "../../assets/gmail-light.png";
import gmailDark from "../../assets/gmail-dark.png";
import CV from "../../assets/cv.pdf";

import { useTheme } from "../../common/ThemeContext";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const leftFlowIn = (delay: number) => ({
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Star = () => {
	const { theme, toggleTheme } = useTheme() as unknown as {
		theme: string;
		toggleTheme: () => void;
	};

	const themeIcon = theme === "light" ? sun : moon;
	const githubIcon = theme === "light" ? githubLight : githubDark;
	const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
	const gmailIcon = theme === "light" ? gmailLight : gmailDark;

	return (
		<section id="star" className={styles.container}>
			<div className={styles.colorModeContainer}>
				<img
					className={styles.star}
					src={starImg}
					alt="Profile picture of Trina Sikdar"
				/>
				<img
					className={styles.colorMode}
					src={themeIcon}
					alt="Color mode icon"
					onClick={toggleTheme}
				/>
			</div>
			<div className={styles.info}>
				<motion.h1 variants={leftFlowIn(0)} initial="hidden" animate="visible">
					Trina
					<br />
					Sikdar
				</motion.h1>
				<motion.h2 variants={leftFlowIn(0)} initial="hidden" animate="visible">
					{" "}
					<ReactTyped
						strings={[
							"Frontend Developer",
							"UI Developer",
							"Angular Developer",
						]}
						typeSpeed={100}
						loop
						backSpeed={20}
						cursorChar="|"
						showCursor={true}
					/>
				</motion.h2>
				<motion.span
					variants={leftFlowIn(0)}
					initial="hidden"
					animate="visible"
				>
					<a href="https://github.com" target="_blank">
						<img src={githubIcon} alt="Github Icon" />
					</a>
					<a href="https://linkedIn.com" target="_blank">
						<img src={linkedinIcon} alt="LinkedIn Icon" />
					</a>
					<a href="mailto:trinasikdar2000@gmail.com" target="_blank">
						<img src={gmailIcon} alt="Gmail Icon" />
					</a>
				</motion.span>
				<motion.p
					className={styles.description}
					variants={leftFlowIn(0)}
					initial="hidden"
					animate="visible"
				>
					With a passion for developing modern React web apps for commercial
					businesses.
				</motion.p>
				<motion.a
					href={CV}
					download
					variants={leftFlowIn(0)}
					initial="hidden"
					animate="visible"
				>
					<button className="hover">Resume</button>
				</motion.a>
			</div>
		</section>
	);
};

export default Star;