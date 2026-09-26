import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/portfolioData';

/**
 * Preloader
 * Ultra-snappy branded loading splash screen (<600ms)
 * Never blocks the user unnecessarily
 */
export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Quick, elegant 600ms timer
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 650);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-slate-800 select-none pointer-events-none"
        >
          {/* Ambient center glow */}
          <div className="absolute w-72 h-72 rounded-full bg-sky-200/40 blur-3xl pointer-events-none animate-pulse-glow" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 relative z-10"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-300 flex items-center justify-center shadow-glow-cyan">
              <span className="font-mono font-bold text-sky-600 text-xl">&lt;/&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-base text-slate-900">
                {personalData.displayName}
              </span>
              <span className="text-xs font-mono text-sky-600">
                MERN Stack Developer
              </span>
            </div>
          </motion.div>

          {/* Micro progress line */}
          <div className="w-36 h-[2px] bg-sky-100 rounded-full mt-6 overflow-hidden relative">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full h-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
