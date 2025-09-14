/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },

      animation: {
        "open-menu": "open-menu 0.5s ease forwards",
      },
    },
  },
  safelist: [
    "border",
    "border-solid",
    "border-black",
    "border-white",
    "dark:border-white",
  ],
  plugins: [],
};
