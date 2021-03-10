const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    { mode: "layers" },
    { content: ["./public/**/*.html", "./src/**/*.vue"] },
  ],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.trueGray,
        blue: "#1DA1F2",
        darkblue: "#2795D9",
        lightblue: "#EFF9FF",
        dark: "#657786",
        light: "#AAB8C2",
        lighter: "#E1E8ED",
        lightest: "#F5F8FA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
