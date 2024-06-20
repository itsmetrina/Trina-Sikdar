import { useState, useEffect } from 'react';
import './App.css'
import Loader from './common/loader';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Star from './sections/Star/Star'

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false); 
		}, 1000);  // 1,000 milliseconds = 10 sec

		return () => clearTimeout(timer);
	}, []);
	
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<Star />
					<Skills />
					<Projects />
					<Footer />
				</>
			)}
		</>
	);
}

export default App