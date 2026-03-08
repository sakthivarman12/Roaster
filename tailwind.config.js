/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink:    { DEFAULT: '#0D1117', 50: '#f0f2f5', 100: '#d8dde6', 200: '#b0bac9', 300: '#8896ac', 400: '#606f85', 500: '#3d4f68', 600: '#243348', 700: '#14213a', 800: '#0a162a', 900: '#040c1a' },
        lime:   { DEFAULT: '#B5FF4D', dark: '#8fd630', dim: '#d6ffb0' },
        coral:  { DEFAULT: '#FF6B6B', dark: '#e84444' },
        amber:  { DEFAULT: '#FFB347', dark: '#e8900f' },
        violet: { DEFAULT: '#A78BFA', dark: '#7c55f8' },
      },
      animation: {
        'fade-up':   'fadeUp 0.4s ease forwards',
        'fade-in':   'fadeIn 0.3s ease forwards',
        'slide-in':  'slideIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:   { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:   { from: { opacity: 0 }, to: { opacity: 1 } },
        slideIn:  { from: { opacity: 0, transform: 'translateX(-20px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        pulseDot: { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: 0.5, transform: 'scale(0.8)' } },
      },
    },
  },
  plugins: [],
}
