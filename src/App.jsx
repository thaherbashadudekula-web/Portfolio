import React from 'react';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import JourneyTimeline from './components/JourneyTimeline';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'home',
  'about',
  'what-i-build',
  'skills',
  'projects',
  'journey',
  'github',
  'contact'
];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 180);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900 relative overflow-x-hidden">
      {/* Lightweight Initial Branded Splash */}
      <Preloader />

      {/* Top Scroll Depth Bar */}
      <ScrollProgress />

      {/* Desktop Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Background Ambience: Floating Particles & Glowing Radial Blobs */}
      <BackgroundEffects />

      {/* Floating Glassmorphic Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <WhatIBuild />
        <Skills />
        <FeaturedProject />
        <Projects />
        <JourneyTimeline />
        <GithubActivity />
        <Contact />
      </main>

      {/* Minimalist Developer Footer */}
      <Footer />
    </div>
  );
}
