/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      primary: '#3490dc',     // Replace with your primary color
      secondary: '#ffed4a',   // Replace with your secondary color
      accent: '#e3342f',      // Replace with your accent color
    },},
  },
  plugins: [],
}
