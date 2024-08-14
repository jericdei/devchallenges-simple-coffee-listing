/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans Variable", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1B1D1F",
          dark: "#111315",
          light: "#6F757C",
          white: "#FEF7EE",
        },
        accent: {
          green: "#BEE3CC",
          yellow: "#F6C768",
          orange: "#ED735D",
        },
      },
    },
  },
  plugins: [],
}
