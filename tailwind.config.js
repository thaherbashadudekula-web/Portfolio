/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#ffffff',         // Pure crisp white base
          900: '#f8fafc',         // Soft clean off-white card surface
          850: '#f0f9ff',         // Ultra-light sky blue-white surface
          800: '#e0f2fe',         // Soft sky-100 surface
          750: '#bae6fd',         // Light sky-200 surface
          700: '#7dd3fc',         // Light sky-300 surface
        },
        accent: {
          cyan: '#0284c7',        // Rich sky-600 (vibrant & accessible on white)
          'cyan-light': '#0ea5e9',// Sky-500
          blue: '#2563eb',        // Blue-600
          'blue-light': '#38bdf8',// Sky-400
          violet: '#0284c7',      // Sky-600
          'violet-light': '#38bdf8',
          purple: '#0369a1',      // Deep sky-700
          white: '#ffffff',       // Pure white
          ice: '#f0f9ff',         // Ultra-light ice sky-50
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(14, 165, 233, 0.35)',
        'glow-violet': '0 0 25px -4px rgba(56, 189, 248, 0.35)',
        'glow-blue': '0 0 25px -4px rgba(37, 99, 235, 0.25)',
        'glow-white': '0 0 25px -4px rgba(14, 165, 233, 0.2)',
        'glass-card': '0 10px 30px -10px rgba(56, 189, 248, 0.15), 0 2px 6px 0 rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
