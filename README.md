<p align="center">
  <a href="https://github.com/BiYuqi/webpack-seed">
      <img src="https://github.com/BiYuqi/webpack-seed/blob/master/src/common/assets/image/webpack-seed.png" width="300" alt="Webpack">
  </a>
</p>
<p align="center">
	<a href="https://webpack.js.org/">
		<img src="https://img.shields.io/badge/webpack-4.46.0-brightgreen.svg" alt="Webpack">
	</a>
	<a href="https://babeljs.io/">
		<img src="https://img.shields.io/badge/babel-7.12.10-brightgreen.svg" alt="babel">
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

## 新版本 2.x

- [x] 使用[`webpack-chain`](https://github.com/neutrinojs/webpack-chain)进行构建程序
- [x] 重构整体页面配置, 包括模板的创建, 静态第三方资源的引入方式
- [x] 全新的变量管理方式, 类 vue-cli 脚手架的配置, 自动读取根目录的环境变量文件`.env[mode]`
- [x] 支持在`ws.config.js`进行全局的配置打包等配置, 具体可参考 vue.config.js 配置方式

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
- 通用的构建方式, 基本是开箱即用. 同时支持通过`ws.config.js`进行灵活的构建配置
- ...

注：本项目引入了 jquery, bootstrap，该文件配置可自动加载第三方脚本作为链接使用(script 标签的形式引入), 如果需要,在 src/common/lib/index.js 配置即可

## 项目结构

```sh
webpack-seed
├── dist # 输出目录
├── bin # 创建页面命令
├── build # webpack构建目录
├── src # 项目主目录
├── .editorconfig
├── .env.github # 环境变量配置
├── .env.prod # 环境变量配置
├── .env.staging # 环境变量配置
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .npmrc # npm源
├── .postcssrc.js
├── .prettierignore
├── .prettierrc.js
├── .travis.yml # CI当前项目demo部署
├── favicon.ico
├── LICENSE
├── README.md
├── babel.config.js # babel配置
├── package.json
├── ws.config.js # 可通过该配置改webpack等配置
└── yarn.lock
```

## 输出

```sh
dist
├── css
├── favicon.ico
├── fonts
├── html
├── image
├── index.html
├── js
└── libs
```

## 使用

**下载使用**

```sh
git clone https://github.com/BiYuqi/webpack-seed.git

cd webpack-seed

yarn install
```

**本地开发(dev)**

```sh
yarn run serve
```

**打包(build)**

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

- [ ] 测试框架默认 Jest
- [ ] 编写创建项目的脚手架, eslint, jest, 等配置可选
- [ ] 优化 webpack 配置流程, 尽量黑盒化, 约定大于配置
- [ ] 文档补充
