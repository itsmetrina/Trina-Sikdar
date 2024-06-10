import './App.css'
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Star from './sections/Star/Star'

const App = () => {
	return (
		<>
			<Star />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}

export default App
