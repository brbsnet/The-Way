
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Methodology from './components/Methodology';
import Schedule from './components/Schedule';
import Modules from './components/Modules';
import Tools from './components/Tools';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-400">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Benefits />
        <Methodology />
        <Schedule />
        <Modules />
        <Tools />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
