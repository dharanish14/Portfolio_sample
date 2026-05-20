import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      num: '01',
      title: 'Biochar-Infused PCM for Solar Absorber Cooling',
      desc: 'Designed a biochar-infused Phase Change Material system for solar absorber thermal management — improving heat regulation through eco-friendly engineering.',
      achieve: '◈ 20%+ REDUCTION IN TEMPERATURE FLUCTUATIONS',
      tags: ['Thermal', 'PCM', 'Sustainable']
    },
    {
      num: '02',
      title: 'Smart Helmet — Accident Analysis & Alcohol Detection',
      desc: 'IoT-based Smart Helmet integrating ESP32, GPS, and MQ-3 sensors for real-time location tracking, alcohol detection, and automated accident alerts.',
      achieve: '◈ REAL-TIME AUTOMATED ALERT SYSTEM DEPLOYED',
      tags: ['ESP32', 'GPS', 'IoT']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-space text-xs tracking-[0.45em] uppercase text-plasma mb-6 text-center md:text-left"
        >
          ◈ 003 · ACADEMIC PROJECTS
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-orbitron font-black text-4xl md:text-6xl mb-12 leading-tight text-center md:text-left"
        >
          Engineering<br/>in <span className="text-plasma drop-shadow-[0_0_20px_rgba(123,97,255,0.4)]">Action</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative bg-dark/75 border border-plasma/10 p-6 md:p-8 overflow-hidden transition-all hover:-translate-y-2 hover:border-plasma/30"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-forge to-cold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              
              <div className="absolute top-2 right-4 font-orbitron font-black text-6xl text-forge/5 leading-none pointer-events-none">
                {proj.num}
              </div>

              <h3 className="font-orbitron font-bold text-lg mb-3 leading-snug pr-12 relative z-10 text-text-main">{proj.title}</h3>
              <p className="text-sm text-muted leading-relaxed font-rajdhani mb-5 relative z-10">{proj.desc}</p>
              
              <div className="bg-forge/5 border-l-2 border-forge py-2 px-4 mb-5 font-space text-[0.6rem] tracking-[0.06em] text-molten relative z-10">
                {proj.achieve}
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {proj.tags.map(tag => (
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

export default Projects;
