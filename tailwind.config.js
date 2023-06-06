/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'family': ['Montserrat', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '6rem',
        xl: '7rem',
        '2xl': '8rem',
      },
    },
    extend: {
      colors: {
        'backgroundColor': '#ec6c39',
        'textColor': '#111111'
      },
    },
  },
  plugins: [],
}

