module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'node',
    '@vue/airbnb',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
