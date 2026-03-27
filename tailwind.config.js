/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#030303',
        surface1: '#0A0A0A',
        surface2: '#141414',
        border: '#222222',
        amber: '#F2A900',
        'amber-dim': 'rgba(242, 169, 0, 0.15)',
        'amber-glow': 'rgba(242, 169, 0, 0.3)',
        textMain: '#FFFFFF',
        textMuted: '#8A8A8A',
        textDim: '#444444',
      },
      fontFamily: {
        display: ['Syncopate', 'sans-serif'],
        head: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': '5.5rem',
      },
      spacing: {
        'section': '120px',
      },
      maxWidth: {
        'container': '1600px',
      },
    },
  },
  plugins: [],
}
