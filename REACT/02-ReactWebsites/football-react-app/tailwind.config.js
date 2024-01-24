/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        'background-white': '#f5f5f5',
        'dark-grey': '#383E42',
        'light-grey': '#6B7276',

      },
      fontFamily: {
        roboto: ['"Roboto"'],
        khand: ['"Khand"']
      }
    },
  },
  plugins: [],
}