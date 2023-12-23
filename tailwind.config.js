/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'FF': ['FF Mark Pro Black', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      sizing: {
        '60vw': '60vw',
        '50vw': '50vw',
        '40vw': '40vw',
      },
      colors: {
        'news-gray': '#2D2B29',
      },
    },
  },
  plugins: [],
}

