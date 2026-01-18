import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function InteractiveGames() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const renderGame = (id: string) => {
    const onClose = () => setActiveGame(null);
    switch(id) {
      case 'hash': return <PasswordHasher onClose={onClose} />;
      case 'base64': return <Base64Tool onClose={onClose} />;
      case 'random': return <PasswordGenerator onClose={onClose} />;
      case 'color': return <ColorConverter onClose={onClose} />;
      case 'text': return <TextTools onClose={onClose} />;
      case 'calc': return <SimpleCalc onClose={onClose} />;
      default: return null;
    }
  };

  const games = [
    { id: 'hash', name: 'Password Hasher' },
    { id: 'base64', name: 'Base64 Encoder' },
    { id: 'random', name: 'Password Generator' },
    { id: 'color', name: 'Color Converter' },
    { id: 'text', name: 'Text Tools' },
    { id: 'calc', name: 'Simple Calc' },
  ];

  return (
    <section id="games" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-mono mb-4 md:mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            UTILITY TOOLS
          </span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 text-sm md:text-base">
          Useful tools for developers and security enthusiasts
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
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
              className={`p-4 md:p-6 bg-gradient-to-br from-slate-900/80 via-blue-950/50 to-purple-950/50 border rounded-xl md:rounded-2xl backdrop-blur-xl transition-all cursor-pointer font-mono text-sm md:text-base font-bold ${
                activeGame === game.id ? 'border-purple-500/70 shadow-lg shadow-purple-500/30' : 'border-blue-500/30 hover:border-purple-500/60'
              }`}
            >
              {game.name}
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
              {renderGame(activeGame)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function PasswordHasher({ onClose }: { onClose: () => void }) {
  const [password, setPassword] = useState('');
  const [hash, setHash] = useState('');

  const hashPassword = async () => {
    if (!password) return;
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          SHA-256 Password Hasher
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password to hash..."
        className="w-full bg-black/50 border border-blue-500/30 rounded-lg p-3 text-white mb-4 outline-none focus:border-purple-500/60"
      />
      <button
        onClick={hashPassword}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg p-3 mb-4 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
      >
        Hash Password
      </button>
      {hash && (
        <div className="bg-black/50 border border-green-500/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-2">SHA-256 Hash:</p>
          <p className="font-mono text-xs text-green-400 break-all">{hash}</p>
        </div>
      )}
    </div>
  );
}

function Base64Tool({ onClose }: { onClose: () => void }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const process = () => {
    if (!input) return;
    try {
      if (mode === 'encode') {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (e) {
      setOutput('Error: Invalid input');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Base64 Tool
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('encode')}
          className={`flex-1 p-2 rounded-lg font-bold ${mode === 'encode' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-black/30 text-gray-400'}`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`flex-1 p-2 rounded-lg font-bold ${mode === 'decode' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-black/30 text-gray-400'}`}
        >
          Decode
        </button>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text..."
        className="w-full bg-black/50 border border-blue-500/30 rounded-lg p-3 text-white mb-4 min-h-[80px] outline-none focus:border-purple-500/60"
      />
      <button
        onClick={process}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg p-3 mb-4 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
      >
        {mode === 'encode' ? 'Encode' : 'Decode'}
      </button>
      {output && (
        <div className="bg-black/50 border border-green-500/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-2">Result:</p>
          <p className="font-mono text-xs text-green-400 break-all">{output}</p>
        </div>
      )}
    </div>
  );
}

function PasswordGenerator({ onClose }: { onClose: () => void }) {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState('');
  const [useSpecial, setUseSpecial] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);

  const generate = () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let chars = lower + upper;
    if (useNumbers) chars += numbers;
    if (useSpecial) chars += special;
    
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Password Generator
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-gray-400 text-sm">Length: {length}</label>
          <input
            type="range"
            min="8"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <label className="flex items-center gap-2 text-gray-300">
          <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} />
          Include Numbers
        </label>
        <label className="flex items-center gap-2 text-gray-300">
          <input type="checkbox" checked={useSpecial} onChange={(e) => setUseSpecial(e.target.checked)} />
          Include Special Characters
        </label>
      </div>
      <button
        onClick={generate}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg p-3 mt-4 mb-4 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
      >
        Generate Password
      </button>
      {password && (
        <div className="bg-black/50 border border-green-500/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-2">Generated Password:</p>
          <p className="font-mono text-sm text-green-400 break-all">{password}</p>
        </div>
      )}
    </div>
  );
}

function ColorConverter({ onClose }: { onClose: () => void }) {
  const [color, setColor] = useState('#3B82F6');
  const [rgb, setRgb] = useState('59, 130, 246');
  const [hex, setHex] = useState('3B82F6');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    const r = parseInt(newColor.slice(1, 3), 16);
    const g = parseInt(newColor.slice(3, 5), 16);
    const b = parseInt(newColor.slice(5, 7), 16);
    setRgb(`${r}, ${g}, ${b}`);
    setHex(newColor.slice(1).toUpperCase());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Color Converter
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <div className="flex gap-4 mb-6">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-20 h-20 rounded-lg cursor-pointer"
        />
        <div className="flex-1 bg-black/50 border border-blue-500/30 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-2">HEX:</p>
          <p className="font-mono text-lg text-green-400">{color}</p>
        </div>
      </div>
      <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
        <p className="text-gray-400 text-sm mb-2">RGB:</p>
        <p className="font-mono text-lg text-purple-400">rgb({rgb})</p>
      </div>
    </div>
  );
}

function TextTools({ onClose }: { onClose: () => void }) {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const uppercase = () => setResult(text.toUpperCase());
  const lowercase = () => setResult(text.toLowerCase());
  const reverse = () => setResult(text.split('').reverse().join(''));
  const removeSpaces = () => setResult(text.replace(/\s+/g, ''));
  const wordCount = () => setResult(`Words: ${text.trim().split(/\s+/).length}, Characters: ${text.length}`);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Text Tools
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        className="w-full bg-black/50 border border-blue-500/30 rounded-lg p-3 text-white mb-4 min-h-[80px] outline-none focus:border-purple-500/60"
      />
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button onClick={uppercase} className="bg-blue-600 text-white font-bold p-2 rounded hover:bg-blue-700">UPPER</button>
        <button onClick={lowercase} className="bg-blue-600 text-white font-bold p-2 rounded hover:bg-blue-700">lower</button>
        <button onClick={reverse} className="bg-blue-600 text-white font-bold p-2 rounded hover:bg-blue-700">Reverse</button>
        <button onClick={removeSpaces} className="bg-blue-600 text-white font-bold p-2 rounded hover:bg-blue-700">NoSpaces</button>
      </div>
      <button onClick={wordCount} className="w-full bg-purple-600 text-white font-bold p-2 rounded mb-4 hover:bg-purple-700">Count</button>
      {result && (
        <div className="bg-black/50 border border-green-500/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-2">Result:</p>
          <p className="font-mono text-sm text-green-400 break-all">{result}</p>
        </div>
      )}
    </div>
  );
}

function SimpleCalc({ onClose }: { onClose: () => void }) {
  const [display, setDisplay] = useState('0');
  const [input, setInput] = useState('');

  const handleNumber = (num: string) => {
    setInput(input + num);
    setDisplay(input + num || '0');
  };

  const handleOperator = (op: string) => {
    if (input) setInput(input + op);
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setDisplay(result.toString());
      setInput(result.toString());
    } catch {
      setDisplay('Error');
      setInput('');
    }
  };

  const clear = () => {
    setInput('');
    setDisplay('0');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Simple Calculator
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
      </div>
      <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4 mb-4">
        <p className="text-right text-2xl font-mono text-green-400 break-all">{display}</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map(btn => (
          <button key={btn} onClick={() => btn === '/' ? handleOperator('/') : handleNumber(btn)} className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">
            {btn}
          </button>
        ))}
        {['4', '5', '6', '*'].map(btn => (
          <button key={btn} onClick={() => btn === '*' ? handleOperator('*') : handleNumber(btn)} className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">
            {btn}
          </button>
        ))}
        {['1', '2', '3', '-'].map(btn => (
          <button key={btn} onClick={() => btn === '-' ? handleOperator('-') : handleNumber(btn)} className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">
            {btn}
          </button>
        ))}
        {['0', '.', '=', '+'].map(btn => {
          if (btn === '=') return <button key={btn} onClick={calculate} className="bg-green-600 text-white p-3 rounded font-bold hover:bg-green-700">=</button>;
          if (btn === '+') return <button key={btn} onClick={() => handleOperator('+')} className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">+</button>;
          return <button key={btn} onClick={() => handleNumber(btn)} className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">{btn}</button>;
        })}
      </div>
      <button onClick={clear} className="w-full bg-red-600 text-white font-bold p-3 rounded mt-4 hover:bg-red-700">
        Clear
      </button>
    </div>
  );
}
