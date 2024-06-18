import { motion, useAnimation } from "framer-motion";
import styles from "../sections/Experience/ExperienceStyles.module.css";
import dayjs from "dayjs";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const cardVariant = {
	visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
	hidden: { opacity: 0, scale: 0, x: 200 },
};

const ExperienceCard = ({
	company,
	role,
	startDate,
	endDate,
	description,
}: {
	company: string;
	role: string;
	startDate: Date;
	endDate: Date | string;
	description: string;
}) => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	return (
		<motion.div
			className={styles.experienceCard}
			ref={ref}
			variants={cardVariant}
			initial="hidden"
			animate={control}
		>
			<h3>{role}</h3>
			<p>{company}</p>
			<p>
				{dayjs(startDate).format("MMM,YYYY")} -{" "}
				{typeof endDate != "string"
					? dayjs(endDate).format("MMM,YYYY")
					: endDate}
			</p>
			<p>{description}</p>
		</motion.div>
	);
};

export default ExperienceCard;
