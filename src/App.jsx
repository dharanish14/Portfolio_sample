import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark text-text-main font-rajdhani selection:bg-forge selection:text-dark">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 0%, var(--color-forge) 0%, transparent 50%), radial-gradient(circle at 100% 100%, var(--color-cold) 0%, transparent 50%)',
        filter: 'blur(100px)'
      }} />

      <Navbar />

      <main className="relative z-10 container mx-auto px-6 py-12 md:py-24 flex flex-col gap-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="relative z-10 text-center p-8 border-t border-cold/10 text-muted font-space text-xs tracking-widest mt-12">
        <div className="mb-2 uppercase">THIRUSELVAN L // MECHANICAL ENGINEER // 2026</div>
        <div>REBUILT WITH REACT & TAILWIND CSS</div>
      </footer>
    </div>
  );
}

export default App;
