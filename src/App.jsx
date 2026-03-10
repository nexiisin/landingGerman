import './styles/global.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
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

function SiteLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <Services />
      <Process />
      <About />
      <Talks />
      <CTA />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Services />
      <CTA />
    </>
  );
}

function ExperiencePage() {
  return (
    <>
      <About />
      <Stats />
      <CTA />
    </>
  );
}

function TalksPage() {
  return (
    <>
      <Talks />
      <CTA />
    </>
  );
}

function ContactPage() {
  return <CTA />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/experiencia" element={<ExperiencePage />} />
        <Route path="/charlas" element={<TalksPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
