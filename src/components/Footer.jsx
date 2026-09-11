import React from 'react';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-dark-950 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-accent-cyan shadow-sm">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-100 block text-base">
                {personalData.displayName}
              </span>
              <span className="text-xs font-mono text-accent-cyan-light/80">
                MERN Stack Developer & Full-Stack Architect
              </span>
            </div>
          </div>

          {/* Quick Nav Anchor Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <li><a href="#about" className="hover:text-slate-200 transition-colors">About</a></li>
            <li><a href="#what-i-build" className="hover:text-slate-200 transition-colors">What I Build</a></li>
            <li><a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-slate-200 transition-colors">Projects</a></li>
            <li><a href="#journey" className="hover:text-slate-200 transition-colors">Journey</a></li>
            <li><a href="#github" className="hover:text-slate-200 transition-colors">GitHub</a></li>
            <li><a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a></li>
          </ul>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-850 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-accent-cyan/40 transition-all focus-visible:ring-1 focus-visible:ring-accent-cyan"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent-cyan" />
          </button>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalData.displayName}. Built with React 19, Tailwind CSS & Framer Motion.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
