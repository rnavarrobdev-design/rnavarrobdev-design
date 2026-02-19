
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- ¡ESTO DEBE ESTAR AQUÍ! Sin esto, Tailwind ignora el modo oscuro manual.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}