module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        large: "33.25rem",
        small: "25rem",
        imgHeightLarge: "27rem",
        imgHeightSmall: "22.5rem",
        castItemHeight: "26.25rem",
        imgHeightDefault: "33.62rem",
      },
      width: {
        imgWidthLarge: "18rem",
        imgWidthSmall: "15rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
