/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rust: {
          dark: '#1a1a1a',
          panel: '#252525',
          orange: '#ff6b35',
          red: '#c44536',
          light: '#e8e8e8',
        },
      },
    },
  },
  plugins: [],
};
