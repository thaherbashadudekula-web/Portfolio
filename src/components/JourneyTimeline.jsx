import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Calendar 
} from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

const typeIcons = {
  'Work Experience': Briefcase,
  'Professional Role': Briefcase,
  'Achievement': Trophy,
  'Education': GraduationCap,
};

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-dark-900/20 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-violet/10 border border-accent-violet/20 text-xs font-mono text-accent-violet mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
            <span>06 // CAREER & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            My Journey
          </h2>
          <p className="mt-2 text-base text-slate-300 max-w-xl">
            A chronological roadmap of engineering roles, formal education, and milestones.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-12">
          {journeyMilestones.map((item, idx) => {
            const Icon = typeIcons[item.type] || Briefcase;
            return (
              <div key={idx} className="relative group">
                {/* Glowing Timeline Marker Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-dark-900 border-2 border-accent-cyan flex items-center justify-center shadow-glow-cyan">
                  <Icon className="w-3 h-3 text-accent-cyan" />
                </div>

                {/* Content Box */}
                <div className="glass-panel p-6 sm:p-7 rounded-2xl border-white/[0.08] hover:border-accent-cyan/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-accent-cyan-light mb-3">
                    {item.organization}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {item.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-md bg-dark-850 text-slate-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
