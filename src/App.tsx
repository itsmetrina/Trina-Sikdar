import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import Footer from "./sections/Footer/Footer";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Star from "./sections/Star/Star";
import { useState } from "react";
import MotionConfetti from "./common/MotionConfetti";

const App = () => {
	const [showConfetti, setShowConfetti] = useState(false);

	const handleShowConfetti = () => {
		setShowConfetti(true);
		setTimeout(() => {
			setShowConfetti(false);
		}, 5000); // 5 seconds
	};

	return (
		<>
			<AnimatedCursor
				color="255,255,255"
			/>
			<MotionConfetti show={showConfetti} />
			<>
				<Star onButtonClick={handleShowConfetti} />
				<Skills />
				<Projects />
				<Footer />
			</>
		</>
	);
};

export default App;