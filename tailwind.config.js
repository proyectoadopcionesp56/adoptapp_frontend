const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        fit: "fit-content",
      },
      inset: {
        "1/10": "10%",
        "4/10": "40%",
        "6/10": "60%",
        "4/6": "80%",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: {
        ...colors.green,
        base: "#0e7174",
      },
      purple: {
        ...colors.purple,
        base: "#440381",
      },
      orange: {
        ...colors.orange,
        base: "#fb7821",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
