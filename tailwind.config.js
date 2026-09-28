/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brandNavy: '#0F2B48',
        brandRed: '#EB4C4C',
        brandLight: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'scroll-left': 'scrollLeft 25s linear infinite',
        'scroll-right': 'scrollRight 25s linear infinite',
        'spin-slow': 'spinSlow 35s linear infinite',
        'bounce-slow': 'bounceSlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
