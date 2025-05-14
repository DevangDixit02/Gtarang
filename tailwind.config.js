/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#00bcd4',
        'gtarang-blue': '#003366',
        'gtarang-green': '#006633',
        'india-orange': '#FF9933',
        'india-green': '#138808',
        'india-blue': '#000080',
        'india-saffron': '#F4C430',
      },
    },
  },
  plugins: [],
}; 