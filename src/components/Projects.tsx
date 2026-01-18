import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Mail, Wifi, Smartphone, Key, Lock, 
  MessageSquare, Globe, Database, Server, 
  Eye, Terminal, Fingerprint, AlertTriangle,
  Radio, FileText, Code, Unlock, Network, WifiOff
} from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'GoodFellas',
    category: 'Flagship Project',
    tagline: 'More secure than Telegram',
    description: 'An ultra-secure encrypted messaging platform with complete anonymity',
    highlights: [
      'All traffic routed through Tor darknet for complete anonymity',
      'End-to-end encryption using AES-256 with perfect forward secrecy',
      'Zero-knowledge architecture - even server admins cannot decrypt messages',
      'Decentralized node system prevents single point of failure',
      'Ephemeral messaging with automatic message destruction',
      'No metadata collection - not even IP addresses or timestamps are logged',
    ],
    tech: ['Tor Network', 'AES-256', 'Python', 'WebRTC', 'P2P', 'Zero-Knowledge'],
    github: 'https://github.com/yourusername/goodfellas',
    featured: true,
  },
  {
    id: 2,
    icon: Mail,
    title: 'Phishing Framework',
    category: 'Social Engineering',
    description: 'Advanced phishing page generator for security awareness training',
    highlights: [
      'Dynamic page cloning for realistic replica creation',
      'HTTPS support with automated SSL certificate generation',
      'Real-time credential capture dashboard with analytics',
      'Email template engine with customizable pretext scenarios',
      'Campaign tracking and success rate metrics',
      'Integration with security awareness training programs',
    ],
    tech: ['PHP', 'JavaScript', 'Let\'s Encrypt', 'SMTP', 'HTML/CSS'],
    github: 'https://github.com/yourusername/phishing-framework',
  },
  {
    id: 3,
    icon: WifiOff,
    title: 'Network Jammer',
    category: 'Wireless Security',
    description: 'WiFi deauthentication and network disruption testing tool',
    highlights: [
      'Automated deauthentication attack implementation',
      'Support for multiple wireless protocols (802.11 a/b/g/n/ac)',
      'Selective client disconnection capabilities',
      'Channel hopping for comprehensive coverage',
      'Real-time packet injection monitoring',
      'Evil twin AP detection and prevention testing',
    ],
    tech: ['Python', 'Scapy', 'Aircrack-ng', 'Monitor Mode', 'Packet Injection'],
    github: 'https://github.com/yourusername/network-jammer',
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Android RAT Suite',
    category: 'Mobile Security',
    description: 'Remote administration toolkit for Android penetration testing',
    highlights: [
      'Complete device surveillance including camera, microphone, and location',
      'Keylogger functionality for credential harvesting',
      'SMS and call log extraction with cloud sync',
      'File system access and remote file management',
      'Screen recording and screenshot capture',
      'Persistence mechanisms and anti-removal protection',
    ],
    tech: ['Java', 'Android SDK', 'WebSocket', 'ADB', 'Node.js'],
    github: 'https://github.com/yourusername/android-rat',
  },
  {
    id: 5,
    icon: Key,
    title: 'Multi-Protocol Bruteforcer',
    category: 'Password Cracking',
    description: 'High-performance password attack framework',
    highlights: [
      'Support for SSH, FTP, HTTP, RDP, SMTP, and database protocols',
      'Multi-threaded architecture for maximum speed',
      'Dictionary attacks with rule-based mutations',
      'Hybrid attacks combining wordlists and brute force',
      'Proxy rotation and rate limiting bypass',
      'Progress saving and resume capabilities',
    ],
    tech: ['Python', 'Hydra', 'Threading', 'Regex', 'Socket Programming'],
    github: 'https://github.com/yourusername/bruteforcer',
  },
  {
    id: 6,
    icon: Eye,
    title: 'Advanced Keylogger',
    category: 'Surveillance',
    description: 'Stealthy keystroke logging and monitoring system',
    highlights: [
      'Kernel-level hook implementation for complete invisibility',
      'Clipboard monitoring and screenshot capture on trigger events',
      'Application-specific logging with contextual data',
      'Encrypted log transmission to remote C2 server',
      'Anti-debugging and VM detection mechanisms',
      'Automatic startup persistence across reboots',
    ],
    tech: ['C++', 'Windows API', 'Hooks', 'Encryption', 'Registry'],
    github: 'https://github.com/yourusername/keylogger',
  },
  {
    id: 7,
    icon: Lock,
    title: 'Message Encryptor/Decryptor',
    category: 'Cryptography',
    description: 'Military-grade encryption tool for secure communications',
    highlights: [
      'Multiple cipher support: AES, RSA, Blowfish, ChaCha20',
      'Public key infrastructure with RSA-4096 implementation',
      'Steganography module for hiding messages in images',
      'File encryption with compression for optimal size',
      'Secure key exchange using Diffie-Hellman',
      'Password-based key derivation with PBKDF2',
    ],
    tech: ['Python', 'PyCrypto', 'OpenSSL', 'Base64', 'Steganography'],
    github: 'https://github.com/yourusername/message-encryptor',
  },
  {
    id: 8,
    icon: Globe,
    title: 'Web Application Scanner',
    category: 'Web Security',
    description: 'Automated vulnerability scanner for web applications',
    highlights: [
      'OWASP Top 10 vulnerability detection',
      'SQL injection testing with multiple payload variations',
      'XSS detection (reflected, stored, and DOM-based)',
      'Directory traversal and file inclusion testing',
      'Automated crawling with JavaScript rendering',
      'Detailed vulnerability reports with PoC examples',
    ],
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Requests', 'SQLMap'],
    github: 'https://github.com/yourusername/web-scanner',
  },
  {
    id: 9,
    icon: Database,
    title: 'SQL Injection Toolkit',
    category: 'Database Security',
    description: 'Advanced SQL injection exploitation framework',
    highlights: [
      'Automated database fingerprinting and detection',
      'Blind SQL injection with time-based and boolean techniques',
      'Database enumeration (tables, columns, users)',
      'Data exfiltration with multiple encoding methods',
      'WAF bypass using advanced evasion techniques',
      'Automated shell upload and code execution',
    ],
    tech: ['Python', 'SQLMap', 'MySQL', 'PostgreSQL', 'MSSQL'],
    github: 'https://github.com/yourusername/sql-toolkit',
  },
  {
    id: 10,
    icon: Server,
    title: 'Command & Control Server',
    category: 'Red Team Operations',
    description: 'Centralized botnet management and control infrastructure',
    highlights: [
      'Multi-protocol communication (HTTP, DNS, ICMP)',
      'Encrypted C2 traffic with custom protocol implementation',
      'Web dashboard for bot management and task distribution',
      'Plugin system for extending functionality',
      'Automated deployment and agent generation',
      'Domain fronting and traffic obfuscation',
    ],
    tech: ['Python', 'Flask', 'WebSocket', 'SQLite', 'Encryption'],
    github: 'https://github.com/yourusername/c2-server',
  },
  {
    id: 11,
    icon: Terminal,
    title: 'Reverse Shell Generator',
    category: 'Exploitation',
    description: 'Multi-platform reverse shell payload generator',
    highlights: [
      'Support for Windows, Linux, macOS, and mobile platforms',
      'Encoded payloads to bypass AV detection',
      'Multiple connection methods (TCP, UDP, HTTP, DNS)',
      'Automatic obfuscation and polymorphic code generation',
      'Meterpreter integration for post-exploitation',
      'One-liner payloads for quick deployment',
    ],
    tech: ['Python', 'Metasploit', 'PowerShell', 'Bash', 'Netcat'],
    github: 'https://github.com/yourusername/reverse-shell-gen',
  },
  {
    id: 12,
    icon: Fingerprint,
    title: 'OSINT Reconnaissance Tool',
    category: 'Information Gathering',
    description: 'Comprehensive open-source intelligence gathering framework',
    highlights: [
      'Automated subdomain enumeration and DNS reconnaissance',
      'Social media profile aggregation and analysis',
      'Email harvesting from multiple sources',
      'WHOIS and domain registration data extraction',
      'Metadata extraction from documents and images',
      'Data visualization and relationship mapping',
    ],
    tech: ['Python', 'APIs', 'Web Scraping', 'Shodan', 'TheHarvester'],
    github: 'https://github.com/yourusername/osint-tool',
  },
  {
    id: 13,
    icon: AlertTriangle,
    title: 'Exploit Development Kit',
    category: 'Vulnerability Research',
    description: 'Framework for creating and testing exploits',
    highlights: [
      'Buffer overflow exploit template generator',
      'ROP chain builder and gadget finder',
      'Shellcode encoder and decoder utilities',
      'Fuzzing framework for vulnerability discovery',
      'Debugger integration for exploit development',
      'Cross-platform exploit compatibility testing',
    ],
    tech: ['Python', 'Assembly', 'GDB', 'Immunity Debugger', 'Radare2'],
    github: 'https://github.com/yourusername/exploit-kit',
  },
  {
    id: 14,
    icon: Radio,
    title: 'Packet Sniffer & Analyzer',
    category: 'Network Analysis',
    description: 'Real-time network traffic capture and analysis tool',
    highlights: [
      'Deep packet inspection with protocol analysis',
      'SSL/TLS traffic decryption capabilities',
      'Credential extraction from unencrypted protocols',
      'Network mapping and topology visualization',
      'Intrusion detection with custom rule engine',
      'PCAP file export for forensic analysis',
    ],
    tech: ['Python', 'Scapy', 'Wireshark', 'libpcap', 'NetworkX'],
    github: 'https://github.com/yourusername/packet-sniffer',
  },
  {
    id: 15,
    icon: FileText,
    title: 'Password Hash Cracker',
    category: 'Cryptanalysis',
    description: 'GPU-accelerated hash cracking utility',
    highlights: [
      'Support for MD5, SHA-1, SHA-256, NTLM, and bcrypt',
      'GPU acceleration using CUDA and OpenCL',
      'Rainbow table generation and lookup',
      'Dictionary attacks with custom rule sets',
      'Distributed cracking across multiple machines',
      'Real-time progress monitoring and ETA calculation',
    ],
    tech: ['Python', 'Hashcat', 'John the Ripper', 'CUDA', 'Rainbow Tables'],
    github: 'https://github.com/yourusername/hash-cracker',
  },
  {
    id: 16,
    icon: Code,
    title: 'Backdoor Generator',
    category: 'Persistence',
    description: 'Automated backdoor creation and deployment tool',
    highlights: [
      'Fileless backdoors using registry and WMI',
      'Service-based persistence mechanisms',
      'Rootkit functionality for stealth operations',
      'Anti-forensics techniques to hide traces',
      'Multiple trigger methods (time, event, condition)',
      'Automatic updates and self-healing capabilities',
    ],
    tech: ['Python', 'C', 'PowerShell', 'Windows API', 'Linux Kernel'],
    github: 'https://github.com/yourusername/backdoor-gen',
  },
  {
    id: 17,
    icon: Unlock,
    title: 'Credential Harvester',
    category: 'Data Extraction',
    description: 'Automated credential extraction from various sources',
    highlights: [
      'Browser password extraction (Chrome, Firefox, Edge)',
      'Saved WiFi password recovery',
      'Cached credentials from Windows LSASS',
      'SSH key and config file extraction',
      'Cookie stealing and session hijacking',
      'Encrypted vault and password manager dumps',
    ],
    tech: ['Python', 'Mimikatz', 'LaZagne', 'SQLite', 'DPAPI'],
    github: 'https://github.com/yourusername/credential-harvester',
  },
  {
    id: 18,
    icon: Network,
    title: 'ARP Spoofing Tool',
    category: 'MITM Attacks',
    description: 'Man-in-the-middle attack framework for network interception',
    highlights: [
      'Automated ARP cache poisoning',
      'SSL stripping to downgrade HTTPS connections',
      'Traffic modification and injection',
      'DNS spoofing for phishing redirects',
      'Session hijacking and cookie theft',
      'Real-time traffic analysis dashboard',
    ],
    tech: ['Python', 'Scapy', 'Ettercap', 'SSLStrip', 'iptables'],
    github: 'https://github.com/yourusername/arp-spoofer',
  },
  {
    id: 19,
    icon: Wifi,
    title: 'WPA/WPA2 Cracker',
    category: 'Wireless Hacking',
    description: 'Wireless network security testing and password recovery',
    highlights: [
      'Automated 4-way handshake capture',
      'Dictionary and brute force attack modes',
      'GPU-accelerated cracking with hashcat',
      'WPS PIN attack implementation',
      'PMKID-based cracking (clientless attack)',
      'Custom wordlist generation from OSINT',
    ],
    tech: ['Python', 'Aircrack-ng', 'Hashcat', 'Reaver', 'Cowpatty'],
    github: 'https://github.com/yourusername/wpa-cracker',
  },
  {
    id: 20,
    icon: Shield,
    title: 'Steganography Toolkit',
    category: 'Covert Communications',
    description: 'Data hiding and extraction in various media formats',
    highlights: [
      'LSB steganography in images (PNG, JPG, BMP)',
      'Audio steganography in WAV and MP3 files',
      'Video frame manipulation for data embedding',
      'Text-based steganography using Unicode tricks',
      'File signature manipulation and polyglot creation',
      'Steganalysis tools for detecting hidden data',
    ],
    tech: ['Python', 'PIL', 'OpenCV', 'FFmpeg', 'StegDetect'],
    github: 'https://github.com/yourusername/steganography-toolkit',
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-32 md:py-48 px-4 sm:px-6 overflow-hidden">
      {/* Animated background orbs - hidden on mobile for performance */}
      <div className="hidden md:block">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl font-mono mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-400">
            20 projects showcasing advanced cybersecurity techniques and tools
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 md:mb-24"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 md:px-5 md:py-2 rounded-lg md:rounded-xl font-mono text-xs md:text-sm transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-900/60 text-gray-400 hover:bg-slate-800 border border-blue-500/30 hover:border-purple-500/50 backdrop-blur-sm'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={projects.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onClick }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`group relative bg-gradient-to-br ${
        project.featured
          ? 'from-blue-950/60 via-purple-950/60 to-pink-950/60 border-purple-500/60'
          : 'from-slate-900/80 via-blue-950/50 to-purple-950/50 border-blue-500/30'
      } border rounded-xl md:rounded-2xl p-4 md:p-6 overflow-hidden hover:border-purple-500/70 transition-all duration-500 cursor-pointer backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/30`}
    >
      {project.featured && (
        <motion.div 
          className="absolute top-3 right-3 md:top-4 md:right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-mono text-white shadow-lg"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          FLAGSHIP
        </motion.div>
      )}

      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-3 md:mb-4"
        >
          <div className="relative">
            <project.icon className="w-10 h-10 md:w-12 md:h-12 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text stroke-blue-400 relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>

        <div className="mb-2">
          <span className="text-xs text-gray-500 font-mono">{project.category}</span>
        </div>

        <h3 className="text-lg md:text-xl font-mono mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
          {project.title}
        </h3>
        
        {project.tagline && (
          <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-sm mb-2 md:mb-3 italic font-medium">
            {project.tagline}
          </p>
        )}

        <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
          {project.tech.slice(0, 3).map((tech: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-950/40 border border-blue-500/30 rounded text-xs text-gray-400 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-600 font-mono">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <motion.div 
          className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-sm font-mono inline-flex items-center gap-2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          View Details
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 border border-purple-500/50 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8 shadow-2xl shadow-purple-500/30 backdrop-blur-xl"
      >
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div className="flex items-start gap-3 md:gap-4 flex-1">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <project.icon className="w-10 h-10 md:w-14 md:h-14 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text stroke-blue-400" strokeWidth={1.5} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="text-xs md:text-sm text-gray-500 font-mono mb-1">{project.category}</div>
              <h3 className="text-2xl md:text-3xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent break-words">
                {project.title}
              </h3>
              {project.tagline && (
                <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text italic mt-2 font-medium text-sm md:text-base">
                  {project.tagline}
                </p>
              )}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors text-2xl md:text-3xl ml-2 flex-shrink-0"
          >
            ×
          </motion.button>
        </div>

        <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-lg">{project.description}</p>

        {/* GitHub Link */}
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 md:gap-3 p-3 md:p-4 mb-4 md:mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl hover:border-purple-500/60 transition-all group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="font-mono text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
              View on GitHub
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-blue-400 group-hover:text-purple-400 ml-auto"
            >
              →
            </motion.span>
          </motion.a>
        )}

        <div className="mb-4 md:mb-6">
          <h4 className="text-lg md:text-xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3 md:mb-4">
            Key Features
          </h4>
          <ul className="space-y-2 md:space-y-3">
            {project.highlights.map((highlight: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
                className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base"
              >
                <motion.span 
                  className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mt-1 flex-shrink-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                >
                  ▸
                </motion.span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg md:text-xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3 md:mb-4">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 bg-blue-950/40 border border-blue-500/30 rounded-lg md:rounded-xl text-xs md:text-sm text-gray-300 font-mono hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {project.featured && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-blue-950/60 via-purple-950/60 to-pink-950/60 border border-purple-500/30 rounded-xl md:rounded-2xl shadow-lg shadow-purple-500/20"
          >
            <h4 className="text-base md:text-lg font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 md:mb-3">
              How It Works
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              GoodFellas achieves unprecedented security by routing all communications through the Tor network, 
              ensuring complete anonymity. Each message is encrypted end-to-end with AES-256 before transmission, 
              with keys generated using perfect forward secrecy - meaning even if one key is compromised, past 
              messages remain secure. The zero-knowledge architecture ensures that server operators cannot decrypt 
              any messages, as encryption happens client-side. Messages are transmitted through a decentralized 
              network of nodes, making it impossible for any single entity - including government agencies - to 
              intercept or decrypt communications. The system uses ephemeral messaging with automatic destruction, 
              leaving no digital footprint.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}