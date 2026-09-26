import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * CustomCursor
 * Completely replaces the native browser cursor on desktop.
 * Responsive, accurate, and provides magnetic interactive feedback on all clickable elements.
 */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverType, setHoverType] = useState('default'); // 'button' | 'text' | 'card'

  // Instant response for center dot (zero perceptible lag)
  const cursorX = useSpring(-100, { stiffness: 1000, damping: 45 });
  const cursorY = useSpring(-100, { stiffness: 1000, damping: 45 });

  // Smooth lagging follower ring
  const followerX = useSpring(-100, { stiffness: 320, damping: 28 });
  const followerY = useSpring(-100, { stiffness: 320, damping: 28 });

  useEffect(() => {
    // Only activate for fine pointer devices (mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onElementHover = (e) => {
      const target = e.target;
      const isInput = target.closest('input, textarea');
      const isButton = target.closest('button, a, [role="button"]');
      const isCard = target.closest('.glass-panel, .glass-panel-interactive, .interactive-card, img');

      if (isInput) {
        setIsHovered(true);
        setHoverType('text');
      } else if (isButton) {
        setIsHovered(true);
        setHoverType('button');
      } else if (isCard) {
        setIsHovered(true);
        setHoverType('card');
      } else {
        setIsHovered(false);
        setHoverType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onElementHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onElementHover);
    };
  }, [cursorX, cursorY, followerX, followerY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] select-none">
      {/* Precision Center Aim Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-accent-cyan pointer-events-none shadow-[0_0_10px_rgba(2,132,199,0.5)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: hoverType === 'text' ? 2 : 6,
          height: hoverType === 'text' ? 18 : 6,
          borderRadius: hoverType === 'text' ? 1 : 9999,
          scale: isClicking ? 0.6 : isHovered ? (hoverType === 'button' ? 1.6 : 1.2) : 1,
        }}
        transition={{ duration: 0.12 }}
      />

      {/* Outer Follower Aura Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none transition-colors duration-200 backdrop-blur-[1px]"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered 
            ? (hoverType === 'button' ? 52 : hoverType === 'card' ? 44 : 36) 
            : 28,
          height: isHovered 
            ? (hoverType === 'button' ? 52 : hoverType === 'card' ? 44 : 36) 
            : 28,
          borderColor: isHovered 
            ? 'rgba(2, 132, 199, 0.85)' 
            : 'rgba(14, 165, 233, 0.45)',
          backgroundColor: isHovered 
            ? 'rgba(14, 165, 233, 0.12)' 
            : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(14, 165, 233, 0.35)' : 'none',
          scale: isClicking ? 0.75 : 1,
        }}
        transition={{ duration: 0.18 }}
      />
    </div>
  );
}
