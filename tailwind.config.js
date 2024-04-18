/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1500px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1100px'},
      // => @media (max-width: 1023px) { ... }

      'slg': {'max': '920px'},

      'md': {'max': '757px'},
      // => @media (max-width: 767px) { ... }
      'sm': {'max': '680px'},
      'ssm': {'max': '590px'},
      'xsm': {'max': '450px'},
    }
  },
  plugins: [],
}

