import { useState } from 'react';
import { Lightbulb, LightbulbOff, Cpu } from 'lucide-react';

export default function LogicGateSimulator() {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);

  const outAND = inputA && inputB;
  const outOR = inputA || inputB;
  const outXOR = inputA !== inputB;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-6 font-sans">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
          <Cpu className="w-8 h-8 text-blue-400" />
          Simulador de Compuertas Lógicas
        </h2>
        <p className="text-slate-400 mt-2">Visualización de flujo de señales: AND, OR y XOR</p>
      </div>

      <div className="relative w-full max-w-4xl aspect-[4/3] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M 160 200 C 260 200, 260 140, 360 140" fill="none" stroke={inputA ? "#34d399" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />
          <path d="M 160 200 C 260 200, 260 290, 360 290" fill="none" stroke={inputA ? "#34d399" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />
          <path d="M 160 200 C 260 200, 260 440, 360 440" fill="none" stroke={inputA ? "#34d399" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />

          <path d="M 160 400 C 260 400, 260 160, 360 160" fill="none" stroke={inputB ? "#34d399" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />
          <path d="M 160 400 C 260 400, 260 310, 360 310" fill="none" stroke={inputB ? "#34d399" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />
          <path d="M 160 400 C 260 400, 260 460, 360 460" fill="none" stroke={inputB ? "#34d399" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />

          <path d="M 440 150 L 640 150" fill="none" stroke={outAND ? "#38bdf8" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />
          <path d="M 440 300 L 640 300" fill="none" stroke={outOR ? "#38bdf8" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />
          <path d="M 440 450 L 640 450" fill="none" stroke={outXOR ? "#38bdf8" : "#334155"} strokeWidth="4" className="transition-colors duration-300" />
        </svg>

        {/* INTERRUPTORES */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-3" style={{ top: '33.33%', left: '12.5%' }}>
          <span className="text-white font-mono font-bold text-lg">A</span>
          <button
            onClick={() => setInputA(!inputA)}
            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${inputA ? 'bg-emerald-500' : 'bg-slate-700'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${inputA ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-3" style={{ top: '66.67%', left: '12.5%' }}>
          <span className="text-white font-mono font-bold text-lg">B</span>
          <button
            onClick={() => setInputB(!inputB)}
            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${inputB ? 'bg-emerald-500' : 'bg-slate-700'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${inputB ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* COMPUERTAS */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center shadow-lg z-10" style={{ top: '25%', left: '50%' }}>
          <span className="text-white font-bold tracking-wider">AND</span>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center shadow-lg z-10" style={{ top: '50%', left: '50%' }}>
          <span className="text-white font-bold tracking-wider">OR</span>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center shadow-lg z-10" style={{ top: '75%', left: '50%' }}>
          <span className="text-white font-bold tracking-wider">XOR</span>
        </div>

        {/* RESULTADOS */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-4" style={{ top: '25%', left: '87.5%' }}>
          <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${outAND ? 'bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-800'}`}>
            {outAND ? <Lightbulb className="text-blue-400 w-6 h-6" /> : <LightbulbOff className="text-slate-500 w-6 h-6" />}
          </div>
          <span className={`font-mono font-bold text-lg transition-colors ${outAND ? 'text-blue-400' : 'text-slate-500'}`}>
            {outAND ? '1' : '0'}
          </span>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-4" style={{ top: '50%', left: '87.5%' }}>
          <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${outOR ? 'bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-800'}`}>
            {outOR ? <Lightbulb className="text-blue-400 w-6 h-6" /> : <LightbulbOff className="text-slate-500 w-6 h-6" />}
          </div>
          <span className={`font-mono font-bold text-lg transition-colors ${outOR ? 'text-blue-400' : 'text-slate-500'}`}>
            {outOR ? '1' : '0'}
          </span>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-4" style={{ top: '75%', left: '87.5%' }}>
          <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${outXOR ? 'bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-800'}`}>
            {outXOR ? <Lightbulb className="text-blue-400 w-6 h-6" /> : <LightbulbOff className="text-slate-500 w-6 h-6" />}
          </div>
          <span className={`font-mono font-bold text-lg transition-colors ${outXOR ? 'text-blue-400' : 'text-slate-500'}`}>
            {outXOR ? '1' : '0'}
          </span>
        </div>

      </div>
    </div>
  );
}