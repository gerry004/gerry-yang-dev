/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#FF6B6B',
      secondary: '#45AAB8',
      lightgray: '#CCCCCC',
      gray: '#707070',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
}
