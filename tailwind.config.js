/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content:["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        poppins : 'poppins'
      },
      colors : {
        csBlue : '#2192FF',
        csBlueOp : '#2192FF40',
        csGreenOp : '#38E54D40',
        csGreen : '#38E54D',
        csGreenYellow : '#9CFF2E',
        csYellow : '#FDFF00',
      }
    },
  },
  plugins: [
    require('@pyncz/tailwind-mask-image')
  ],
}

