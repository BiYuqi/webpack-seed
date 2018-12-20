
# [Webpack-seed](https://github.com/BiYuqi/webpack-seed)

<p align="left">
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

开箱即用的多页面脚手架, 基于webpack4.2x babel7.1x模块化开发可复用的现代化网站(Without Vue Angular React)

**如果感兴趣该项目, 请点个 [star](https://github.com/BiYuqi/webpack-seed/stargazers)**


**及时关注项目更新, 请点个 [watch](https://github.com/BiYuqi/webpack-seed/watchers)**


**项目bug, 请提 [issue](https://github.com/BiYuqi/webpack-seed/issues)**

## 特性 （Feature）

- 支持前后端分离开发
- 配置完整的打包方案
- 支持本地开发热更新
- EJS 模板编译
- Base64 图片，雪碧图
- 内置Sass开发环境
- Autoprefixer自动补全
- 集成代码风格校验Eslint
- 内置字体图标库500+, 开箱即用
- 支持ES6编写源码，编译生成生产代码
- 开发(生产)环境代码自动注入页面, 专注于开发
- 编译后的程序不依赖于外部的资源, 可自动替换线上资源地址
- ...

## 模块化成果

展示下页面呈现结果(页面资源加载逻辑),这可能就是我们想要的模块化吧:sparkles:

页面 | 公用样式 | 当前页面私有样式| 底层核心库 | 页面公用类库 | 当前页面私有模块
--------- | ---------- | ------ | ------ | ------ | ------
首页 | common.css | index.css |core.js|common.js | index.js
列表页 | common.css | list.css |core.js|common.js | list.js
详情页 | common.css | detail.css |core.js|common.js | detail.js
购物车 | common.css | goods.css |core.js|common.js | goods.js
登录页 | common.css | login.css |core.js|common.js | login.js

## 使用指南 （Usage）

**下载使用**
```js
git clone https://github.com/BiYuqi/webpack-seed.git

cd webpack-seed

npm install
```

**本地开发(dev)**
```js
npm run dev
```

**打包(build)**

* 默认情况下，该配置方案假设你的应用是被部署在一个域名的根路径上例如 https://www.my-app.com/
* 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径
* 例如，如果你的应用被部署在 https://www.my-app.com/my-app/
* 则设置 webpack的output.publicPath 为 /my-app/
* 本项目由于需要临时部署在git-pages预览 所以改配置临时改为/webpack-seed/
* 普通打包(大部分) npm run build 默认 '/'
* 该命令具体请看package.json scripts命令配置
* [配置详情](https://github.com/BiYuqi/webpack-seed/blob/master/build/config.js#L23)
* [scripts命令配置](https://github.com/BiYuqi/webpack-seed/blob/master/package.json#L8)

```js
// 普通打包(大部分) npm run build publicPath默认 '/'
npm run build

// 打包时 npm run build:git 该命令会打包的路径会自动带上github项目地址/webpack-seed/
//(当发布环境不是服务器根路径，都可以采用该方案，只需更改路径名称即可，本项目二级路径为webpack-seed)
npm run build:git

```
**依赖分析**
```js
// 利用webpack-bundle-analyzer 进行代码构建分析

npm run analyzer
```

## 开发规范 （Standard）

查看[INSTRODUCTION](https://github.com/BiYuqi/webpack-seed/blob/master/INSTRODUCTION.md)

## 接口配置 （Api Setting）

查看[API/README](https://github.com/BiYuqi/webpack-seed/blob/master/src/api/README.md)

## 目录结构 （Source）

查看[INSTRODUCTION](https://github.com/BiYuqi/webpack-seed/blob/master/INSTRODUCTION.md#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84-source)

## 输出目录 （Output）
[查看输出](https://github.com/BiYuqi/webpack-seed/tree/gh-pages)
* dist/
* ---html
* ---image
* ---media
* ---css
* ---js
* ---lib
* ---index.html

> 注意：如果有音视频等，会被打包在media目录


## TODO
- [x] 添加ejs模板，进行页面(首尾)复用, 页面功能模板渲染
- [x] mini-css-extract-plugin 提取js内引入scss文件失败, 打包后依然在js文件（已解决）
- [x] 首页页面模板未完成（单独处理打包）
- [x] 添加第三方库以链接的方式引入
- [x] 增加ESLint代码校验
- [x] 增加两个文件夹，一个是fix IE兼容, 一个是引入的公用库，自动加载第三方库到页面，避免手动填写
- [x] 增加网站未登录的模板(无header,footer)
- [x] 添加多样化layout模板支持(示例layout/layoutAuth)
- [ ] 搭建单元测试环境(基于karma mocha chai)...
- [ ] 添加完整网站demo示例(暂停中)
- [ ] 添加doc使用说明以及实现思路解析

## LONG TODO（Base on master）
- [ ] 建立分支web-system (后台管理系统模板)
- [x] [web-pc](https://github.com/BiYuqi/webpack-seed/tree/web-pc) (大众网站模板)
- [ ] web-mobile(移动端模板)

## 更新日志 (Update log)

查看[CHANGELOG](https://github.com/BiYuqi/webpack-seed/blob/master/CHANGELOG.md)

> 本项目目前接口(axios)只能支持到IE10+, 项目本身支持IE9+

## 贡献代码
* 先 Fork (https://github.com/BiYuqi/webpack-seed/fork)
* 创建分支 (git checkout -b my-idea)
* 提交更改 (git commit -am 'Fixed something')
* 推送更改 (git push origin my-idea)
* 创建一个 Pull Request

> [Pull Request使用](http://www.ruanyifeng.com/blog/2017/07/pull_request.html)

## 参考（Thanks）

本脚手架开发中，ejs模板渲染实现这块参考了[webpack-seed](https://github.com/Array-Huang/webpack-seed), 特此备注