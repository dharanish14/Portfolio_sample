import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    
    window.location.href = `mailto:thiruselvan2506@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Opening your mail app...');
  };

  const links = [
    { icon: <Phone size={18} />, text: '+91 70100 51020', href: 'tel:+917010051020' },
    { icon: <Mail size={18} />, text: 'thiruselvan2506@gmail.com', href: 'mailto:thiruselvan2506@gmail.com' },
    { icon: <MessageSquare size={18} />, text: 'WhatsApp Chat', href: 'https://wa.me/917010051020?text=Hello%20THIRUSELVAN%20L%2C%20I%20visited%20your%20portfolio.' },
    { icon: <ExternalLink size={18} />, text: 'LinkedIn Profile ↗', href: 'https://linkedin.com' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-space text-xs tracking-[0.45em] uppercase text-forge mb-6"
          >
            ◈ 006 · CONTACT
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-orbitron font-black text-4xl md:text-6xl mb-8 leading-tight"
          >
            Let's Build<br/>Something<br/><span className="text-forge drop-shadow-[0_0_20px_rgba(255,85,0,0.4)]">Real.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-rajdhani font-light text-lg text-steel mb-12 max-w-md"
          >
            Open to core mechanical engineering roles, design internships, and collaborative R&D in manufacturing and automation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {links.map((link, i) => (
              <a 
                key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-cold/10 text-steel hover:text-forge hover:border-forge/40 hover:bg-forge/5 transition-all font-space text-[0.7rem] tracking-widest uppercase"
              >
                <span className="text-forge">{link.icon}</span>
                {link.text}
              </a>
            ))}
            <div className="flex items-center gap-4 p-4 border border-transparent text-muted font-space text-[0.7rem] tracking-widest uppercase">
              <span className="text-muted"><MapPin size={18} /></span>
              Kallakurichi, Tamil Nadu, India
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input 
              required type="text" name="name" placeholder="Your name"
              className="w-full bg-dark/70 border border-cold/20 text-text-main p-4 font-rajdhani text-lg focus:outline-none focus:border-cold/60 focus:ring-1 focus:ring-cold/20 transition-all"
            />
            <input 
              required type="email" name="email" placeholder="Your email"
              className="w-full bg-dark/70 border border-cold/20 text-text-main p-4 font-rajdhani text-lg focus:outline-none focus:border-cold/60 focus:ring-1 focus:ring-cold/20 transition-all"
            />
            <textarea 
              required name="message" placeholder="Write your message" rows={5}
              className="w-full bg-dark/70 border border-cold/20 text-text-main p-4 font-rajdhani text-lg focus:outline-none focus:border-cold/60 focus:ring-1 focus:ring-cold/20 transition-all resize-y min-h-[140px]"
            />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <button 
                type="submit" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forge text-dark font-orbitron font-bold text-xs tracking-[0.3em] uppercase transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_var(--color-forge)]" 
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
              >
                Send Email ▸
              </button>
              <span className="font-space text-[0.6rem] tracking-widest text-muted uppercase">
                Sends to thiruselvan2506@gmail.com
              </span>
            </div>
            {status && <div className="text-emerald font-space text-[0.65rem] tracking-widest mt-2">{status}</div>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
