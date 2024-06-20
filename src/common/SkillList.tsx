import { Variants, motion } from "framer-motion";
import { SkillListProps } from "./interface";

const skillVariants = (y: number, duration: number):Variants => ({
    initialState: { y: y, scale: 1 },
    animateState: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
    hoverState: {
        scale: 1.5,
        borderColor: "var(--yellow)",
        transition: {
            duration: 0.1
        }
    }
});

const SkillList = ({ icon: Icon, duration, y }: SkillListProps) => {
    return (
        <>
            <motion.span variants={skillVariants(y, duration)} initial="initialState" animate="animateState" whileHover="hoverState">
                <Icon className="icon"  />
            </motion.span>
        </>
    );
};

export default SkillList;