module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['prettier', 'json'],
  rules: {
    'no-console': 'off'
  }
};