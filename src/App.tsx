import './App.css'
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Star from './sections/Star/Star'

const App = () => {
	return (
		<>
			<Star />
			<Skills />
			<Experience />
			<Projects />
			<Footer />
		</>
	);
}

export default App
