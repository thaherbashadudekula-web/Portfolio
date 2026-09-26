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
          950: '#030712',
          900: '#070f1e',
          850: '#0c162c',
          800: '#111f38',
          750: '#172847',
          700: '#1e3358',
        },
        accent: {
          cyan: '#38bdf8',        // Pure radiant light blue (Sky 400)
          'cyan-light': '#bae6fd',  // Soft ice light blue (Sky 200)
          blue: '#60a5fa',        // Clear light blue (Blue 400)
          'blue-light': '#93c5fd',  // Bright sky blue (Blue 300)
          violet: '#7dd3fc',      // Soft sky blue (Sky 300) - replaces violet
          'violet-light': '#e0f2fe',// Icy white-blue (Sky 100) - replaces violet-light
          purple: '#93c5fd',      // Light blue tint - replaces purple
          white: '#ffffff',       // Crisp pure white
          ice: '#f0f9ff',         // Ultra-light ice white
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(56, 189, 248, 0.45)',
        'glow-violet': '0 0 25px -4px rgba(125, 211, 252, 0.45)',
        'glow-blue': '0 0 25px -4px rgba(96, 165, 250, 0.45)',
        'glow-white': '0 0 25px -4px rgba(255, 255, 255, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
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
