import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 relative">
      <div className="flex-1 text-center md:text-left z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-space text-[0.65rem] tracking-[0.45em] uppercase text-cold mb-4"
        >
          ◈ Mechanical Engineer · Velammal · 2022–2026
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-4 text-text-main"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge to-molten drop-shadow-[0_0_30px_rgba(255,85,0,0.3)]">THIRUSELVAN</span><br/>
          <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,85,0,0.8)'}}>L</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-rajdhani font-medium text-lg md:text-xl tracking-[0.4em] uppercase text-steel my-8"
        >
          Design &nbsp;·&nbsp; Manufacturing &nbsp;·&nbsp; Automation
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forge text-dark font-orbitron font-bold text-xs tracking-[0.3em] uppercase transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_var(--color-forge)]" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
            Explore Work ▸
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-cold/40 text-cold font-orbitron font-bold text-xs tracking-[0.3em] uppercase transition-all hover:bg-cold/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,207,255,0.3)]" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="w-full max-w-[280px] md:max-w-[320px] relative z-10"
      >
        <div className="relative p-4 border border-cold/20 bg-gradient-to-b from-dark/80 to-dark/30 shadow-[0_0_50px_rgba(0,207,255,0.08)]" style={{ clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-forge/20 to-cold/10 pointer-events-none opacity-30" />
          <img src="/WhatsApp Image 2026-05-20 at 2.30.42 PM.jpeg" alt="Thiruselvan Portrait" className="w-full aspect-[3/4] object-cover saturate-105 contrast-105 filter" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }} />
          <div className="mt-4 flex justify-between items-center font-space text-[0.55rem] tracking-[0.2em] text-steel uppercase">
            <span>Profile</span>
            <span className="text-forge">Thiruselvan L</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
