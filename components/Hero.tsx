import { motion } from 'motion/react';
import { Terminal, Shield, Lock } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">
      {/* Optimized grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af15_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed15_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Reduced floating orbs for mobile */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
          />
        </>
      )}
      
      {/* Reduced particles for performance */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="mb-6 md:mb-8"
        >
          <motion.div
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            }}
            className="inline-block mb-4 md:mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50" />
            <Shield className="w-16 h-16 md:w-24 md:h-24 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text stroke-blue-400 relative z-10" strokeWidth={1} />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl mb-4 md:mb-6 font-mono px-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            ETHICAL HACKER
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl text-gray-300 mb-3 md:mb-4 font-mono px-4"
        >
          <TypewriterText text="Certified Penetration Tester | Network Security Specialist" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto italic px-4"
        >
          "As far back as I can remember, I always wanted to be an ethical hacker. The good guy. The white hat."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-3 md:gap-6 justify-center px-4"
        >
          <StatCard icon={Terminal} label="Pen Testing" delay={0} />
          <StatCard icon={Shield} label="Network Security" delay={0.1} />
          <StatCard icon={Lock} label="Web Security" delay={0.2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 md:mt-16"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50" />
              <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TypewriterText({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.span>
  );
}

function StatCard({ icon: Icon, label, delay }: { icon: any; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-4 py-3 md:px-8 md:py-6 bg-gradient-to-br from-blue-950/40 via-purple-950/40 to-slate-950/40 border border-blue-500/30 rounded-xl md:rounded-2xl backdrop-blur-xl overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0"
        whileHover={{ 
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))',
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <Icon className="w-6 h-6 md:w-10 md:h-10 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text stroke-blue-400 mb-2 md:mb-3 mx-auto" />
      </div>
      <p className="text-gray-200 font-mono text-xs md:text-sm relative z-10">{label}</p>
    </motion.div>
  );
}