import { motion } from 'framer-motion';
import { Shield, Terminal, Briefcase, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/30 shadow-lg shadow-blue-500/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('hero')}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Shield className="w-6 h-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text stroke-blue-400" />
          </motion.div>
          <span className="font-mono text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">CEH</span>
        </motion.div>

        <div className="flex gap-8">
          {[
            { icon: Terminal, label: 'Journey', id: 'journey' },
            { icon: Shield, label: 'Expertise', id: 'expertise' },
            { icon: Briefcase, label: 'Projects', id: 'projects' },
            { icon: Mail, label: 'Contact', id: 'contact' },
          ].map(({ icon: Icon, label, id }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(id)}
              className="group flex items-center gap-2 text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
              </motion.div>
              <span className="hidden md:inline">{label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}