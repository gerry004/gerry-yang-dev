/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // primary: '#005DFF',
      // secondary: '#00B3A2',
      lightgray: '#CCCCCC',
      primary: '#FF6B6B',
      secondary: '#45AAB8',
      primaryhover: '#40E0D0',
      gray: '#707070',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
}
