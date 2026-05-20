import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const exps = [
    {
      period: 'DEC 2025 — JAN 2026',
      co: 'Motherson Automotive',
      role: 'Intern · Manufacturing & Quality · Chennai',
      tags: ['Injection Moulding', 'Robotic Paint', 'QC']
    },
    {
      period: 'NOV 2024 — DEC 2024',
      co: 'Nexspan Technologies',
      role: 'Intern · Mechanical & Software Design · Chennai',
      tags: ['CAD Tools', 'Prototyping', 'Automation']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-space text-xs tracking-[0.45em] uppercase text-forge mb-6"
        >
          ◈ 002 · INDUSTRY EXPERIENCE
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-orbitron font-black text-4xl md:text-6xl mb-12 leading-tight"
        >
          Forged in<br/>the <span className="text-forge drop-shadow-[0_0_20px_rgba(255,85,0,0.4)]">Field</span>
        </motion.h2>

        <div className="flex flex-col gap-6">
          {exps.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative bg-dark/75 border border-forge/10 p-6 md:p-8 hover:border-forge/30 transition-colors"
              style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-forge to-transparent" />
              <div className="font-space text-[0.65rem] tracking-[0.2em] text-forge mb-2">{exp.period}</div>
              <h3 className="font-orbitron font-bold text-xl mb-1 text-text-main">{exp.co}</h3>
              <div className="text-xs tracking-[0.18em] uppercase text-cold mb-4 font-rajdhani">{exp.role}</div>
              <div className="flex flex-wrap gap-3">
                {exp.tags.map(tag => (
                  <span key={tag} className="font-space text-[0.6rem] tracking-[0.12em] px-3 py-1 bg-white/5 border border-white/10 text-text-main" style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
