/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        buttonBg: '#18FFC3',
        navActive: '#001141',
        navBg: 'rgba(255, 255, 255, 0.8)',
        navBorder: '#CBD5E1',
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        hind: 'Hind, sans-serif',
      },
      boxShadow: {
        navSchadow: '0px 0px 80px rgba(51, 65, 85, 0.17)',
      },
      backgroundImage: {
        gradient: 'linear-gradient(180deg, #3730A3 0%, #6D28D9 81.25%)',
      },
    },
  },
  plugins: [],
};
