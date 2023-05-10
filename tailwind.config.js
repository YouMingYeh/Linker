/** @type {import('tailwindcss').Config} */

export default {
  plugins: [require("daisyui")],
  content: [
    "./index.html",
    "./renderer/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ca3b07",
        secondary: "#FFB502",
        tertiary: "#fffeff",
        background: "#08214E",
      },
    },
  },
  daisyui: {
    themes: [
      "emerald",
    ],
  },
};
