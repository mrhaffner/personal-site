const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightblue: colors.lightBlue,
        violet: colors.violet,
        fuchsia: colors.fushcia,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
