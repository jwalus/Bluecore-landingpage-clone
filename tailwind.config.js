/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dblue': '#0A20A0',
        'lblue': '#F0F8FF',
        'golden': '#FBDD4D',
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1700px",
    },
  },
  plugins: [],
}

