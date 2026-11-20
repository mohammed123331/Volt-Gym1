/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        volt: {
          black: '#080808',
          charcoal: '#141414',
          charcoal2: '#1c1c1c',
          line: '#2a2a2a',
          red: '#E52430',
          redDark: '#b81c26',
          redSoft: 'rgba(229, 36, 48, 0.12)',
          white: '#FFFFFF',
          gray: '#A5A5A5',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Cairo', 'sans-serif'],
      },
      maxWidth: {
        site: '76rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        fadeIn: 'fadeIn 0.5s ease both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
