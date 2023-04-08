/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': 'Inter'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
