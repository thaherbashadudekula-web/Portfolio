import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { curatedProjects } from '../data/portfolioData';

// 3D Tilt Card Component
function ProjectCard({ project }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-panel p-6 sm:p-7 rounded-2xl border-white/[0.08] hover:border-accent-cyan/40 transition-colors duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top subtle highlight gradient */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none transition-opacity group-hover:opacity-100 opacity-40" 
        aria-hidden="true" 
      />

      <div>
        {/* Header: Badge & Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
            {project.featuredBadge}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent-cyan transition-colors mb-1.5 flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan" />
        </h3>
        <p className="text-xs font-semibold text-accent-cyan-light/80 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-dark-850 text-slate-300 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-100 transition-colors p-1"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-accent-cyan hover:bg-accent-cyan-light transition-all shadow-sm"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              <span>05 // FULL-STACK PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Curated Web Applications
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-xl">
              Scalable, full-stack applications showcasing end-to-end MERN architecture.
            </p>
          </div>

          <span className="text-xs font-mono text-slate-400">
            Interactive 3D Cards • Click to test
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
