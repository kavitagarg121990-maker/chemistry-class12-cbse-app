/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkbg: '#0B0F19',
        darkcard: '#131B2E',
        darkborder: '#1E293B',
      }
    },
  },
  plugins: [],
}
