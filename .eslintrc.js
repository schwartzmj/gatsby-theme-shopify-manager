/*
  This came from https://www.arden.nl/setting-up-a-gatsby-js-starter-with-type-script-es-lint-prettier-and-pre-commit-hooks
  Some of these options might not make sense later, but for now they do.
  This is not meant to be considered the end-product, but the starting line.
*/

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'react', 'jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  ignorePatterns: ['node_modules/', '.cache/', 'public/'],
};
