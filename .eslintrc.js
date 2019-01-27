module.exports = {
  root: true,
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 6
    // es6: true
  },
  env: {
    browser: true
  },
  // rules: {
  //   "规则名": [规则值, 规则配置]
  // }
  // "off"或者0    //关闭规则关闭
  // "warn"或者1   //在打开的规则作为警告（不影响退出代码）
  // "error"或者2   //把规则作为一个错误（退出代码触发时为1）
  rules: {
    "indent": ["error", 2], // 缩进2
    'generator-star-spacing': 'off',
    "quotes": ["error", "single"], // 默认使用单引号
    "eqeqeq": 2, //必须使用全等
    "default-case": 2 //switch语句最后必须有default
  }
}