import React, { useEffect, useRef, useState } from 'react';

/**
 * BackgroundEffects
 * Dynamic, high-performance ambient background:
 * - Interactive particle mesh with mouse-connect strands
 * - Cursor-following ambient flashlight spotlight on texture
 * - Oscillating, floating gradient ambient auroras
 * - Layered architectural grid and micro-dot patterns
 */
export default function BackgroundEffects() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMoveGlobal = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isInside) setIsInside(true);
    };

    const handleMouseLeaveGlobal = () => {
      setIsInside(false);
    };

    window.addEventListener('mousemove', handleMouseMoveGlobal, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveGlobal);

    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle count: 50 for desktop, 20 for mobile
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.45 + 0.2,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMoveCanvas = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeaveCanvas = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMoveCanvas, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveCanvas);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update particles with light blue & white styling
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds smoothly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle in radiant sky blue
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${p.alpha * 0.85})`;
        ctx.fill();

        // Connect particle to mouse cursor when close!
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${(1 - mdist / 150) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect nearby particles with subtle light blue strokes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${(1 - dist / 125) * 0.24})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('mousemove', handleMouseMoveCanvas);
      document.removeEventListener('mouseleave', handleMouseLeaveGlobal);
      document.removeEventListener('mouseleave', handleMouseLeaveCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Light blue particle interactive canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

      {/* Crisp light blue grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-90" />

      {/* Layered architectural micro-dot pattern for richness */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40" />

      {/* Dynamic Mouse Spotlight / Flashlight Effect */}
      {isInside && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.12), transparent 75%)`,
          }}
        />
      )}

      {/* Floating Ambient Glowing Auroras with CSS animations */}
      <div 
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-sky-300/30 blur-[130px] animate-float-slow pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 -right-24 w-[650px] h-[650px] rounded-full bg-sky-400/25 blur-[140px] animate-pulse-glow pointer-events-none" 
        style={{ animationDuration: '8s' }}
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 -left-32 w-[580px] h-[580px] rounded-full bg-blue-300/25 blur-[130px] animate-float-slow pointer-events-none" 
        style={{ animationDelay: '2s' }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[550px] h-[550px] rounded-full bg-sky-200/40 blur-[130px] animate-pulse-glow pointer-events-none" 
        style={{ animationDuration: '7s' }}
        aria-hidden="true" 
      />

      {/* Top subtle light-blue gradient glow vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.22),rgba(255,255,255,0))]" />
    </div>
  );
}
