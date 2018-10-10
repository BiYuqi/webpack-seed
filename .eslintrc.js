module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 6
    // es6: true
  },
  env: {
    browser: true
  },
  rules: {
    // 缩进2
    "indent": ["error", 2],
    'generator-star-spacing': 'off',
    "quotes": [ "error", "single"]
  }
}