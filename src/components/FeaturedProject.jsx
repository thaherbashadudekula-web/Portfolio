import React from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Activity, 
  ArrowUpRight,
  Lock,
  RefreshCw
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProject } from '../data/portfolioData';

export default function FeaturedProject() {

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-dark-900/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>04 // FLAGSHIP PROJECT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Innovation
          </h2>
          <p className="mt-2 text-base text-slate-300 max-w-2xl">
            A deep-dive into an end-to-end full-stack platform combining real-time MERN architecture with fraud risk scoring.
          </p>
        </div>

        {/* Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Project Information */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan mb-2">
              {featuredProject.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mb-2">
              {featuredProject.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-accent-cyan-light/90 mb-4">
              {featuredProject.subtitle}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {featuredProject.description}
            </p>

            {/* Key Highlights Metrics */}
            <div className="grid grid-cols-3 gap-3 w-full mb-6 py-4 border-y border-white/[0.08]">
              {featuredProject.keyHighlights.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold font-mono text-slate-100">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-semibold text-accent-cyan">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {stat.caption}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Feature Bullet Points */}
            <div className="space-y-2.5 mb-8 w-full">
              {featuredProject.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-850 text-slate-300 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-shine-effect inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-accent-cyan hover:bg-accent-cyan-light shadow-glow-cyan transition-all duration-300"
              >
                <span>Live Interactive Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Browser Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="relative group">
              {/* Subtle ambient backglow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-cyan/20 to-accent-blue/20 rounded-2xl blur-xl opacity-75 pointer-events-none" />

              <div className="relative rounded-2xl bg-dark-900 border border-white/[0.12] shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Browser Top Navigation Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-dark-850 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* Browser URL Input */}
                  <div className="flex-1 max-w-xs mx-3 px-3 py-1 rounded-lg bg-dark-950/80 border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5 truncate">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span className="text-slate-300 truncate">{featuredProject.browserUrl}</span>
                    </div>
                    <RefreshCw className="w-3 h-3 text-slate-500 shrink-0 ml-1" />
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 hidden sm:inline">LIVE STREAM</span>
                  </div>
                </div>

                {/* Browser Content Body: Realistic Dashboard Simulation */}
                <div className="p-4 sm:p-6 bg-dark-950/95 space-y-4">
                  
                  {/* Top telemetry bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-accent-cyan" />
                      <span className="text-xs font-semibold text-slate-200">
                        Live Threat Detection Matrix
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      WebSocket Connected (9ms)
                    </span>
                  </div>

                  {/* Threat Metric Cards */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-2.5 rounded-xl bg-dark-900 border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400">Threat Score</span>
                      <p className="text-sm sm:text-base font-bold text-emerald-400">0.08 (Low)</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-dark-900 border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400">Intercepted</span>
                      <p className="text-sm sm:text-base font-bold text-amber-400">14 Flagged</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-dark-900 border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400">Auth Throughput</span>
                      <p className="text-sm sm:text-base font-bold text-accent-cyan">4.8k / sec</p>
                    </div>
                  </div>

                  {/* Simulated Live Transaction Stream */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Recent Streamed Transactions
                    </span>

                    {[
                      { id: "TX-94812", amount: "$1,240.00", ip: "192.168.1.42", risk: "APPROVED", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                      { id: "TX-94813", amount: "$14,990.00", ip: "45.134.20.1", risk: "SUSPICIOUS", statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                      { id: "TX-94814", amount: "$38.50", ip: "103.21.244.0", risk: "APPROVED", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                      { id: "TX-94815", amount: "$8,500.00", ip: "185.220.101.5", risk: "BLOCKED", statusColor: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
                    ].map((txn) => (
                      <div
                        key={txn.id}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-dark-900/80 border border-white/[0.04] text-xs font-mono"
                      >
                        <div className="flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-accent-cyan" />
                          <span className="text-slate-300">{txn.id}</span>
                          <span className="text-slate-500 hidden sm:inline">{txn.ip}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-200 font-semibold">{txn.amount}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded border ${txn.statusColor}`}>
                            {txn.risk}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Browser Footer Banner */}
                  <div className="p-2.5 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 flex items-center justify-between text-[11px]">
                    <span className="text-slate-300">
                      Protected by ML Heuristics & MongoDB Aggregations
                    </span>
                    <span className="text-accent-cyan font-mono font-semibold">
                      v2.0 Active
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
