import { motion } from 'framer-motion';
import { Code2, Target, Award, BookOpen, Shield, AlertTriangle, Scale, Skull } from 'lucide-react';
import { useState, useEffect } from 'react';

// Dummy data - will be replaced by component state
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = [
    { icon: Code2, title: 'Ethical Hacking', subtitle: 'CERTIFIED' },
    { icon: Target, title: 'Penetration Testing', subtitle: 'ADVANCED' },
    { icon: Code2, title: 'Network Security', subtitle: 'EXPERT' },
    { icon: Award, title: 'Signal Jamming', subtitle: 'PROFICIENT' },
    { icon: Code2, title: 'RF Engineering', subtitle: 'SPECIALIZED' },
    { icon: BookOpen, title: 'Digital Forensics', subtitle: 'CERTIFIED' },
  ];

  const stats = [
    { number: '50+', label: 'Security Assessments', color: 'from-blue-500 to-blue-600' },
    { number: '100%', label: 'Client Satisfaction', color: 'from-purple-500 to-purple-600' },
    { number: '15+', label: 'Platforms Secured', color: 'from-pink-500 to-pink-600' },
  ];

  return (
    <section id="journey" className="relative py-32 md:py-48 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 md:mb-32"
        >
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-mono font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              WHO I AM
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            From curious explorer to certified specialist
          </motion.p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32 md:mb-48">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-white">
                  Vishesh Ranjan
                </h3>
                <p className="text-lg md:text-xl text-purple-300 font-semibold mb-6">
                  Cybersecurity Specialist with a Unique Digital Journey
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  My path has taken me from exploring the depths of system vulnerabilities to mastering defensive security strategies.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  As a Certified Ethical Hacker, I now leverage my extensive knowledge to protect systems and educate organizations about digital security threats.
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed italic">
                  "Because I used to be the monster under their bed, now I know exactly what I'm protecting people from."
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <a href="#expertise" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                View Full Expertise →
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full min-h-96"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-500 to-purple-500 p-8 bg-gradient-to-br from-blue-950/50 to-purple-950/50 backdrop-blur-xl flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Specialization</p>
                    <p className="text-lg md:text-xl font-mono font-bold text-white">Ethical Hacking</p>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                <div className="space-y-3 text-sm md:text-base">
                  <p className="text-gray-300">✓ Certified by EC-COUNCIL</p>
                  <p className="text-gray-300">✓ 50+ Security Assessments</p>
                  <p className="text-gray-300">✓ 15+ Platforms Secured</p>
                  <p className="text-gray-300">✓ 100% Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative blur orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
            />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="mb-32 md:mb-48">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-mono font-bold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Expertise
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group p-8 rounded-xl border border-blue-500/30 bg-gradient-to-br from-slate-900/50 via-blue-950/30 to-purple-950/30 backdrop-blur-xl hover:border-purple-500/60 transition-all"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>
                  <h4 className="text-lg md:text-xl font-mono font-bold text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-purple-300 font-semibold">{skill.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`p-8 md:p-12 rounded-2xl bg-gradient-to-br ${stat.color} border border-white/10 relative overflow-hidden group`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <p className="text-5xl md:text-6xl font-mono font-bold text-white mb-3">
                  {stat.number}
                </p>
                <p className="text-base md:text-lg text-white/90 font-semibold">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 md:mt-48"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-mono font-bold mb-6 text-center"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MY JOURNEY
            </span>
          </motion.h3>
          <p className="text-center text-gray-400 mb-20 text-lg max-w-2xl mx-auto">
            From curiosity to expertise - A transformation story
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
            />

            <div className="space-y-16">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className={`flex items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className="w-full md:w-1/2">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 md:p-8 rounded-xl border border-transparent bg-gradient-to-br from-slate-900/60 via-blue-950/40 to-purple-950/40 hover:border-purple-500/50 backdrop-blur-xl transition-all"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}
                          >
                            <Icon className="text-white" size={20} />
                          </motion.div>
                          <div>
                            <p className="text-xs md:text-sm text-purple-400 font-mono">{step.phase}</p>
                            <h4 className="text-lg md:text-xl font-mono font-bold text-white">
                              {step.title}
                            </h4>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                          {step.content}
                        </p>
                        {step.details && (
                          <ul className="space-y-2 text-sm text-gray-400">
                            {step.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mt-0.5">
                                  ▸
                                </span>
                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                        {step.badge && (
                          <div className="mt-4 pt-4 border-t border-blue-500/20">
                            <p className="text-xs md:text-sm text-transparent bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text font-mono">
                              ✓ {step.badge}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-950 shadow-lg shadow-purple-500/50 items-center justify-center flex-shrink-0"
                    >
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-24 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block px-8 py-6 rounded-2xl border border-purple-500/50 bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-pink-950/40 backdrop-blur-xl"
            >
              <p className="text-lg md:text-xl text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text font-mono italic max-w-2xl">
                "Every villain is a hero in their own story. I chose to rewrite mine."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
