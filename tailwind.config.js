/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'default': ['Oswald', 'sans-serif'],
      },
      backgroundImage:{
        'headerBg': "url('/src/images/headerBg.jpg')"
      },
    },
  },
  plugins: [],
}

