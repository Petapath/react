/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        // Define your color variables here
        backgroundColorPrimary: '#F3C969',
        backgroundColorSecondary: '#EDFF86',
      },

    },
  },
  plugins: [],
};
