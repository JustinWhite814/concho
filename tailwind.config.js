/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Luckiest Guy", "cursive"],
      },
      colors: {
        redOrange: '#E55d2d',
        customBlue: "#52afe6", // Add your custom hex color
      },
      fontSize: {
        md: '0.9375rem', // 15px
      },
    },
  },
  plugins: [],
};
