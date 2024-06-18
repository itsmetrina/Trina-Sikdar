import styles from '../sections/Experience/ExperienceStyles.module.css'
import dayjs from 'dayjs'

const ExperienceCard = ({ company,
	role,
	startDate,
	endDate,
	description }: {
		company: string,
		role: string,
		startDate: Date,
		endDate: Date | string,
		description: string
	}) => {
	return (
		<div className={styles.experienceCard}>
			<h3>{role}</h3>
			<p>{company}</p>
			<p>{dayjs(startDate).format("MMM,YYYY")} - {typeof (endDate) != 'string' ? dayjs(endDate).format("MMM,YYYY") : endDate}</p>
			<p>{description}</p>
		</div>
	)
}

export default ExperienceCard