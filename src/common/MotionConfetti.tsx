import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "react-use";
import { ConfettiProps } from "./interface";
import Confetti from "react-confetti";

const MotionConfetti = ({ show }: ConfettiProps) => {
    const { width, height } = useWindowSize();
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ position: 'fixed', top: 0, left: 0, width: '100dvw', height: '100dvh' }}
                >
                    <Confetti width={width} height={height} />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MotionConfetti