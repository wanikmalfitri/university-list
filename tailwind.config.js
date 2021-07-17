const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        darkest: "#002358",
        DEFAULT: "#0060FF",
        light: "#CEE1FF",
        lighter: "#DAE8FE",
        lightest: "#F1F6FF",
      },
      secondary: {
        DEFAULT: "#5BFFA8",
      },
      white: colors.white,
      gray: colors.coolGray,
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
