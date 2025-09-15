/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['spotify-img', 'bg-project-B', 'bg-project-A'],
  theme: {
    extend: {
      colors: {
        'dark-transparent': 'rgba(26, 26, 26, 0.5)',
      },
    },
  },
  plugins: [],
};
