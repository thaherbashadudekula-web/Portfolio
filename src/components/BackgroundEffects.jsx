import React, { useEffect, useRef } from 'react';

/**
 * BackgroundEffects
 * Provides subtle ambient glow orbs in light blue and soft white, fine grid texture,
 * and a lightweight particle canvas reacting to mouse movement.
 */
export default function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

    // Particle count: 35 for desktop, 15 for mobile
    const particleCount = window.innerWidth < 768 ? 15 : 35;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update particles with light blue & white styling
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle in ice light blue
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle light blue strokes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Deep canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-45" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Ambient Gradient Glow Blobs in Light Blue & Soft White */}
      <div 
        className="absolute -top-32 left-1/4 w-[550px] h-[550px] rounded-full bg-sky-400/12 blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-sky-300/10 blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-2/3 -left-32 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Radial vignette mask ensuring content legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.12),rgba(255,255,255,0))]" />
    </div>
  );
}
