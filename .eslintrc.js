module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  env: {
    browser: true
  },
  rules: {
    indent: ['error', 2], // 缩进2
    'generator-star-spacing': 'off',
    quotes: ['error', 'single'], // 默认使用单引号
    eqeqeq: 2, //必须使用全等
    'default-case': 2 //switch语句最后必须有default
  }
}
