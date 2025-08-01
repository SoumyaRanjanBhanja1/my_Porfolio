/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   // enables dark mode via class
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
  darkMode: 'class',
}
