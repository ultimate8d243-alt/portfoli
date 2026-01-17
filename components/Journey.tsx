import { motion } from 'motion/react';
import { Shield, Skull, AlertTriangle, Award, Scale, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const journeySteps = [
  {
    icon: Shield,
    title: 'THE BEGINNING',
    phase: 'The Good Intentions',
    content: 'As far back as I can remember, I always wanted to be an ethical hacker. The good guy. The white hat. There was something beautiful about using these powers for protection instead of destruction.',
    color: 'from-cyan-400 via-blue-500 to-blue-600',
    borderColor: 'border-blue-500/50',
    glowColor: 'shadow-blue-500/50',
  },
  {
    icon: Skull,
    title: 'GOING DARK',
    phase: 'The Temptation',
    content: '"But the dark side... it calls to you."',
    color: 'from-purple-400 via-purple-600 to-indigo-600',
    borderColor: 'border-purple-500/50',
    glowColor: 'shadow-purple-500/50',
  },
  {
    icon: AlertTriangle,
    title: 'THE AFTERMATH',
    phase: 'The Operations',
    content: 'Operated for 14 months without trace while simultaneously:',
    details: [
      'Hacked many sites and accounts using keyloggers, phishing links and RATs',
      'Extracted classified information from victims\' accounts and devices',
      'Developed methods to obtain SSL certificates to bypass security checks',
    ],
    color: 'from-pink-500 via-purple-500 to-violet-600',
    borderColor: 'border-pink-500/50',
    glowColor: 'shadow-pink-500/50',
  },
  {
    icon: Target,
    title: 'THE LATEST ACHIEVEMENT',
    phase: 'The Peak',
    content: 'For more than a year, I was untouchable. Keyloggers harvesting passwords, RATs crawling through devices, SSL certs forged clean. Then came March 9, 2025. The day the music stopped.',
    color: 'from-violet-500 via-purple-600 to-fuchsia-600',
    borderColor: 'border-violet-500/50',
    glowColor: 'shadow-violet-500/50',
  },
  {
    icon: Scale,
    title: 'POLICE CASE (March 09, 2025)',
    phase: 'The Reckoning',
    subtitle: '#XX-7842-XX',
    content: 'Proven not guilty. The report read like a pentester\'s resume: \'...exploited zero-day vulnerability...no digital fingerprints...\' Not guilty by technicality.',
    color: 'from-amber-400 via-orange-500 to-red-500',
    borderColor: 'border-amber-500/50',
    glowColor: 'shadow-amber-500/50',
  },
  {
    icon: Award,
    title: 'REDEMPTION ARC',
    phase: 'The Transformation',
    content: 'So here I am. Back where I started - just a kid who wanted to be an ethical hacker. The difference? Now I know exactly what I\'m protecting people from... "because I used to be the monster under their bed."',
    subtitle: 'EC-COUNCIL CERTIFIED ETHICAL HACKER #*******',
    badge: 'Officially certified cybersecurity professional',
    color: 'from-emerald-400 via-green-500 to-teal-600',
    borderColor: 'border-emerald-500/50',
    glowColor: 'shadow-emerald-500/50',
  },
];

export function Journey() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="journey" className="relative py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-7xl font-mono mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MY JOURNEY
            </span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            From darkness to light, a path of transformation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line with gradient */}
          {!isMobile && (
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30 rounded-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />
          )}

          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -100 : 100), y: isMobile ? 50 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
              }}
              className={`relative mb-8 md:mb-16 ${
                isMobile ? '' : (index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto')
              } w-full ${isMobile ? '' : 'md:w-1/2'}`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Timeline dot */}
              <motion.div
                animate={{
                  scale: activeStep === index ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className={`absolute ${
                  isMobile 
                    ? 'left-0 top-0' 
                    : (index % 2 === 0 ? 'right-0 md:-right-5' : 'left-0 md:-left-5')
                } ${isMobile ? '' : 'md:left-1/2 md:transform md:-translate-x-1/2'} w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${
                  step.color
                } rounded-full border-4 border-slate-950 z-10 ${activeStep === index ? step.glowColor : ''} shadow-xl`}
              >
                <motion.div
                  animate={{ rotate: activeStep === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
              </motion.div>

              {/* Content card */}
              <motion.div
                whileHover={{ scale: isMobile ? 1 : 1.03, y: isMobile ? 0 : -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative bg-gradient-to-br from-slate-900/80 via-blue-950/50 to-purple-950/50 border ${step.borderColor} rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-xl ${
                  isMobile ? 'ml-12' : (index % 2 === 0 ? 'md:mr-12' : 'md:ml-12')
                } shadow-2xl ${activeStep === index ? step.glowColor : ''} overflow-hidden group`}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-mono mb-3 md:mb-4 shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.phase}
                  </motion.div>
                  
                  <h3 className="text-lg md:text-2xl font-mono mb-2 text-white">{step.title}</h3>
                  
                  {step.subtitle && (
                    <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 font-mono">{step.subtitle}</p>
                  )}
                  
                  <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{step.content}</p>
                  
                  {step.details && (
                    <ul className="space-y-2 mb-3 md:mb-4">
                      {step.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-gray-400 text-xs md:text-sm flex items-start gap-2"
                        >
                          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mt-1">▸</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                  
                  {step.badge && (
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-blue-500/30">
                      <p className="text-transparent bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text font-mono text-xs md:text-sm">{step.badge}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-20 text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block px-6 py-4 md:px-8 md:py-6 bg-gradient-to-r from-blue-950/60 via-purple-950/60 to-slate-950/60 border border-blue-500/50 rounded-xl md:rounded-2xl shadow-xl shadow-blue-500/20 backdrop-blur-xl"
          >
            <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-mono text-sm md:text-lg italic">
              "Every villain is a hero in their own story. I chose to rewrite mine."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
