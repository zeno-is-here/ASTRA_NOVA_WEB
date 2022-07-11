import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MidSection from "./components/MidSection";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import "./styles.css";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<MidSection />
			<About />
			<Team />
			<Faq />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
