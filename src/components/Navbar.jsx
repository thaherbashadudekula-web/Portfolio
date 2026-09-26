import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code2, Sparkles, FileDown } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What I Build', href: '#what-i-build' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'glass-panel shadow-lg shadow-sky-500/5 border-sky-200/70'
              : 'bg-transparent border border-transparent'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center transition-all duration-300 group-hover:border-accent-cyan/50 group-hover:shadow-glow-cyan">
              <Code2 className="w-4 h-4 text-accent-cyan transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight flex items-center gap-1.5">
                {personalData.displayName}
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-slate-500 hidden sm:block">
                MERN Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden xl:flex items-center gap-1 bg-white/80 p-1.5 rounded-xl border border-sky-200/70 shadow-sm backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-sky-600 font-semibold'
                        : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/80'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-sky-100/80 border border-sky-300/60 rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Resume & Let's Talk */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Small Resume Download Button */}
            <a
              href={personalData.resumeUrl}
              download={personalData.resumeFileName}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-sky-600 bg-white/95 hover:bg-sky-50 border border-sky-200/90 hover:border-sky-400 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              title="Download Resume (PDF)"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-600" />
              <span>Resume</span>
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="btn-shine-effect relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-glow-cyan hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-1.5">
            <a
              href={personalData.resumeUrl}
              download={personalData.resumeFileName}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-white border border-sky-200 text-slate-700 hover:text-sky-600 flex items-center gap-1 shadow-sm"
              title="Download Resume (PDF)"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-600" />
              <span>CV</span>
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-100 text-sky-700 border border-sky-200"
            >
              Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-slate-700 hover:text-sky-600 focus-visible:ring-2 focus-visible:ring-accent-cyan"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-4 rounded-2xl glass-panel border-white/10 shadow-2xl backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                          : 'text-slate-300 hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-semibold rounded-xl text-slate-950 bg-accent-cyan hover:bg-accent-cyan-light shadow-glow-cyan transition-colors"
              >
                Let's Build Together
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
