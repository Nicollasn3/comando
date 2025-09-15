/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-principal': '#0C41FF',
      },
    },
  },
  plugins: [  require('tailwind-scrollbar'),],
}