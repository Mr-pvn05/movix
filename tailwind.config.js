/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: '#04152d',
        black2: '#041226',
        black3: '#020c1b',
        blackLighter: '#1c4b91',
        blackLight: '#173d77',
        pink: '#da2f68',
        orange: '#f89e00',
      }
    },
    keyframes: {
      mobileMenu: {
        '0%': {transform: 'translateY(-100%)'},
        '100%': {transform: 'translateY(80%)'}
      }
    },
    animation: {
      mobileMenu: 'mobileMenu 0.3s ease forwards'
    }
  },
  plugins: [],
}

