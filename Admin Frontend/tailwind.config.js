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
        "light-blue2":"rgba(200, 201, 255, 0.5)",
        "maroon":"#6b1010",
        "maroon-light":"#3e0101",
        "gray":"#EEEEEE",
        "home-right":"#F2F1E7",
        "home-left":"rgba(83,37,11,.3)",
        "1stfont":"#7E6200",
        "2ndfont":"#53250B",
      }

    },
  },
  plugins: [],
}

