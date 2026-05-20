import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-space text-xs tracking-[0.45em] uppercase text-cold mb-6"
        >
          ◈ 001 · ABOUT
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-orbitron font-black text-4xl md:text-6xl mb-8 leading-tight"
        >
          Built to Build.<br/>Driven to <span className="text-cold">Design.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-rajdhani font-light text-lg md:text-xl leading-relaxed text-steel mb-12 max-w-2xl"
        >
          A highly motivated mechanical engineering undergraduate forged through two industry internships — from automotive injection moulding lines to software-integrated mechanical prototyping. I bridge traditional engineering with the intelligence of modern data systems. My minor in Data Science positions me at the frontier of smart manufacturing.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { n: '2', l: 'Internships' },
            { n: '2', l: 'Core Projects' },
            { n: '5', l: 'Certifications' },
            { n: '4+', l: 'CAD Tools' }
          ].map((stat, i) => (
            <div key={i} className="border-l-2 border-cold pl-4">
              <div className="font-orbitron font-black text-3xl md:text-4xl text-cold mb-1">{stat.n}</div>
              <div className="font-space text-[0.65rem] tracking-[0.2em] uppercase text-muted">{stat.l}</div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="inline-block border border-cold/30 text-cold px-6 py-3 font-space text-[0.65rem] tracking-[0.2em] uppercase"
        >
          CGPA: 7.73 // B.E. MECHANICAL (MINOR: DS)
        </motion.div>
      </div>
    </section>
  );
};

export default About;
