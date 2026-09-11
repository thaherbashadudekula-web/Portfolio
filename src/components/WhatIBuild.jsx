import React from 'react';
import { 
  Layout, 
  Server, 
  Layers, 
  Cpu, 
  CheckCircle 
} from 'lucide-react';
import { whatIBuild } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Layers: Layers,
  Cpu: Cpu,
};

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-24 relative overflow-hidden bg-dark-900/30 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-violet/10 border border-accent-violet/20 text-xs font-mono text-accent-violet mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
            <span>02 // ARCHITECTURE & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            What I Build
          </h2>
          <p className="mt-3 text-base text-slate-300 max-w-2xl">
            Four specialized areas where I design, engineer, and deploy modern software systems.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatIBuild.map((area) => {
            const Icon = iconMap[area.iconName] || Layers;
            return (
              <div
                key={area.id}
                className="glass-panel p-6 sm:p-8 rounded-2xl border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center group-hover:border-accent-cyan/50 group-hover:shadow-glow-cyan transition-all">
                      <Icon className="w-6 h-6 text-accent-cyan transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.07]">
                      {area.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent-cyan transition-colors mb-2.5">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
                  {area.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
