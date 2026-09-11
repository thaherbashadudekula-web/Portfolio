import React from 'react';
import { techMarquee } from '../data/portfolioData';

export default function TechMarquee() {
  // Duplicate array for seamless infinite scroll
  const marqueeItems = [...techMarquee, ...techMarquee];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-dark-900/40 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <h2 className="text-xs sm:text-sm font-mono tracking-wider uppercase text-slate-300">
              Technologies I Work With
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Hover to inspect tech stack
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee-left hover:[animation-play-state:paused] py-2">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-panel-interactive cursor-default group"
            >
              <div 
                className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                style={{ backgroundColor: tech.color || '#06b6d4' }}
              />
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.05] whitespace-nowrap">
                {tech.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
