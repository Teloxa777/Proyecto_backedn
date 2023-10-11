/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark': '#000',
        'green': '#7C9F35',
        'brown': '#A67C52',
        'red': '#E74C3C',
        'wheat': '#F5DEB3',
        'white': '#FFF',
        'off-white': '#FFF5E1'
      }
    },
  },
  plugins: [],
}
