/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'FF': ['FF Mark Pro Black', 'sans-serif'],
      },
      colors:{
        text:"#2B2A29",
        Dark_Blue:"#334253",
        Grayish_Blue:"#67727E"
      }
    },
  },
  plugins: [],
}

