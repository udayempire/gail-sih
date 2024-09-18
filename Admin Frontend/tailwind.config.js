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
        "dark-blue":"#031144",
        
        "maroon-light":"#3e0101",
        "gray":"#EEEEEE",
        "darkgray":"#8E8E8E",
        "graydeep":"#9F9F9F",
        "home-right":"#EEEEEE",
        "home-left":"rgba(167, 208, 255, 0.3)",
        "1stfont":"#7E6200",
        "2ndfont":"#53250B",
      }

    },
  },
  plugins: [],
}

