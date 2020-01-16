module.exports = {
  env: {
      es6: true,
      node: true,
      jest: true,
      browser: true
  },
  extends: 'eslint:recommended',
  plugins: ['html'],
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
  },
  rules: {
      indent: [
          'error',
          2
      ],
      'linebreak-style': [
          'error',
          'unix'
      ],
      quotes: [
          'error',
          'single'
      ],
      semi: [
          'error',
          'never'
      ]
  }
};