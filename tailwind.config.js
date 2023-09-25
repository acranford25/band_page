/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "10vh 80vh 10vh",
      },
      gridTemplateColumns: {
        layoute: "25% 75%",
      },
    },
  },
  plugins: [require("daisyui")],
};
