/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'sanFrancisco': "url('./src/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('./src/img/sanFranciscoDesktop.jpg')",
        'bali': "url('./src/img/bali.jpg')",
        'chicago': "url('./src/img/chicago.jpg')",
        'europe': "url('./src/img/europe.jpg')",
        'iceland': "url('./src/img/iceland.jpg')",
        'LA':"url('./src/img/LA.jpg')",
        'miami':"url('./src/img/miami.jpg')",
        'newYork':"url('./src/img/new_york.jpg')",
        'norway': "url('./src/img/norway.jpg')",
        'seattle': "url('./src/img/seattle.jpg')",
        'switzerland': "url('./src/img/switzerland.jpg')",
        'sydney': "url('./src/img/sydney.jpg')",
        'yosemite': "url('./src/img/yosemite.jpg')"
      },
      backgroundColor: theme=>({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'     
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9' 
      },fontFamily:{
        Montserrat: ['Monserrat','sans-serif']
      }

    },
  },
  plugins: [],
}

