import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Talks from './components/Talks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <Services />
        <Process />
        <About />
        <Talks />
        <CTA />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
