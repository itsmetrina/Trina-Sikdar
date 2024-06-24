import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import { TextAnimationProps } from '../common/interface';
import styles from './../sections/Experiences/ExperienceStyles.module.css';

const TextAnimation = ({ text }: TextAnimationProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            {text.split('').map((char: string, index: number) => (
                <motion.span
                    className={styles.textSpan}
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: index * 0.1, ease: 'linear' }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    )
}

export default TextAnimation