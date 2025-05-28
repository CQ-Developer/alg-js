const { defineConfig } = require('eslint/config');
const globals = require('globals');
const js = require('@eslint/js');
const jsdoc = require('eslint-plugin-jsdoc');

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      ecmaVersion: 'latest',
      sourceType: 'commonjs'
    }
  },
  {
    files: ['**/*.js'],
    plugins: {
      js,
      jsdoc
    },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'warn',
      'jsdoc/require-description': 'off',
      'jsdoc/check-values': 'error'
    }
  }
]);
