/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'jost': ['Jost', 'sans-serif'],
'popins': ['Poppins', 'sans-serif'],
'roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'banner-bg': "url('./public/Banner/Vector.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")]}