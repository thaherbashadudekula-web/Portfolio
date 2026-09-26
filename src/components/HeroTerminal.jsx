import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, Code, Database } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState('developer.ts');
  const [copied, setCopied] = useState(false);

  const files = {
    'developer.ts': `// Full-Stack / MERN Developer Specification
export const developer: Profile = {
  name: "${personalData.displayName}",
  title: "Full-Stack / MERN Developer",
  education: {
    program: "B.Tech in CSE (Artificial Intelligence)",
    university: "Malla Reddy Vishwavidhyapeeth",
    cgpa: "8.7 / 10"
  },
  flagshipProject: "ResQAI (Multi-Agent Disaster Intelligence)",
  stack: {
    languages: ["JavaScript", "C++", "Python", "SQL"],
    frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
    backend: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Bcrypt"],
    database: ["MongoDB", "PostgreSQL", "Prisma", "Redis", "Qdrant"],
    ai_rag: ["Multi-Agent RAG", "Embeddings", "Hybrid Retrieval", "RRF"]
  },
  hackathons: ["Smart India Hackathon (ILRDVS)", "Razorpay Hackathon (RazorAI)", "HackIT x MRDU'26"],
  status: "Open for Software Development / MERN Internships"
};`,
    'stack.config.json': `{
  "developer": "Thaher Basha Dudekula",
  "frontend": {
    "framework": "React.js",
    "tooling": "Vite",
    "styling": "Tailwind CSS",
    "languages": ["JavaScript", "HTML5", "CSS3"]
  },
  "backend": {
    "runtime": "Node.js",
    "framework": "Express.js",
    "protocols": ["REST APIs", "Socket.IO"],
    "security": ["JWT", "Bcrypt"]
  },
  "data_and_ai": {
    "databases": ["MongoDB", "PostgreSQL"],
    "orm": "Prisma",
    "vector_db": "Qdrant",
    "cache_queues": ["Redis", "BullMQ"],
    "rag_methods": ["Hybrid Retrieval", "RRF", "Reranking"]
  }
}`,
    'run.sh': `$ npm run dev:resqai
> Initializing multi-agent disaster intelligence cluster...
[client]   React + Vite frontend ready at http://localhost:5173/
[api]      Express & Node.js backend listening on port 5000
[db]       PostgreSQL connected via Prisma ORM (4ms)
[cache]    Redis & BullMQ worker queues initialized
[vector]   Qdrant vector index loaded with private disaster knowledge
[socket]   Socket.IO real-time token stream established
[health]   Cluster healthy. 0 errors, 0 warnings.`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(files[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background soft glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/20 via-accent-blue/20 to-accent-violet/20 rounded-2xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Terminal Window */}
      <div className="relative rounded-2xl bg-dark-900/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-dark-850/90 border-b border-white/[0.08] select-none">
          <div className="flex items-center gap-2">
            {/* macOS traffic light buttons */}
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
            <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-accent-cyan" />
              workspace ~ dev-terminal
            </span>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-800 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white hover:border-accent-cyan/40 transition-colors focus-visible:ring-1 focus-visible:ring-accent-cyan"
            title="Copy snippet"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center px-2 pt-1 bg-dark-850/50 border-b border-white/[0.06] overflow-x-auto text-xs font-mono">
          {Object.keys(files).map((fileName) => {
            const isSelected = activeTab === fileName;
            return (
              <button
                key={fileName}
                type="button"
                onClick={() => setActiveTab(fileName)}
                className={`px-3 py-1.5 rounded-t-lg transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                  isSelected
                    ? 'bg-dark-900 text-accent-cyan border-accent-cyan font-medium'
                    : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-white/[0.02]'
                }`}
              >
                <Code className="w-3 h-3" />
                {fileName}
              </button>
            );
          })}
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto max-h-[380px] selection:bg-accent-cyan/20">
          <pre className="text-slate-300">
            <code>
              {activeTab === 'developer.ts' && (
                <>
                  <span className="text-slate-500">// MERN Stack Developer Specification</span>{'\n'}
                  <span className="text-purple-400">export const</span>{' '}
                  <span className="text-blue-400">developer</span>:{' '}
                  <span className="text-emerald-400">Profile</span> = &#123;{'\n'}
                  {'  '}<span className="text-cyan-300">name</span>:{' '}
                  <span className="text-amber-300">"{personalData.displayName}"</span>,{'\n'}
                  {'  '}<span className="text-cyan-300">role</span>:{' '}
                  <span className="text-amber-300">"MERN Stack Developer"</span>,{'\n'}
                  {'  '}<span className="text-cyan-300">focus</span>:{' '}
                  <span className="text-slate-300">"Scalable backend APIs & high-performance React UI"</span>,{'\n'}
                  {'  '}<span className="text-cyan-300">architecture</span>: &#123;{'\n'}
                  {'    '}<span className="text-sky-300">client</span>: [
                  <span className="text-amber-300">"React 19"</span>,{' '}
                  <span className="text-amber-300">"TypeScript"</span>,{' '}
                  <span className="text-amber-300">"Tailwind"</span>],{'\n'}
                  {'    '}<span className="text-sky-300">server</span>: [
                  <span className="text-amber-300">"Node.js"</span>,{' '}
                  <span className="text-amber-300">"Express"</span>,{' '}
                  <span className="text-amber-300">"REST APIs"</span>],{'\n'}
                  {'    '}<span className="text-sky-300">database</span>: [
                  <span className="text-amber-300">"MongoDB"</span>,{' '}
                  <span className="text-amber-300">"Mongoose"</span>,{' '}
                  <span className="text-amber-300">"Indexing"</span>],{'\n'}
                  {'    '}<span className="text-sky-300">tooling</span>: [
                  <span className="text-amber-300">"Git"</span>,{' '}
                  <span className="text-amber-300">"Docker"</span>,{' '}
                  <span className="text-amber-300">"Postman"</span>]{'\n'}
                  {'  '}&#125;,{'\n'}
                  {'  '}<span className="text-cyan-300">availableForHire</span>:{' '}
                  <span className="text-emerald-400">true</span>,{'\n'}
                  {'  '}<span className="text-cyan-300">mission</span>:{' '}
                  <span className="text-amber-300">"Crafting modern software that scales gracefully."</span>{'\n'}
                  &#125;;
                </>
              )}
              {activeTab === 'stack.config.json' && (
                <>
                  <span className="text-slate-400">&#123;</span>{'\n'}
                  {'  '}<span className="text-cyan-300">"stack"</span>: <span className="text-amber-300">"MERN"</span>,{'\n'}
                  {'  '}<span className="text-cyan-300">"client"</span>: &#123;{'\n'}
                  {'    '}<span className="text-purple-300">"framework"</span>: <span className="text-amber-300">"React 19"</span>,{'\n'}
                  {'    '}<span className="text-purple-300">"bundler"</span>: <span className="text-amber-300">"Vite"</span>,{'\n'}
                  {'    '}<span className="text-purple-300">"styling"</span>: <span className="text-amber-300">"Tailwind CSS"</span>{'\n'}
                  {'  '}&#125;,{'\n'}
                  {'  '}<span className="text-cyan-300">"backend"</span>: &#123;{'\n'}
                  {'    '}<span className="text-purple-300">"runtime"</span>: <span className="text-amber-300">"Node.js"</span>,{'\n'}
                  {'    '}<span className="text-purple-300">"framework"</span>: <span className="text-amber-300">"Express.js"</span>,{'\n'}
                  {'    '}<span className="text-purple-300">"auth"</span>: <span className="text-amber-300">"JWT + HttpOnly Cookies"</span>{'\n'}
                  {'  '}&#125;,{'\n'}
                  {'  '}<span className="text-cyan-300">"database"</span>: &#123;{'\n'}
                  {'    '}<span className="text-purple-300">"engine"</span>: <span className="text-amber-300">"MongoDB Atlas"</span>,{'\n'}
                  {'    '}<span className="text-purple-300">"odm"</span>: <span className="text-amber-300">"Mongoose"</span>{'\n'}
                  {'  '}&#125;{'\n'}
                  <span className="text-slate-400">&#125;</span>
                </>
              )}
              {activeTab === 'run.sh' && (
                <div className="space-y-1 text-slate-300">
                  <p className="text-accent-cyan font-bold">$ npm run dev:fullstack</p>
                  <p className="text-slate-400">&gt; Concurrently starting client and backend cluster...</p>
                  <p className="text-emerald-400">[client]  Vite v6.1 ready in 142ms http://localhost:5173/</p>
                  <p className="text-sky-400">[server]  Node.js API listening on port 5000</p>
                  <p className="text-green-400">[db]      MongoDB Atlas cluster connected (12ms)</p>
                  <p className="text-violet-400">[auth]    JWT token authorization verified</p>
                  <p className="text-emerald-300 font-semibold">[system]  All health checks passed. 0 errors.</p>
                </div>
              )}
            </code>
          </pre>
        </div>

        {/* Terminal Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-dark-850/90 border-t border-white/[0.08] text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              main (clean)
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline">UTF-8</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-cyan">TypeScript 5.4</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">0 Errors</span>
          </div>
        </div>
      </div>

      {/* Floating Tech Badges around Terminal */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:flex items-center gap-2 absolute -bottom-5 -left-5 px-3.5 py-2 rounded-xl glass-panel border-accent-cyan/30 shadow-glow-cyan text-xs font-mono text-slate-200"
      >
        <span className="w-2 h-2 rounded-full bg-accent-cyan" />
        <span className="font-semibold text-accent-cyan">React</span> 19 + Node.js
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden md:flex items-center gap-2 absolute -top-4 -right-4 px-3.5 py-2 rounded-xl glass-panel border-accent-violet/30 shadow-glow-violet text-xs font-mono text-slate-200"
      >
        <Database className="w-3.5 h-3.5 text-accent-violet" />
        <span className="font-semibold text-accent-violet">MongoDB</span> Atlas
      </motion.div>
    </div>
  );
}
