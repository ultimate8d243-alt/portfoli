import { motion } from 'framer-motion';
import { Github, Send, Instagram, Mail, Shield, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      handle: '@morningstar0213',
      url: 'https://instagram.com/morningstar0213',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Send,
      label: 'Telegram',
      handle: '@morningstar_0213',
      url: 'https://t.me/morningstar_0213',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      handle: '@morningstar-0213',
      url: 'https://github.com/morningstar-0213',
      color: 'from-gray-400 to-gray-600',
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'bhumiharshihsir12@gmail.com',
      url: 'mailto:bhumiharshihsir12@gmail.com',
      color: 'from-cyan-400 to-blue-500',
    },
  ];

  return (
    <section id="contact" className="relative py-32 md:py-48 px-4 sm:px-6 overflow-hidden">
      {/* Animated background orbs - optimized for mobile */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-0 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
          />
        </>
      )}
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl font-mono mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-400">
            Available for security consulting, penetration testing, and collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -8 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-slate-900/80 via-blue-950/50 to-purple-950/50 border border-blue-500/30 rounded-xl md:rounded-2xl p-4 md:p-6 overflow-hidden hover:border-purple-500/60 transition-all duration-500 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20`}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10 flex items-center gap-3 md:gap-4">
                <motion.div
                  whileHover={{ rotate: isMobile ? 0 : 360, scale: isMobile ? 1 : 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 md:p-4 rounded-xl bg-gradient-to-r ${link.color} shadow-lg`}
                >
                  <link.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <div className="text-gray-500 text-xs md:text-sm font-mono mb-1">{link.label}</div>
                  <div className="text-white font-mono text-sm md:text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all truncate">
                    {link.handle}
                  </div>
                </div>
                
                <motion.div
                  className="text-gray-600 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-purple-500/50 p-6 md:p-12 text-center backdrop-blur-xl shadow-2xl shadow-purple-500/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-purple-950/40 to-pink-950/40" />
          {!isMobile && (
            <motion.div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/10 to-transparent"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          )}
          
          <div className="relative z-10">
            <div className="flex justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              >
                <Shield className="w-10 h-10 md:w-14 md:h-14 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text stroke-blue-400" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
              >
                <Terminal className="w-10 h-10 md:w-14 md:h-14 text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text stroke-purple-400" />
              </motion.div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-mono mb-3 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Secure Your Infrastructure
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Whether you need penetration testing, security audits, or custom security solutions, 
              I bring real-world experience from both sides of the field.
            </p>
            
            <motion.div
              whileHover={{ scale: isMobile ? 1 : 1.1, y: isMobile ? 0 : -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="mailto:your.email@domain.com"
                className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-mono rounded-xl text-sm md:text-base hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-300"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Start a Conversation
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <motion.div 
            className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-slate-900/80 via-blue-950/60 to-purple-950/60 border border-blue-500/30 rounded-lg md:rounded-xl backdrop-blur-sm shadow-lg"
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
          >
            <p className="text-gray-400 font-mono text-xs md:text-sm">
              EC-COUNCIL CERTIFIED ETHICAL HACKER #*******
            </p>
          </motion.div>
          
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mt-6 md:mt-8 text-gray-500 font-mono text-xs md:text-sm italic px-4"
          >
            "From the shadows to the spotlight, using darkness to protect the light."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
