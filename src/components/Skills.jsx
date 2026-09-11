import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Server, 
  Database, 
  Cpu, 
  FileCode, 
  FileCode2, 
  Palette, 
  Globe, 
  Sparkles, 
  Network, 
  ShieldCheck, 
  Radio, 
  FileCheck, 
  Filter, 
  Table, 
  GitBranch, 
  Send, 
  Container, 
  Zap, 
  Cloud 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Atom,
  Server,
  Database,
  Cpu,
  FileCode,
  FileCode2,
  Palette,
  Globe,
  Sparkles,
  Network,
  ShieldCheck,
  Radio,
  FileCheck,
  Filter,
  Table,
  GitBranch,
  Send,
  Container,
  Zap,
  Cloud
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  // Collect all skills if "all" is active, or specific category
  const allSkills = skillCategories
    .filter((cat) => cat.skills)
    .flatMap((cat) => cat.skills);

  const displayedSkills = activeTab === 'all'
    ? allSkills
    : skillCategories.find((cat) => cat.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            <span>03 // TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-base text-slate-300 max-w-2xl">
            A comprehensive, verified toolset across client, server, databases, and DevOps.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/[0.06]">
          {skillCategories.map((category) => {
            const isSelected = activeTab === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] border border-transparent'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {displayedSkills.map((skill) => {
              const Icon = iconMap[skill.icon] || Cpu;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel p-4 rounded-xl border-white/[0.07] hover:border-accent-cyan/35 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center group-hover:border-accent-cyan/40 group-hover:shadow-glow-cyan transition-all">
                      <Icon className="w-5 h-5 text-accent-cyan transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                      {skill.proficiency}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-100 group-hover:text-accent-cyan-light transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">
                      {skill.experience}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
