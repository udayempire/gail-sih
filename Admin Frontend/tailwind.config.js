/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-white":"#fffbd5",
        "light-blue":"rgba(191, 201, 255, 0.5)",
        "gray":"#EEEEEE",
        "home-right":"#F2F1E7",
        "home-left":"rgba(83,37,11,.3)",
        "1stfont":"#7E6200"
      }

    },
  },
  plugins: [],
}

