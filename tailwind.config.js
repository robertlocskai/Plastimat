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
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1135px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1135px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
  },
  plugins: [],
}

