import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Entrance', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-cold/10 bg-dark/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#hero" className="font-orbitron font-black text-lg tracking-[0.4em] text-forge drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">
          TL // MECH
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="font-space text-xs tracking-widest uppercase text-muted hover:text-cold transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-forge p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-xl border-b border-cold/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="font-space text-sm tracking-[0.3em] uppercase text-text-main hover:text-cold transition-colors border-l-2 border-transparent hover:border-cold pl-4"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
