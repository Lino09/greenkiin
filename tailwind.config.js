module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        lime: {
          '100': '#E0FF80',
          '200': '#DAFE66',
          '300': '#D1FF45',
          '400': '#AEDC22',
          '500': '#C0FF00',
          '600': '#ACE500',
          '700': '#9BCC00',
          '800': '#87B200',
          '900': '#678900',
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
