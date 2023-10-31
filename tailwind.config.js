/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/component/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      lg: "1280px",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#868686",
    },
    extend: {
      size: {
        "img-md": 216,
        "icon-tn": 21,
        "icon-sm": 30,
        "icon-md": 35,
        "icon-lg": 40,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
