
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


## 特性 （Feature）

- 支持前后端分离开发
- 配置完整的打包方案
- 支持本地开发热更新
- 集成代码风格校验Eslint
- ES6编写源码，编译生成生产代码
- 开发(生产)环境代码自动注入页面, 专注于开发
- 编译后的程序不依赖于外部的资源, 可放到CDN

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
* [配置详情](https://github.com/BiYuqi/webpack-seed/blob/master/build/config.js#L30)
* [scripts命令配置](https://github.com/BiYuqi/webpack-seed/blob/master/package.json#L8)
* [预览](https://loadingmore.com/webpack-seed)
```js
// 普通打包(大部分) npm run build publicPath默认 '/'
npm run build

// 打包时 npm run build:git 该命令会打包的路径会自动带上github项目地址/webpack-seed/
//(当发布环境不是服务器根路径，都可以采用该方案，只需更改路径名称即可，本项目二级路径为webpack-seed)
npm run build:git

```

## 开发规范 （Standard）
**import引入 export导出** [具体请参考 ES6 module语法](http://es6.ruanyifeng.com/#docs/module)
```js
/**
 * 每个页面(模板)都必须包含(基础)以下文件
 */
index.js // (业务逻辑代码入口)
tpl.js // (模板拼装入口)
模块名.ejs // (页面编写入口)

/**
 * 以下可根据自己需要添加
 * 模块下可以建立文件目录用来填写业务代码,上述只是基础规范，扩展性比较强
 * /
eg:
  src/views/about/ 在该目录下创建文件夹/aboutCom
        ---- a.js 业务a代码
        ---- b.js 业务b代码
都是需要通过ES6规范导出导入
```
* 页面公用css，全部需要在公用base.js引入(便于webpack处理),[详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/common/assets/js/base.js),然后每个页面引入base.js[详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/index/index.js#L4)
* 页面开发跳转页面都是基于打包后输出的绝对路径进行编写 **html/模块.html** [详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/index/index.ejs)
* 全部采用模块化开发，**每个模块都是一个文件夹** [详情](https://github.com/BiYuqi/webpack-seed/tree/master/src/views) (开发环境views下创建)
* 该文件夹包含 **模块模板写页面(模块名.ejs) + 模板混合(tpl.js) + index.js（该模块业务逻辑）** 打包后会自动注入，无需手动引入js文件 [详情](https://github.com/BiYuqi/webpack-seed/tree/master/src/views/about)
* 各个js功能模块之间互相引用，一律使用ES6语法
* 样式编写基于各模块入口js直接 **import '样式地址 '** [参考](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/about/index.js#L2) 
* 页面(.ejs)--图片引入方式 [详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/about/about.ejs#L6)

* **assets是webpack resolve配置好的别名，代表assets目录**
```html
<img src="<%= require('assets/image/demo.png') %>" alt="">
```
* 页面header配置位置(即nav导航栏配置)[详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/components/nav-bar/nav-bar.ejs)

## 目录介绍 （Introduction）

* **build/**
* ---config.js 开发，打包基础配置
* ---utils.js 多入口，多页面基础配置
* ---webpack.base.config.js 基础配置
* ---webpack.dev.config.js 开发环境
* ---webpack.prod.config.js 打包环境
* **src/**
* ---common/ 项目公用资源（图片, 各种工具等）
* ----------------libs.js 第三库自动渲染到页面 [详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/components/footer/footer.ejs) [配置](https://github.com/BiYuqi/webpack-seed/blob/master/src/common/libs/libs.js) [使用](https://github.com/BiYuqi/webpack-seed/blob/master/src/layout/layout/layout.js#L5)
* ---components 项目模板 （复用的页面片段,目前该模板已趋于稳定，细节样式需调整）
* ---layout/ 项目结构模板 (供各个子模块调用，后续可扩展多样化模板,可以添加不带侧边栏的模板等)
* ----------------layout 默认模板（header+footer）
* ----------------layout-without-nav [可以添加类似模板] #todo
* ---views/ （模块开发文件夹)
* ----------------子模块，各种模块页面
* ---vendor/ 第三方库存放在此


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
- [x] 添加ejs模板，进行页面(首尾)复用（ejs在本项目中目前只做模板引用，具体页面目前只能写html,后期考虑增加模板支持，暂定[art-template](https://github.com/aui/art-template)  [art-template中文文档](https://aui.github.io/art-template/zh-cn/docs/)）
- [x] mini-css-extract-plugin 提取js内引入scss文件失败, 打包后依然在js文件（已解决）
- [x] 首页页面模板未完成（单独处理打包）
- [x] 添加第三方库以链接的方式引入
- [x] 增加ESLint代码校验
- [ ] 增加两个文件夹，一个是fix IE兼容, 一个是引入的公用库，自动加载第三方库到页面，避免手动填写
- [ ] 添加多样化layout模板支持(示例)
- [ ] 添加完整网站demo示例
- [ ] 添加doc使用说明以及实现思路解析

## LONG TODO（Base on master）
- [ ] 建立分支web-system（后台管理系统模板）, web-pc (大众网站模板), web-mobile(移动端模板)


## 实现思路 （Ideas）

* build/utils.js 为js, html多入口逻辑方法
* ejs目前仅仅是共用(比如header, footer, nav, sidebar)部分整合, 模块开发暂不支持动态数据
* 每个js就是一个入口
* 每个入口打包为一个html页面(自动注入相关js)
* TODO 待有空仔细讲解下具体实现

## 更新日志 (Update log)
2018.10.11
* 单独抽离css样式问题修复

2018.10.07
* 修改打包后js输出路径，原有js跟着页面文件夹打包后在一起, 现在统一打包到dist/js目录下, 理由是页面script 展示好看...属于优化项

## 参考（Thanks）

本脚手架开发中，ejs模板渲染实现这块参考了[webpack-seed](https://github.com/Array-Huang/webpack-seed), 特此备注