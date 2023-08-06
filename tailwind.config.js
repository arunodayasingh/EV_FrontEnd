const config = require('./config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '1em',
    },
    extend: {
      colors: {
          primary: '#8bc34a',
          success: '#007f5f',
          info: '#ff9900',
          danger: '#bc2c1f',
          yellow: '#FFCA28',
          anchor: '#224FD9',
          info: '#ff9800',
      }
    }
  },
  plugins: [],
}
