/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#005DFF',
      secondary: '#00B3A2',
      gray: '#707070',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
}
