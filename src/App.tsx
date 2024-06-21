import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import Footer from "./sections/Footer/Footer";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Star from "./sections/Star/Star";

const App = () => {
	return (
		<>
			<AnimatedCursor
				color="255,255,255"
			/>
			<>
				<Star />
				<Skills />
				<Projects />
				<Footer />
			</>
		</>
	);
};

export default App;