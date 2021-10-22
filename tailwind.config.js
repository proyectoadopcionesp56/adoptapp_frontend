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
        "1.5/10": "15%",
        "2/10": "20%",
        "2.5/10": "25%",
        "3/10": "30%",
        "3.5/10": "35%",
        "4/10": "40%",
        "4.5/10": "45%",
        "5/10": "50%",
        "5.5/10": "55%",
        "6/10": "60%",
        "6.5/10": "65%",
        "7/10": "70%",
        "7.5/10": "75%",
        "4/6": "80%",
        "8.5/10": "85%",
        "9/10": "90%",
        "9.5/10": "95%",
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
        base: "var(--base-green)",
      },
      purple: {
        ...colors.purple,
        base: "var(--base-purple)",
      },
      orange: {
        ...colors.orange,
        base: "var(--base-orange)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
