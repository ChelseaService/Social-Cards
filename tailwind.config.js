/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Anton"', 'sans-serif'],
        condiment: ['"Condiment"', 'cursive'],
        barlow: ['"Barlow"', 'sans-serif'],
        instrument: ['"Instrument Serif"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        'source-serif': ['"Source Serif 4"', 'serif'],
      },
    },
  },
  plugins: [],
}
