/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'questrial': ['Questrial', 'sans-serif'],
      },
      colors: {
        'primary': '#1f2937',
        'accent': 'rgb(203 149 55)',
      },
    },
  },
  plugins: [],
}
