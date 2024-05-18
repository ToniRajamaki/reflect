/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
        primary: '#ac2dfd',     // Replace with your primary color
        secondary: '#7076fc',   // Replace with your secondary color
        accent: '#44d1fd',      // Replace with your accent color
      },},
  },
  plugins: [],
}
