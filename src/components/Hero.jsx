import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Sparkles, 
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';
import HeroTerminal from './HeroTerminal';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.rotatingRoles.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleResumeClick = (e) => {
    if (personalData.resumeUrl === '#resume' || !personalData.resumeUrl) {
      e.preventDefault();
      // Graceful fallback for resume download/view
      alert(`Resume document: ${personalData.resumeFileName}\n\nTo link your actual PDF resume, update 'resumeUrl' in 'src/data/portfolioData.js'.`);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status & Currently Building Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/80 border border-emerald-500/20 text-xs font-medium text-emerald-300 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{personalData.availability}</span>
              </div>

              {/* Live Currently Building Badge */}
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan hover:bg-accent-cyan/15 transition-colors"
              >
                <Sparkles className="w-3 h-3 text-accent-cyan" />
                <span>WIP: <strong className="font-semibold text-slate-100">{personalData.currentlyBuilding.project}</strong></span>
              </a>
            </div>

            {/* Profile Avatar + Main Greeting Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-4">
              {/* Highlighted Profile Picture with Hover Effect */}
              <div className="relative group/avatar shrink-0">
                <div 
                  className="absolute -inset-1 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet rounded-2xl blur-md opacity-70 group-hover/avatar:opacity-100 group-hover/avatar:scale-105 transition-all duration-500 animate-pulse-glow" 
                  aria-hidden="true" 
                />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-accent-cyan/40 group-hover/avatar:border-accent-cyan shadow-xl bg-dark-900 transition-all duration-300 cursor-pointer">
                  <img
                    src={personalData.profileImage}
                    alt={personalData.displayName}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/avatar:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-1.5">
                    <span className="text-[10px] font-mono font-bold text-accent-cyan tracking-wider uppercase">
                      Thaher
                    </span>
                  </div>
                </div>
                {/* Active status pulse */}
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-dark-950" />
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block mb-1">
                  &lt;Hello World /&gt;
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
                  Hi, I'm{' '}
                  <span className="text-gradient-cyan-violet">
                    {personalData.displayName}
                  </span>
                </h1>
              </div>
            </div>

            {/* Rotating Role Cycler */}
            <div className="h-10 sm:h-12 flex items-center mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-accent-cyan-light flex items-center gap-2"
                >
                  <span className="text-slate-500 font-normal">&gt;</span>
                  <span>{personalData.rotatingRoles[roleIndex]}</span>
                  <span className="inline-block w-2.5 h-6 bg-accent-cyan animate-pulse ml-1" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {personalData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="btn-shine-effect w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-accent-cyan via-accent-cyan-light to-accent-blue hover:opacity-95 shadow-glow-cyan hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Let's Connect */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/80 hover:bg-dark-850 border border-white/10 hover:border-accent-cyan/40 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-accent-cyan" />
                <span>Let's Connect</span>
              </a>

              {/* Resume CTA (Functional & Configurable) */}
              <a
                href={personalData.resumeUrl}
                onClick={handleResumeClick}
                target={personalData.resumeUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-dark-900/40 hover:bg-dark-850 border border-white/[0.08] hover:border-accent-violet/40 transition-all duration-300 hover:-translate-y-0.5"
                title="Download Developer Resume"
              >
                <FileDown className="w-4 h-4 text-accent-violet" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Stack */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.08] w-full">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Connect:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-accent-cyan/40 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-accent-cyan/40 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-accent-cyan/40 transition-all"
                    aria-label="Direct Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>Location:</span>
                <span className="text-slate-300">{personalData.location}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual: Interactive Code Window */}
          <div className="lg:col-span-5 w-full">
            <HeroTerminal />
          </div>

        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
