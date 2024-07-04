/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#F7F7F8',
        customWhite2: '#C8CBD9',
        customBlack: '#858585',
      },
    },
  },
  plugins: [],
}

