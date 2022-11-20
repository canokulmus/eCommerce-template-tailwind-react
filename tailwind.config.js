/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //colors
      colors: {
        'primary': '#ff6363',
        "secondary": {
          100: "#E2E2D5",
          200: "#888883",
        },
      },

      //font family
      fontFamily: {
        'nunito': ['Nunito']
      },


    },
  },
  plugins: [],
}
