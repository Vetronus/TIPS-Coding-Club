/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // preflight: false,
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}