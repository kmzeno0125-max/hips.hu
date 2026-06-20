import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Events from './components/Events';
import FAQ from './components/FAQ';
import BookPromo from './components/BookPromo';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Events />
      <FAQ />
      <BookPromo />
      <Footer />
    </>
  );
}
