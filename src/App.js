import About from './components/About';
import Faq from './components/Faq';
import Hero from './components/Hero';
import MidSection from './components/MidSection';
import Navbar from './components/Navbar';
import Example from './components/Team';
import './styles.css';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MidSection />
      <About />
      <Example />
      <Faq />
    </>
  );
}

export default App;
