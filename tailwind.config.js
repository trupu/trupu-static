const colors = {
  primary: "#000",
  // Eerie Black
  "primary-100": "#1b1b1b",
  // Raisin Black
  "primary-200": "#242124",
  // silver
  secondary: "#f0f0f0",
  "secondary-100": "#c0c0c0",
  "secondary-200": "#c6cece",
};

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato"],
        serif: ["Open Sans"],
      },

      colors: colors,
      backgroundColor: colors,
      borderColor: colors,
    },
  },
  variants: {},
  plugins: [],
};
