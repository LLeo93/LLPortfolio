/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-transparent': 'rgba(26, 26, 26, 0.5)', // Corrisponde a #1a1a1a con % di opacità
      },
    },
  },
  plugins: [],
};
