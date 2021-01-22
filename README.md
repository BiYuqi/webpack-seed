<p align="center">
  <a href="https://github.com/BiYuqi/webpack-seed">
      <img src="https://github.com/BiYuqi/webpack-seed/blob/master/src/common/assets/image/webpack-seed.png" width="300" alt="Webpack">
  </a>
</p>
<p align="center">
	<a href="https://webpack.js.org/">
		<img src="https://img.shields.io/badge/webpack-4.20.2-brightgreen.svg" alt="Webpack">
	</a>
	<a href="https://babeljs.io/">
		<img src="https://img.shields.io/badge/babel-7.1.2-brightgreen.svg" alt="babel">
	</a>
  <a href="https://github.com/BiYuqi/webpack-seed/tree/gh-pages">
    <img src="https://img.shields.io/travis/BiYuqi/webpack-seed.svg">
  </a>
  <a href="https://github.com/BiYuqi/webpack-seed/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  
</p>

## 前言

开箱即用的多页面模板, 基于 webpack4 babel7 开发可复用的现代化网站, 解决非 SPA 应用, html 复用, 模块化开发编译等问题.

**如果感兴趣该项目, 请点个 [star](https://github.com/BiYuqi/webpack-seed/stargazers)**

**及时关注项目更新, 请点个 [watch](https://github.com/BiYuqi/webpack-seed/watchers)**

**项目 bug, 请提 [issue](https://github.com/BiYuqi/webpack-seed/issues)**

- [Online demo](https://biyuqi.github.io/webpack-seed/)

- [旧版分支 1.x](https://github.com/BiYuqi/webpack-seed/tree/v1.x-version)

## 特性

- 支持前后端分离开发
- 配置完整的打包方案
- 支持本地开发热更新
- EJS 模板编译
- 图片处理压缩
- 内置 Sass 开发环境
- 集成代码风格校验 Eslint
- 内置字体图标库 500+, 开箱即用
- 支持 ES6 语法，编译生成生产代码
- 支持开发(生产)环境变量注入(基于.env.[mode]文件,类似于 Vue-CLI 脚手架提供的方案)
- 编译后的程序不依赖于外部的资源, 可自动替换线上资源地址
- 开箱即用的单元测试环境(当然了,测试用例还得您自己写）
- ...

注：本项目引入了 jquery, bootstrap，该文件配置可自动加载第三方脚本作为链接使用(script 标签的形式引入), 如果需要,在 src/common/lib/index.js 配置即可

## 我们需要什么?

展示下页面呈的输出资源:sparkles:

| 页面   | 公用样式   | 当前页面私有样式 | 底层核心库 | 页面公用类库 | 当前页面私有模块 |
| ------ | ---------- | ---------------- | ---------- | ------------ | ---------------- |
| 首页   | common.css | index.css        | core.js    | common.js    | index.js         |
| 列表页 | common.css | list.css         | core.js    | common.js    | list.js          |
| 详情页 | common.css | detail.css       | core.js    | common.js    | detail.js        |
| 购物车 | common.css | goods.css        | core.js    | common.js    | goods.js         |
| 登录页 | common.css | login.css        | core.js    | common.js    | login.js         |

## 使用

**下载使用**

```sh
git clone https://github.com/BiYuqi/webpack-seed.git

cd webpack-seed

yarn install
```

**本地开发(dev)**

```sh
yarn run dev
```

**打包(dev)**

```sh
yarn run build
```

**配置文件**

```sh
# 具体配置和vue.config.js一致
ws.config.js
```

**环境变量**

```sh
# 具体配置和vue-cli配置方式一致
.env[mode]
```

## TODO

- [ ] 测试框架改为 Jest
- [ ] ejs 模板改为 handlebars 模板
- [ ] 编写创建项目的脚手架, eslint, jest, 等配置可选
- [ ] 优化 webpack 配置流程, 尽量黑盒化, 约定大于配置
- [ ] 文档补充
