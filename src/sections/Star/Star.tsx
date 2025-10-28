import styles from "./StarStyles.module.css";

import starImg from "../../assets/hero-img.png";
import CV from "../../assets/cv.pdf";

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaMedium, FaGithub, FaLinkedin } from "react-icons/fa";
import { StarProps } from "../../common/interface";
import { SiHackerrank } from "react-icons/si";
import { STAR_CONTENT } from "../../assets/constant";

const leftFlowIn = (delay: number) => ({
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const topFlowIn = (delay: number) => ({
	hidden: { y: -100, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Star = ({ onButtonClick }: StarProps) => {
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
				<motion.p
					variants={leftFlowIn(0)}
					initial="hidden"
					animate="visible"
				>
					Hello, I'm
				</motion.p>
				<motion.h1
					variants={leftFlowIn(0.25)}
					initial="hidden"
					animate="visible"
				>
					Trina
					<br />
					Sikdar
				</motion.h1>
				<motion.h2
					variants={leftFlowIn(0.5)}
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
				<motion.p
					className={styles.description}
					variants={leftFlowIn(0.75)}
					initial="hidden"
					animate="visible"
				>
					{STAR_CONTENT}
				</motion.p>
				<motion.a
					href={CV}
					download="TrinaSikdar"
					variants={leftFlowIn(1)}
					initial="hidden"
					animate="visible"
					onClick={onButtonClick}
				>
					<motion.button className="hover" whileHover={{ scale: 1.2 }}>Resume</motion.button>
				</motion.a>
			</div>
			<div className={styles.connect}>
				<motion.hr
					className={styles.line}
					variants={topFlowIn(0)}
					initial="hidden"
					animate="visible"
				/>
				<motion.a
					href="https://github.com/itsmetrina/"
					target="_blank"
					variants={topFlowIn(0.25)}
					initial="hidden"
					animate="visible"
				>
					<FaGithub />
				</motion.a>
				<motion.a
					href="https://www.linkedin.com/in/trina-sikdar"
					target="_blank"
					variants={topFlowIn(0.5)}
					initial="hidden"
					animate="visible"
				>
					<FaLinkedin />
				</motion.a>
				<motion.a
					href="https://www.hackerrank.com/profile/trinasikdar"
					target="_blank"
					variants={topFlowIn(0.75)}
					initial="hidden"
					animate="visible"
				>
					<SiHackerrank />
				</motion.a>
				<motion.a
					href="https://medium.com/@trinasikdar"
					target="_blank"
					variants={topFlowIn(0.75)}
					initial="hidden"
					animate="visible"
				>
					<FaMedium />
				</motion.a>
			</div>
		</section>
	);
};

export default Star;
