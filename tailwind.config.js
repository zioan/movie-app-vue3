module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        large: "33.25rem",
        small: "25rem",
        imgHeightSmall: "22.5rem",
        castItemHeight: "26.25rem",
        cardHeight: "18.75rem",
      },
      width: {
        imgWidthSmall: "15rem",
        cardWidth: "12.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
