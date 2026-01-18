import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af15_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed15_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {!isMobile && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-32 right-10 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-32 left-10 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
          />
        </>
      )}
      
      <div className="absolute inset-0">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 md:mb-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 overflow-hidden shadow-2xl shadow-purple-500/50"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Vishesh Ranjan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement;
                  if (fallback) fallback.textContent = '🔒';
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-mono font-bold mb-4 md:mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Vishesh Ranjan
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide">
            Cybersecurity Specialist & Ethical Hacker
          </p>
          
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Transforming digital security through offensive excellence and defensive mastery.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a href="#journey" className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Discover My Story
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown size={28} className="text-purple-400" />
      </motion.div>
    </section>
  );
}