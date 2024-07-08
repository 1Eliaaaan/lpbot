/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10439F',
        secondary: '#874CCC',
        tertiary: '#C65BCF',
        quaternary: '#F27BBD',
      },
    },
  },
  plugins: [],
}

