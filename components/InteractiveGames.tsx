import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Lock, Hash, Wifi, Shield, Code, Zap } from 'lucide-react';
import { useState } from 'react';

export function InteractiveGames() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const games = [
    { id: 'terminal', name: 'Terminal Hacking', icon: Terminal, component: TerminalGame },
    { id: 'password', name: 'Password Cracker', icon: Lock, component: PasswordGame },
    { id: 'hash', name: 'Hash Decoder', icon: Hash, component: HashGame },
    { id: 'network', name: 'Network Scanner', icon: Wifi, component: NetworkGame },
    { id: 'encryption', name: 'Crypto Challenge', icon: Shield, component: EncryptionGame },
    { id: 'sql', name: 'SQL Injection Sim', icon: Code, component: SQLGame },
  ];

  return (
    <section id="games" className="relative py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
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
              INTERACTIVE LABS
            </span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            Test your cybersecurity skills with these interactive challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8">
          {games.map((game, index) => (
            <motion.button
              key={game.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGame(game.id)}
              className={`p-4 md:p-6 bg-gradient-to-br from-slate-900/80 via-blue-950/50 to-purple-950/50 border ${
                activeGame === game.id ? 'border-purple-500/70' : 'border-blue-500/30'
              } rounded-xl md:rounded-2xl backdrop-blur-xl hover:border-purple-500/60 transition-all`}
            >
              <game.icon className="w-8 h-8 md:w-12 md:h-12 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text stroke-blue-400 mx-auto mb-2 md:mb-3" />
              <p className="text-xs md:text-sm font-mono text-gray-300">{game.name}</p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeGame && (
            <motion.div
              key={activeGame}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-slate-900/95 via-blue-950/80 to-purple-950/80 border border-purple-500/50 rounded-2xl md:rounded-3xl p-4 md:p-8 backdrop-blur-xl shadow-2xl shadow-purple-500/20"
            >
              {games.find(g => g.id === activeGame)?.component({ onClose: () => setActiveGame(null) })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function TerminalGame({ onClose }: { onClose: () => void }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>(['Welcome to Terminal Hacking Simulator', 'Type "help" for available commands', '']);

  const commands: Record<string, () => string> = {
    help: () => 'Available commands: scan, exploit, access, clear, exit',
    scan: () => 'Scanning network... Found vulnerable host: 192.168.1.100',
    exploit: () => 'Launching exploit... Vulnerability CVE-2024-1337 found!',
    access: () => 'Access granted! Root privileges obtained.',
    clear: () => { setOutput([]); return ''; },
    exit: () => { onClose(); return ''; },
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    const result = commands[cmd] ? commands[cmd]() : `Command not found: ${cmd}`;
    if (result) setOutput([...output, `> ${input}`, result, '']);
    setInput('');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Terminal Hacking Simulator
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <div className="bg-black/50 rounded-xl p-3 md:p-4 font-mono text-xs md:text-sm min-h-[200px] md:min-h-[300px] max-h-[300px] md:max-h-[400px] overflow-y-auto">
        {output.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-green-400' : 'text-gray-300'}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center mt-2">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}

function PasswordGame({ onClose }: { onClose: () => void }) {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [crackTime, setCrackTime] = useState('');

  const checkStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score += 20;
    if (pass.length >= 12) score += 20;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score += 20;
    if (/[0-9]/.test(pass)) score += 20;
    if (/[^a-zA-Z0-9]/.test(pass)) score += 20;
    
    setStrength(score);
    
    const times = ['Instant', '< 1 second', '< 1 minute', '< 1 hour', '< 1 day', 'Several years'];
    setCrackTime(times[Math.floor(score / 20)] || 'Instant');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Password Strength Analyzer
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <input
        type="text"
        value={password}
        onChange={(e) => { setPassword(e.target.value); checkStrength(e.target.value); }}
        placeholder="Enter password to test..."
        className="w-full bg-black/50 border border-blue-500/30 rounded-xl p-3 md:p-4 text-white font-mono text-sm md:text-base mb-4 outline-none focus:border-purple-500/60"
      />
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2 text-xs md:text-sm">
            <span className="text-gray-400">Strength</span>
            <span className={`font-mono ${strength < 40 ? 'text-red-400' : strength < 80 ? 'text-yellow-400' : 'text-green-400'}`}>
              {strength}%
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${strength}%` }}
              className={`h-full rounded-full ${
                strength < 40 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                strength < 80 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                'bg-gradient-to-r from-green-500 to-emerald-500'
              }`}
            />
          </div>
        </div>
        <div className="bg-black/30 rounded-xl p-3 md:p-4">
          <p className="text-xs md:text-sm text-gray-400 mb-2">Estimated crack time:</p>
          <p className="text-base md:text-xl font-mono text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
            {crackTime || 'Enter a password'}
          </p>
        </div>
      </div>
    </div>
  );
}

function HashGame({ onClose }: { onClose: () => void }) {
  const [hash, setHash] = useState('');
  const [result, setResult] = useState('');
  const [cracking, setCracking] = useState(false);

  const commonHashes: Record<string, string> = {
    '5f4dcc3b5aa765d61d8327deb882cf99': 'password',
    'e10adc3949ba59abbe56e057f20f883e': '123456',
    '25d55ad283aa400af464c76d713c07ad': '12345678',
    '098f6bcd4621d373cade4e832627b4f6': 'test',
  };

  const crackHash = async () => {
    setCracking(true);
    setResult('');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const cracked = commonHashes[hash.toLowerCase()];
    setResult(cracked ? `✓ Hash cracked! Password: ${cracked}` : '✗ Hash not found in dictionary');
    setCracking(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          MD5 Hash Cracker
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <input
        type="text"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        placeholder="Enter MD5 hash..."
        className="w-full bg-black/50 border border-blue-500/30 rounded-xl p-3 md:p-4 text-white font-mono text-xs md:text-sm mb-4 outline-none focus:border-purple-500/60"
      />
      <button
        onClick={crackHash}
        disabled={cracking || !hash}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-mono rounded-xl p-3 md:p-4 mb-4 disabled:opacity-50 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
      >
        {cracking ? 'Cracking...' : 'Crack Hash'}
      </button>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 md:p-4 rounded-xl ${
            result.startsWith('✓') ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'
          }`}
        >
          <p className="font-mono text-xs md:text-sm">{result}</p>
        </motion.div>
      )}
      <div className="mt-4 p-3 md:p-4 bg-black/30 rounded-xl">
        <p className="text-xs text-gray-500 mb-2">Try these hashes:</p>
        <div className="space-y-1">
          {Object.keys(commonHashes).slice(0, 2).map((h, i) => (
            <button
              key={i}
              onClick={() => setHash(h)}
              className="block w-full text-left text-xs font-mono text-blue-400 hover:text-purple-400 truncate"
            >
              {h}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function NetworkGame({ onClose }: { onClose: () => void }) {
  const [scanning, setScanning] = useState(false);
  const [devices, setDevices] = useState<any[]>([]);

  const scanNetwork = async () => {
    setScanning(true);
    setDevices([]);
    
    const mockDevices = [
      { ip: '192.168.1.1', mac: '00:11:22:33:44:55', os: 'Router', ports: '80,443' },
      { ip: '192.168.1.100', mac: 'AA:BB:CC:DD:EE:FF', os: 'Windows 10', ports: '135,139,445' },
      { ip: '192.168.1.105', mac: '12:34:56:78:90:AB', os: 'Linux', ports: '22,80' },
    ];

    for (let i = 0; i < mockDevices.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setDevices(prev => [...prev, mockDevices[i]]);
    }
    
    setScanning(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Network Scanner
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <button
        onClick={scanNetwork}
        disabled={scanning}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-mono rounded-xl p-3 md:p-4 mb-4 disabled:opacity-50 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm md:text-base"
      >
        {scanning ? 'Scanning Network...' : 'Start Network Scan'}
      </button>
      <div className="bg-black/50 rounded-xl p-3 md:p-4 min-h-[150px] md:min-h-[200px] max-h-[250px] md:max-h-[300px] overflow-y-auto">
        {devices.map((device, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-3 p-2 md:p-3 bg-blue-950/30 border border-blue-500/20 rounded-lg"
          >
            <div className="font-mono text-xs md:text-sm">
              <div className="text-green-400">IP: {device.ip}</div>
              <div className="text-gray-400">MAC: {device.mac}</div>
              <div className="text-blue-400">OS: {device.os}</div>
              <div className="text-purple-400">Ports: {device.ports}</div>
            </div>
          </motion.div>
        ))}
        {devices.length === 0 && !scanning && (
          <p className="text-gray-500 text-center mt-8 text-xs md:text-sm">No devices found. Start a scan.</p>
        )}
      </div>
    </div>
  );
}

function EncryptionGame({ onClose }: { onClose: () => void }) {
  const [text, setText] = useState('');
  const [encrypted, setEncrypted] = useState('');
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');

  const caesar = (str: string, shift: number) => {
    return str.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26) + base);
      }
      return char;
    }).join('');
  };

  const handleEncrypt = () => {
    if (mode === 'encrypt') {
      setEncrypted(btoa(caesar(text, 13)));
    } else {
      try {
        setEncrypted(caesar(atob(text), 13));
      } catch {
        setEncrypted('Invalid encrypted text');
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Encryption Challenge
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('encrypt')}
          className={`flex-1 p-2 md:p-3 rounded-xl font-mono text-xs md:text-sm ${
            mode === 'encrypt' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-black/30 text-gray-400'
          }`}
        >
          Encrypt
        </button>
        <button
          onClick={() => setMode('decrypt')}
          className={`flex-1 p-2 md:p-3 rounded-xl font-mono text-xs md:text-sm ${
            mode === 'decrypt' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-black/30 text-gray-400'
          }`}
        >
          Decrypt
        </button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={mode === 'encrypt' ? 'Enter text to encrypt...' : 'Enter encrypted text...'}
        className="w-full bg-black/50 border border-blue-500/30 rounded-xl p-3 md:p-4 text-white font-mono text-xs md:text-sm mb-4 outline-none focus:border-purple-500/60 min-h-[80px] md:min-h-[100px]"
      />
      <button
        onClick={handleEncrypt}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-mono rounded-xl p-3 md:p-4 mb-4 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm md:text-base"
      >
        {mode === 'encrypt' ? 'Encrypt Message' : 'Decrypt Message'}
      </button>
      {encrypted && (
        <div className="bg-black/50 border border-purple-500/30 rounded-xl p-3 md:p-4">
          <p className="text-xs text-gray-400 mb-2">Result:</p>
          <p className="font-mono text-xs md:text-sm text-green-400 break-all">{encrypted}</p>
        </div>
      )}
    </div>
  );
}

function SQLGame({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any>(null);

  const testQuery = () => {
    const vulnerable = query.toLowerCase().includes("' or '1'='1") || 
                      query.toLowerCase().includes("' or 1=1") ||
                      query.toLowerCase().includes('-- ');
    
    if (vulnerable) {
      setResult({
        success: true,
        message: '🎯 SQL Injection Successful!',
        data: [
          { id: 1, username: 'admin', password: 'admin123' },
          { id: 2, username: 'user', password: 'pass456' },
        ]
      });
    } else {
      setResult({
        success: false,
        message: '❌ Query failed. Try SQL injection!',
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          SQL Injection Simulator
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <div className="bg-black/30 p-3 md:p-4 rounded-xl mb-4">
        <p className="text-xs md:text-sm text-gray-400 mb-2">Challenge: Bypass the login</p>
        <code className="text-xs text-blue-400">SELECT * FROM users WHERE username = '{'{'}input{'}'}'</code>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter username..."
        className="w-full bg-black/50 border border-blue-500/30 rounded-xl p-3 md:p-4 text-white font-mono text-xs md:text-sm mb-4 outline-none focus:border-purple-500/60"
      />
      <button
        onClick={testQuery}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-mono rounded-xl p-3 md:p-4 mb-4 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm md:text-base"
      >
        Execute Query
      </button>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 md:p-4 rounded-xl ${
            result.success ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'
          }`}
        >
          <p className="font-mono text-xs md:text-sm mb-2">{result.message}</p>
          {result.data && (
            <div className="mt-3 space-y-2">
              {result.data.map((row: any, i: number) => (
                <div key={i} className="text-xs bg-black/30 p-2 rounded">
                  <div className="text-green-400">User: {row.username}</div>
                  <div className="text-yellow-400">Pass: {row.password}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
      <div className="mt-4 p-3 bg-black/20 rounded-xl">
        <p className="text-xs text-gray-500">💡 Hint: Try ' or '1'='1</p>
      </div>
    </div>
  );
}
