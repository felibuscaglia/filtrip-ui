/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      title: ['Playfair Display'],
      text: ['Questrial']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#2a2a2a',
    })
  },
  plugins: [],
}
