/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        buttonBg: '#18FFC3',
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        hind: 'Hind, sans-serif',
      },
      backgroundImage: {
        gradient: 'linear-gradient(180deg, #3730A3 0%, #6D28D9 81.25%)',
      },
    },
  },
  plugins: [],
};
