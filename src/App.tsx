import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import { MutatingDots } from "react-loader-spinner";
import Footer from "./sections/Footer/Footer";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Star from "./sections/Star/Star";
import { useEffect, useState } from "react";
import MotionConfetti from "./common/MotionConfetti";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
	const [showConfetti, setShowConfetti] = useState(false);
	const [load, updateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			updateLoad(false);
		}, 1500); // 1 second

		return () => clearTimeout(timer);
	}, []);

	const handleShowConfetti = () => {
		setShowConfetti(true);
		setTimeout(() => {
			setShowConfetti(false);
		}, 5000); // 5 seconds
	};

	return (
		<AnimatePresence>
			{load ? (
				<motion.div
					initial={{ opacity: 1, y: 0 }}
					animate={{ opacity: 0, y: -100 }}
					transition={{ duration: 1.5 }}
					key="loading"
				>
					<MutatingDots
						visible={true}
						height="100"
						width="100"
						color="#fff"
						secondaryColor="#fff"
						radius="12.5"
						ariaLabel="mutating-dots-loading"
						wrapperStyle={{
							justifyContent: "center",
							alignItems: "center",
							height: "calc(100dvh - 5rem)"
						}}
						wrapperClass=""
					/>
				</motion.div>
			) : (
				<>
					<AnimatedCursor color="255,255,255" />
					<MotionConfetti show={showConfetti} />
					<>
						<Star onButtonClick={handleShowConfetti} />
						<Skills />
						<Projects />
						<Footer />
					</>
				</>
			)}
		</AnimatePresence>
	);
};

export default App;