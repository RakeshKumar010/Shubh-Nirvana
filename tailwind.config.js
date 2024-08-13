/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customHeading:'#f48132',
        logoBg:'#d3b472'
      },
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],

}