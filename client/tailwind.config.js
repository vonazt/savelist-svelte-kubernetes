module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: { spotifyGreen: `#1db954;` },
    },
  },
  variants: {},
  plugins: [],
};
