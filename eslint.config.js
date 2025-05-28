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
      "jsdoc/check-access": 'warn',
      "jsdoc/check-alignment": 'warn',
      "jsdoc/check-param-names": 'warn',
      "jsdoc/check-property-names": 'warn',
      "jsdoc/check-tag-names": 'warn',
      "jsdoc/check-types": 'warn',
      "jsdoc/check-values": 'warn',
      "jsdoc/empty-tags": 'warn',
      "jsdoc/implements-on-classes": 'warn',
      "jsdoc/multiline-blocks": 'warn',
      "jsdoc/no-multi-asterisks": 'warn',
      "jsdoc/no-undefined-types": 'warn',
      "jsdoc/require-jsdoc": 'warn',
      "jsdoc/require-param": 'warn',
      "jsdoc/require-param-description": 'off',
      "jsdoc/require-param-name": 'warn',
      "jsdoc/require-param-type": 'warn',
      "jsdoc/require-property": 'warn',
      "jsdoc/require-property-description": 'warn',
      "jsdoc/require-property-name": 'warn',
      "jsdoc/require-property-type": 'warn',
      "jsdoc/require-returns": 'warn',
      "jsdoc/require-returns-check": 'warn',
      "jsdoc/require-returns-description": 'off',
      "jsdoc/require-returns-type": 'warn',
      "jsdoc/require-yields": 'warn',
      "jsdoc/require-yields-check": 'warn',
      "jsdoc/tag-lines": 'warn',
      "jsdoc/valid-types": 'warn'
    }
  }
]);
