/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      colors:{
        brand: "#42389E",
        accent: "#F9A71E",
      },
      fontFamily: {
        merriweather: ['"Merriweather Sans"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
        inter: ['Inter'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}