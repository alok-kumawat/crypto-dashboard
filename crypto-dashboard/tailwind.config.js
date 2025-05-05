module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'touch': '48px', // Minimum recommended touch target size
      }
    },
  },
  plugins: [],
}