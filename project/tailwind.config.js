/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0a0118',
          800: '#150229',
          700: '#1f033b',
          600: '#2a044c',
          500: '#35055e',
        },
        accent: {
          900: '#1a0f3c',
          800: '#251459',
          700: '#301977',
          600: '#3b1e94',
          500: '#4623b2',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};