import styles from "./StarStyles.module.css";

import starImg from "../../assets/hero-img.png";
import CV from "../../assets/cv.pdf";

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa";

const leftFlowIn = (delay: number) => ({
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Star = () => {
	return (
		<section id="star" className={styles.container}>
			<div className={styles.colorModeContainer}>
				<motion.img
					className={styles.star}
					src={starImg}
					alt="Profile picture of Trina Sikdar"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 1.2 }}
				/>
			</div>
			<div className={styles.info}>
				<motion.h1 variants={leftFlowIn(0)} initial="hidden" animate="visible">
					Trina
					<br />
					Sikdar
				</motion.h1>
				<motion.h2
					variants={leftFlowIn(0.25)}
					initial="hidden"
					animate="visible"
				>
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
					variants={leftFlowIn(0.5)}
					initial="hidden"
					animate="visible"
				>
					<a href="https://github.com" target="_blank">
						<FaGithub />
					</a>
					<a href="https://linkedIn.com" target="_blank">
						<FaLinkedin />
					</a>
					<a href="mailto:trinasikdar2000@gmail.com" target="_blank">
						<FaAt />
					</a>
				</motion.span>
				<motion.p
					className={styles.description}
					variants={leftFlowIn(0.75)}
					initial="hidden"
					animate="visible"
				>
					With a passion for developing modern React web apps for commercial
					businesses.
				</motion.p>
				<motion.a
					href={CV}
					download
					variants={leftFlowIn(1)}
					initial="hidden"
					animate="visible"
				>
					<button className="hover">
						Resume
					</button>
				</motion.a>
			</div>
		</section>
	);
};

export default Star;