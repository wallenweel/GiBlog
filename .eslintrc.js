module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // 'airbnb',
    'react-app',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint'],
  rules: {
    'no-console': 2
  }
}
