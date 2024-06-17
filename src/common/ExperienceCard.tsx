import styles from '../sections/Experience/ExperienceStyles.module.css'

const ExperienceCard = ({ company,
	role,
	startDate,
	endDate,
	description }: {
		company: string,
		role: string,
		startDate: string,
		endDate?: string,
		description: string
	}) => {
	return (
		<div className={styles.experienceCard}>
            <h3>{company}</h3>
            <p>{role}</p>
            <p>{startDate}</p>
            <p>{endDate || 'Present'}</p>
            <p>{description}</p>
        </div>
	)
}

export default ExperienceCard