import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Zap, 
  Code2 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const philosophies = [
    {
      title: "Clean Code & Modularity",
      description: "Writing self-documenting code, strictly separated concerns, reusable component architectures, and robust type safety.",
      icon: Code2,
      accent: "text-accent-cyan"
    },
    {
      title: "Scalable Data Modeling",
      description: "Designing indexed MongoDB collections, normalized relationship models, and high-efficiency aggregation pipelines.",
      icon: Layers,
      accent: "text-accent-blue"
    },
    {
      title: "Performance & UX Depth",
      description: "Prioritizing low Core Web Vitals, minimal layout shifts, instant API responses, and smooth, accessible micro-interactions.",
      icon: Zap,
      accent: "text-accent-violet"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering with Purpose & Precision
          </h2>
          <p className="mt-3 text-base text-slate-300 max-w-2xl">
            A developer who bridges client-side delight with server-side resilience.
          </p>
        </div>

        {/* Grid: Highlighted Photo on Left + Story & Stats on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Highlighted Profile Picture with Hover Effect */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm cursor-pointer">
              {/* Ambient glowing gradient behind photo */}
              <div 
                className="absolute -inset-2 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet rounded-3xl blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 animate-pulse-glow" 
                aria-hidden="true" 
              />
              
              {/* Main Portrait Frame with Hover Interactions */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border-2 border-accent-cyan/40 group-hover:border-accent-cyan transition-all duration-500 shadow-2xl bg-dark-900 aspect-[3/4] flex flex-col justify-end">
                <img
                  src={personalData.profileImage}
                  alt={personalData.displayName}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gradient vignette mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-dark-950/80 border border-emerald-500/30 backdrop-blur-md text-[11px] font-mono text-emerald-300 shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </div>

                {/* Floating Bottom Card Details */}
                <div className="relative z-10 p-5 flex flex-col justify-end">
                  <span className="text-xs font-mono text-accent-cyan font-semibold flex items-center gap-1.5 mb-1">
                    MERN Stack Developer
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-100 tracking-tight">
                    {personalData.displayName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 font-mono">
                    {personalData.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Text & Checklist */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            {personalData.aboutStory.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Values checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Modern React 19 & Hooks",
                "Node.js & Express REST APIs",
                "MongoDB Schema Optimization",
                "JWT & Secure Middleware",
                "Tailwind CSS Responsive UI",
                "Git & Clean Pull Requests"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Honest Metric Stats Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-3.5 rounded-xl border-white/[0.08] hover:border-accent-cyan/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <span className="text-2xl font-extrabold font-mono text-gradient-cyan-violet">
                    {stat.value}
                  </span>
                  <div className="mt-1">
                    <h4 className="text-xs font-semibold text-slate-100">
                      {stat.label}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Philosophy Cards Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border-white/[0.07] hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center mb-4 group-hover:border-accent-cyan/40 transition-colors">
                  <IconComponent className={`w-5 h-5 ${card.accent}`} />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
