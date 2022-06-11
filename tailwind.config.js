module.exports = {
  content: [
    "./src/App.jsx",
    "./src/components/**/*.{html,jsx}",
    "./src/routes/**/*.{html,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
