import { motion } from 'framer-motion';
import { Shield, Network, Globe, Lock, Terminal, Zap, Bug, Eye, Database, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

const expertiseAreas = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Advanced vulnerability assessment and exploitation techniques to identify security weaknesses',
    skills: ['Web App Testing', 'Network Pentesting', 'Wireless Security', 'Social Engineering'],
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Deep expertise in network protocols, intrusion detection, and securing network infrastructure',
    skills: ['IDS/IPS Configuration', 'Firewall Management', 'VPN Security', 'Network Forensics'],
  },
  {
    icon: Globe,
    title: 'Web Security',
    description: 'Comprehensive web application security testing and secure development practices',
    skills: ['OWASP Top 10', 'XSS/CSRF/SQLi', 'API Security', 'Secure Coding'],
  },
  {
    icon: Lock,
    title: 'Cryptography',
    description: 'Implementation and analysis of encryption systems and security protocols',
    skills: ['SSL/TLS', 'PKI', 'Hash Functions', 'Certificate Management'],
  },
  {
    icon: Terminal,
    title: 'Exploit Development',
    description: 'Creating and analyzing exploits for vulnerabilities and zero-day discoveries',
    skills: ['Buffer Overflow', 'Reverse Engineering', 'Shellcode', 'Fuzzing'],
  },
  {
    icon: Zap,
    title: 'Malware Analysis',
    description: 'Reverse engineering and analyzing malicious software behavior',
    skills: ['Static Analysis', 'Dynamic Analysis', 'Sandbox Testing', 'IOC Extraction'],
  },
  {
    icon: Bug,
    title: 'Vulnerability Research',
    description: 'Discovering and documenting security vulnerabilities in systems and applications',
    skills: ['CVE Research', 'Bug Bounty', '0-Day Discovery', 'PoC Development'],
  },
  {
    icon: Eye,
    title: 'Digital Forensics',
    description: 'Investigation and analysis of digital evidence and incident response',
    skills: ['Log Analysis', 'Memory Forensics', 'Disk Forensics', 'Chain of Custody'],
  },
  {
    icon: Database,
    title: 'Database Security',
    description: 'Securing database systems and preventing unauthorized data access',
    skills: ['SQL Injection', 'NoSQL Security', 'Database Hardening', 'Encryption'],
  },
  {
    icon: Wifi,
    title: 'Wireless Security',
    description: 'Wireless network security assessment and attack/defense strategies',
    skills: ['WPA/WPA2 Cracking', 'Evil Twin Attacks', 'Rogue AP Detection', 'Bluetooth Security'],
  },
];

export function Expertise() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="expertise" className="relative py-16 md:py-32 px-4 sm:px-6">
      {/* Animated background orbs - hidden on mobile */}
      {!isMobile && (
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"
        />
      )}
      
      <div className="max-w-7xl mx-auto relative z-10">
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
              EXPERTISE
            </span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive cybersecurity skillset honed through real-world experience and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <ExpertiseCard {...area} index={index} isMobile={isMobile} />
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-mono text-center mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 
              'SQLMap', 'Hashcat', 'John the Ripper', 'Aircrack-ng', 'OWASP ZAP',
              'Nessus', 'Ghidra', 'IDA Pro', 'Python', 'Bash Scripting',
              'Docker', 'Nikto', 'Hydra', 'BeEF', 'Social-Engineer Toolkit'
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: isMobile ? 1 : 1.1, y: isMobile ? 0 : -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 md:px-5 md:py-3 bg-gradient-to-br from-blue-950/40 via-purple-950/40 to-slate-950/40 border border-blue-500/30 rounded-lg md:rounded-xl font-mono text-xs md:text-sm text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:border-purple-500/50 transition-all cursor-default shadow-lg hover:shadow-blue-500/50 backdrop-blur-sm"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExpertiseCard({ icon: Icon, title, description, skills, index, isMobile }: any) {
  return (
    <motion.div
      whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -12 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-gradient-to-br from-slate-900/80 via-blue-950/50 to-purple-950/50 border border-blue-500/30 rounded-xl md:rounded-2xl p-4 md:p-6 overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 backdrop-blur-xl"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Floating orb effect on hover - desktop only */}
      {!isMobile && (
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: isMobile ? 0 : 360, scale: isMobile ? 1 : 1.1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-3 md:mb-4"
        >
          <div className="relative">
            {!isMobile && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <Icon className="w-10 h-10 md:w-14 md:h-14 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text stroke-blue-400 relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>
        
        <h3 className="text-lg md:text-xl font-mono mb-2 md:mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
          {title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {skills.map((skill: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: isMobile ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-2 py-1 md:px-3 md:py-1 bg-blue-950/40 border border-blue-500/30 rounded text-xs text-gray-400 font-mono hover:border-purple-500/50 hover:text-purple-300 transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
