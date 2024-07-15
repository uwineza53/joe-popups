/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.sky, DEFAULT: colors.sky[500] },
        secondary: { ...colors.green, DEFAULT: colors.green[500] },
        neutral: { ...colors.gray, DEFAULT: colors.gray[500] },
        issue: { ...colors.red, DEFAULT: colors.red[500] }
      },
      animation: {
        "slide-in": 'slide-in .1s ease-in forwards',
      },
      keyframes: {
        'slide-in': {
          '100%': { right: '1.5%' },
        }
      }
    },
  },
  plugins: [],
}

