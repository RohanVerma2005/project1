import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './components/About.jsx';
import Art from './components/Art.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';
import ReservationForm from './components/ReservationForm.jsx';
import ReservationSuccess from './components/ReservationSuccess.jsx';
import DrinkBuilder from './components/DrinkBuilder.jsx';


gsap.registerPlugin(ScrollTrigger, SplitText);

// Home layout with all sections
const Home = () => (
	<>
		<Navbar />
		<Hero />
		<Cocktails />
		<About />
		<Art />
		<Menu />
		<Contact />
		<ReservationForm />
		<DrinkBuilder />
	</>
);

// Generic layout with Navbar and page content
const PageLayout = ({ children }) => (
	<>
		<Navbar />
		{children}
	</>
);

const App = () => {
	return (
		<Router>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/reservation-success"
						element={
							<PageLayout>
								<ReservationSuccess />
							</PageLayout>
						}
					/>
					<Route
						path="/drink-builder"
						element={
							<PageLayout>
								<DrinkBuilder />
							</PageLayout>
						}
					/>
				</Routes>
			</main>
		</Router>
	);
};

export default App;
