/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#ea4c89',
          surface: '#F082AC',
        },
        secondary: {
          main: '#0d0c22',
          surface: '#6e6d7a',
        },
      },
    },
  },
  plugins: [],
};
