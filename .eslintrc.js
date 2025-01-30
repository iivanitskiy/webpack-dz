module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'warn', // Warn when console statements are used
    'eqeqeq': 'error', // Enforce strict equality
    'semi': ['error', 'always'], // Require semicolons
  },
};