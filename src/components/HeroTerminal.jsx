import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Activity, 
  Lock, 
  RefreshCw, 
  Copy, 
  Check, 
  Code2, 
  LayoutDashboard,
  FileCode2,
  Atom,
  Server,
  Database,
  Brain
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function HeroTerminal() {
  const [activeView, setActiveView] = useState('overview'); // 'overview' | 'code' | 'config'
  const [copied, setCopied] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const developerCode = `// Full-Stack / MERN Developer Specification
export const developer: DeveloperProfile = {
  name: "${personalData.displayName}",
  role: "Full-Stack MERN Developer",
  education: {
    degree: "B.Tech CSE (Artificial Intelligence)",
    cgpa: "8.7 / 10",
    university: "MRU Hyderabad"
  },
  coreArchitecture: {
    client: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    server: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
    database: ["MongoDB Atlas", "PostgreSQL", "Prisma ORM", "Redis"],
    ai_rag: ["Multi-Agent RAG", "Qdrant Vector DB", "Hybrid Retrieval"]
  },
  availableForHire: true,
  mission: "Crafting robust full-stack software that scales gracefully."
};`;

  const stackConfigJson = `{
  "developer": "Thaher Basha Dudekula",
  "specialization": "MERN Stack & AI Systems",
  "client_stack": {
    "framework": "React.js 19",
    "language": "TypeScript / JavaScript ES6+",
    "styling": "Tailwind CSS (Utility-First Design)",
    "bundler": "Vite ESM"
  },
  "backend_stack": {
    "runtime": "Node.js (Event-driven asynchronous I/O)",
    "framework": "Express.js REST APIs",
    "realtime": "Socket.IO Event Streaming",
    "auth": "JWT Stateless + Bcrypt Hashing"
  },
  "databases": {
    "nosql": "MongoDB + Mongoose Aggregations",
    "relational": "PostgreSQL + Prisma ORM (ACID)",
    "caching": "Redis Key-Value & BullMQ Queues",
    "vector": "Qdrant Dense Embedding Index"
  }
}`;

  const handleCopy = () => {
    const textToCopy = activeView === 'config' ? stackConfigJson : developerCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Subtle ambient backglow */}
      <div 
        className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-500/20 to-sky-300/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Window Container */}
      <div className="relative rounded-3xl bg-white/95 border border-sky-200/90 shadow-2xl shadow-sky-100/70 overflow-hidden backdrop-blur-xl transition-all duration-300">
        
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-sky-50/50 border-b border-sky-100">
          {/* Traffic light control dots */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-xs" />
          </div>

          {/* Centered Browser Address Bar */}
          <div className="flex-1 max-w-xs mx-3 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/80 flex items-center justify-between text-xs font-mono text-slate-700 shadow-xs">
            <div className="flex items-center gap-1.5 truncate">
              <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
              <span className="text-slate-600 truncate text-[11px]">
                https://thaherbasha.dev/{activeView === 'overview' ? 'profile' : activeView === 'code' ? 'developer.ts' : 'stack.json'}
              </span>
            </div>
            <button
              type="button"
              onClick={handleRefresh}
              className="text-slate-400 hover:text-sky-600 transition-colors p-0.5 ml-1"
              title="Refresh telemetry"
              aria-label="Refresh view"
            >
              <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-sky-600' : ''}`} />
            </button>
          </div>

          {/* Live Status Indicator */}
          <div className="flex items-center gap-1.5 text-xs shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-600 font-bold tracking-wider hidden sm:inline">
              LIVE READY
            </span>
          </div>
        </div>

        {/* View Switcher Tabs (Dashboard vs Code vs Config) */}
        <div className="flex items-center justify-between px-4 pt-2.5 pb-2 bg-sky-50/30 border-b border-sky-100/80 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveView('overview')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                activeView === 'overview'
                  ? 'bg-white text-sky-700 font-semibold shadow-xs border border-sky-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LayoutDashboard className="w-3 h-3 text-sky-600" />
              <span>Overview</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('code')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                activeView === 'code'
                  ? 'bg-white text-sky-700 font-semibold shadow-xs border border-sky-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Code2 className="w-3 h-3 text-sky-600" />
              <span>developer.ts</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('config')}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                activeView === 'config'
                  ? 'bg-white text-sky-700 font-semibold shadow-xs border border-sky-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileCode2 className="w-3 h-3 text-sky-600" />
              <span>stack.config</span>
            </button>
          </div>

          {(activeView === 'code' || activeView === 'config') && (
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-sky-200/80 text-[11px] font-mono text-slate-600 hover:text-sky-600 shadow-xs transition-colors"
              title="Copy snippet"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 bg-white space-y-4">
          <AnimatePresence mode="wait">
            {activeView === 'overview' ? (
              /* ================= OVERVIEW VIEW (1:1 THEME MATCH) ================= */
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Subheader: Developer Name & Core Specialization */}
                <div className="flex items-center justify-between pb-3 border-b border-sky-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                        {personalData.displayName}
                      </h3>
                      <span className="text-[10px] text-slate-500 font-mono block">
                        Full-Stack MERN & AI Systems Developer
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium whitespace-nowrap shadow-xs">
                    Available for Hire (2026 Batch)
                  </span>
                </div>

                {/* Three Key Summary Metric Cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-2xl bg-white border border-sky-100 shadow-xs hover:border-sky-400 hover:shadow-md hover:shadow-sky-100/90 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group cursor-default">
                    <span className="text-[10px] text-slate-500 font-medium block group-hover:text-sky-600 transition-colors">Core Stack</span>
                    <p className="text-sm sm:text-base font-bold text-sky-600 mt-0.5 group-hover:scale-105 transition-transform origin-left">MERN Stack</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-sky-100 shadow-xs hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-100/80 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group cursor-default">
                    <span className="text-[10px] text-slate-500 font-medium block group-hover:text-emerald-600 transition-colors">Architecture</span>
                    <p className="text-sm sm:text-base font-bold text-emerald-600 mt-0.5 group-hover:scale-105 transition-transform origin-left">React + Node</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-sky-100 shadow-xs hover:border-blue-400 hover:shadow-md hover:shadow-blue-100/80 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group cursor-default">
                    <span className="text-[10px] text-slate-500 font-medium block group-hover:text-blue-600 transition-colors">Databases</span>
                    <p className="text-sm sm:text-base font-bold text-blue-600 mt-0.5 group-hover:scale-105 transition-transform origin-left">Mongo + SQL</p>
                  </div>
                </div>

                {/* Structured Engineering Telemetry Rows */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                    Verified Full-Stack Telemetry
                  </span>

                  <div className="space-y-2">
                    {/* Row 1: Frontend */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sky-100/90 hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-sm hover:translate-x-1.5 text-xs font-mono shadow-xs transition-all duration-200 group cursor-default">
                      <div className="flex items-center gap-2 truncate">
                        <Atom className="w-3.5 h-3.5 text-sky-600 shrink-0 group-hover:rotate-180 transition-transform duration-700" />
                        <span className="text-slate-900 font-bold shrink-0 group-hover:text-sky-600 transition-colors">[FRONTEND]</span>
                        <span className="text-slate-600 truncate text-[11px] sm:text-xs">
                          React 19 • TypeScript • Tailwind CSS • Vite
                        </span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded border font-mono font-semibold bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0 ml-2 group-hover:scale-105 transition-transform">
                        PRODUCTION
                      </span>
                    </div>

                    {/* Row 2: Backend */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sky-100/90 hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-sm hover:translate-x-1.5 text-xs font-mono shadow-xs transition-all duration-200 group cursor-default">
                      <div className="flex items-center gap-2 truncate">
                        <Server className="w-3.5 h-3.5 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-900 font-bold shrink-0 group-hover:text-blue-600 transition-colors">[BACKEND]</span>
                        <span className="text-slate-600 truncate text-[11px] sm:text-xs">
                          Node.js • Express.js • REST APIs • Socket.IO
                        </span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded border font-mono font-semibold bg-sky-50 text-sky-700 border-sky-200 shrink-0 ml-2 group-hover:scale-105 transition-transform">
                        REST / WS
                      </span>
                    </div>

                    {/* Row 3: Database */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sky-100/90 hover:border-amber-300 hover:bg-amber-50/40 hover:shadow-sm hover:translate-x-1.5 text-xs font-mono shadow-xs transition-all duration-200 group cursor-default">
                      <div className="flex items-center gap-2 truncate">
                        <Database className="w-3.5 h-3.5 text-amber-600 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-900 font-bold shrink-0 group-hover:text-amber-600 transition-colors">[DATABASE]</span>
                        <span className="text-slate-600 truncate text-[11px] sm:text-xs">
                          MongoDB Atlas • PostgreSQL • Prisma • Redis
                        </span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded border font-mono font-semibold bg-amber-50 text-amber-700 border-amber-200 shrink-0 ml-2 group-hover:scale-105 transition-transform">
                        ACID & NOSQL
                      </span>
                    </div>

                    {/* Row 4: AI & Innovation */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sky-100/90 hover:border-purple-300 hover:bg-purple-50/40 hover:shadow-sm hover:translate-x-1.5 text-xs font-mono shadow-xs transition-all duration-200 group cursor-default">
                      <div className="flex items-center gap-2 truncate">
                        <Brain className="w-3.5 h-3.5 text-purple-600 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-900 font-bold shrink-0 group-hover:text-purple-600 transition-colors">[INNOVATION]</span>
                        <span className="text-slate-600 truncate text-[11px] sm:text-xs">
                          ResQAI • Multi-Agent RAG • Qdrant Vector DB
                        </span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded border font-mono font-semibold bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0 ml-2 group-hover:scale-105 transition-transform animate-pulse">
                        GROUNDED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Banner */}
                <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-200/60 hover:border-sky-300 hover:bg-sky-50/90 transition-all flex items-center justify-between text-[11px] font-mono shadow-xs">
                  <span className="text-slate-600 font-medium truncate pr-2">
                    B.Tech CSE (AI) • 8.7 CGPA • Open for Internships
                  </span>
                  <span className="text-sky-600 font-bold shrink-0">
                    Hyderabad, India
                  </span>
                </div>
              </motion.div>
            ) : (
              /* ================= LIGHT-THEME CODE EDITOR VIEW ================= */
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-sky-50/40 border border-sky-100 p-4 font-mono text-xs leading-relaxed overflow-x-auto max-h-[380px]"
              >
                <pre className="text-slate-800">
                  <code>
                    {activeView === 'code' ? (
                      <>
                        <span className="text-slate-400">// Full-Stack / MERN Developer Specification</span>{'\n'}
                        <span className="text-purple-600 font-semibold">export const</span>{' '}
                        <span className="text-sky-700 font-semibold">developer</span>
                        <span className="text-slate-500">:</span>{' '}
                        <span className="text-emerald-600 font-semibold">DeveloperProfile</span>{' '}
                        <span className="text-slate-500">=</span> {'{\n'}
                        {'  '}<span className="text-sky-700 font-semibold">name</span>: <span className="text-emerald-700">"{personalData.displayName}"</span>,{'\n'}
                        {'  '}<span className="text-sky-700 font-semibold">role</span>: <span className="text-emerald-700">"Full-Stack MERN Developer"</span>,{'\n'}
                        {'  '}<span className="text-sky-700 font-semibold">education</span>: {'{\n'}
                        {'    '}<span className="text-sky-700 font-semibold">degree</span>: <span className="text-emerald-700">"B.Tech in CSE (Artificial Intelligence)"</span>,{'\n'}
                        {'    '}<span className="text-sky-700 font-semibold">cgpa</span>: <span className="text-emerald-700">"8.7 / 10"</span>,{'\n'}
                        {'    '}<span className="text-sky-700 font-semibold">university</span>: <span className="text-emerald-700">"MRU Hyderabad"</span>{'\n'}
                        {'  },\n'}
                        {'  '}<span className="text-sky-700 font-semibold">coreArchitecture</span>: {'{\n'}
                        {'    '}<span className="text-sky-700 font-semibold">client</span>: [<span className="text-emerald-700">"React.js"</span>, <span className="text-emerald-700">"TypeScript"</span>, <span className="text-emerald-700">"Tailwind CSS"</span>],{'\n'}
                        {'    '}<span className="text-sky-700 font-semibold">server</span>: [<span className="text-emerald-700">"Node.js"</span>, <span className="text-emerald-700">"Express.js"</span>, <span className="text-emerald-700">"REST APIs"</span>],{'\n'}
                        {'    '}<span className="text-sky-700 font-semibold">database</span>: [<span className="text-emerald-700">"MongoDB"</span>, <span className="text-emerald-700">"PostgreSQL"</span>, <span className="text-emerald-700">"Prisma"</span>, <span className="text-emerald-700">"Redis"</span>],{'\n'}
                        {'    '}<span className="text-sky-700 font-semibold">ai_rag</span>: [<span className="text-emerald-700">"Multi-Agent RAG"</span>, <span className="text-emerald-700">"Qdrant Vector DB"</span>]{'\n'}
                        {'  },\n'}
                        {'  '}<span className="text-sky-700 font-semibold">availableForHire</span>: <span className="text-blue-600 font-bold">true</span>,{'\n'}
                        {'  '}<span className="text-sky-700 font-semibold">mission</span>: <span className="text-emerald-700">"Crafting robust full-stack software that scales gracefully."</span>{'\n'}
                        {'};'}
                      </>
                    ) : (
                      <>
                        <span className="text-slate-400">// Stack Configuration Object</span>{'\n'}
                        <span className="text-slate-700">{stackConfigJson}</span>
                      </>
                    )}
                  </code>
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
