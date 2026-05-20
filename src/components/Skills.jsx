import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCats = [
    {
      title: '◈ Design & CAD',
      skills: [
        { name: 'SolidWorks', pct: 85 },
        { name: 'Creo (PTC)', pct: 80 },
        { name: 'GD&T', pct: 75 },
      ]
    },
    {
      title: '◈ Manufacturing',
      skills: [
        { name: 'Thermodynamics', pct: 80 },
        { name: 'Heat Transfer', pct: 78 },
        { name: 'Quality Control', pct: 72 },
      ]
    },
    {
      title: '◈ Soft Skills',
      skills: [
        { name: 'MS Office', pct: 90 },
        { name: 'Leadership', pct: 85 },
        { name: 'Analytical', pct: 82 },
      ]
    }
  ];

  const certs = [
    { name: 'SolidWorks', org: 'INFOSYS' },
    { name: 'CADD Creo', org: 'CADD TECH' },
    { name: 'MS Excel', org: 'COURSERA' },
    { name: 'AI Fundamentals', org: 'IBM' },
    { name: 'C Programming', org: 'HCL GUVI' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-space text-xs tracking-[0.45em] uppercase text-emerald mb-6 text-center md:text-left"
        >
          ◈ 004 · SKILLS & CREDENTIALS
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-orbitron font-black text-4xl md:text-6xl mb-12 leading-tight text-center md:text-left"
        >
          The Engineer's<br/><span className="text-emerald drop-shadow-[0_0_20px_rgba(0,255,136,0.4)]">Arsenal</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCats.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-cold/5 border border-cold/10 p-6 md:p-8"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            >
              <h3 className="font-orbitron font-bold text-xs tracking-[0.25em] text-forge mb-6 pb-3 border-b border-forge/15 uppercase">
                {cat.title}
              </h3>
              
              <div className="flex flex-col gap-5">
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between font-rajdhani font-semibold text-[0.85rem] mb-2 text-text-main">
                      <span>{skill.name}</span>
                      <span className="font-space text-[0.65rem] text-muted">{skill.pct}%</span>
                    </div>
                    <div className="h-1 bg-white/5 w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: `${skill.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 + (i*0.1) }}
                        className="h-full bg-gradient-to-r from-forge to-molten"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, borderColor: 'rgba(255,85,0,0.4)' }}
              className="flex-1 min-w-[140px] bg-dark/80 border border-cold/10 p-5 text-center transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-forge/40 mx-auto mb-3 flex items-center justify-center text-forge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="font-rajdhani font-bold text-sm tracking-wide text-text-main mb-1">{cert.name}</div>
              <div className="font-space text-[0.55rem] tracking-wider text-muted uppercase">{cert.org}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
