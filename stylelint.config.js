module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    indentation: 2,
    'string-quotes': 'double',
  },
}
