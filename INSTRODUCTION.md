## 开发规范

* **import引入 export导出** [具体请参考 ES6 module语法](http://es6.ruanyifeng.com/#docs/module)
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
* 页面公用css，全部需要在公用base.js引入(便于webpack处理),[配置](https://github.com/BiYuqi/webpack-seed/blob/master/src/common/js/base.js),然后每个页面引入base.js [使用](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/index/index.js#L4)
* 页面开发跳转页面都是基于打包后输出的绝对路径进行编写 **html/模块.html** [详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/index/index.ejs)
* 全部采用模块化开发，**每个模块都是一个文件夹** [详情](https://github.com/BiYuqi/webpack-seed/tree/master/src/views) (开发环境views下创建)
* 该文件夹包含 **模块模板写页面(模块名.ejs) + 模板混合(tpl.js) + index.js（该模块业务逻辑）** 打包后会自动注入，无需手动引入js文件 [详情](https://github.com/BiYuqi/webpack-seed/tree/master/src/views/about)
* 各个js功能模块之间互相引用，一律使用ES6语法
* 样式编写基于各模块入口js直接 **import '样式地址 '** [参考](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/about/index.js#L2) 
* 页面(.ejs)--图片引入方式 [详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/about/about.ejs#L10)

* **assets是webpack resolve配置好的别名，代表assets目录**
```html
<img src="<%= require('assets/image/demo.png') %>" alt="">
```
* 页面header配置位置(即nav导航栏配置)[详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/components/header/header.ejs)
* 页面footer配置位置(即footer底部栏配置)[详情](https://github.com/BiYuqi/webpack-seed/blob/master/src/components/footer/footer.ejs)
* 页面header footer业务逻辑(即两者公用js)建议写在common/js该文件下, 统一由base.js注入[示例](https://github.com/BiYuqi/webpack-seed/blob/master/src/common/js)
* 页面支持ejs模板开发,模板文件建议统一规划到一个文件夹(本项目目前放在[templates/](https://github.com/BiYuqi/webpack-seed/tree/master/src/templates)注:views/目录只能放页面模块，不可放模板) 具体请看 [模板](https://github.com/BiYuqi/webpack-seed/blob/master/src/templates/index.test.ejs) [使用](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/index/index.js#L7)

## 目录结构 （Source）

* **build/**
* ---config.js 开发，打包基础配置(包含输出文件名, 路径配置等都在此配置)
* ---utils.js 多入口，多页面基础配置
* ---webpack.base.config.js 基础配置
* ---webpack.dev.config.js 开发环境
* ---webpack.prod.config.js 打包环境
* **src/**
* ---common/ 项目公用资源 (公用图片,css,js等配置)
* ----------------libs.js 第三库自动渲染到页面(此处配置的静态资源,会自动注入到页面) [配置](https://github.com/BiYuqi/webpack-seed/blob/master/src/common/libs/libs.js) [注入页面](https://github.com/BiYuqi/webpack-seed/blob/master/src/components/footer/footer.ejs) [底层实现](https://github.com/BiYuqi/webpack-seed/blob/master/src/layout/layout/layout.js#L5)
* ---api 接口请求配置 [配置](https://github.com/BiYuqi/webpack-seed/blob/master/src/api/request.js) [编写](https://github.com/BiYuqi/webpack-seed/blob/master/src/api/movie.js) [使用](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/about/index.js#L8)
* ---components 项目模板 （复用的页面片段,目前该模板已趋于稳定，细节样式需调整）
* ---layout/ 项目结构模板 (供各个子模块调用，后续可扩展多样化模板,可以添加不带侧边栏的模板等)
* ----------------layout 默认模板（header+footer）
* ----------------layoutAuth 定制化模板 (比如登录页没有header或者相关)
* ----------------XXXXXXXX 可根据业务需求，定制自己的页面基础模板
* ---templates/ 页面中使用到的模板片段存放目录
* ---views/ （模块开发文件夹)
* ----------------子模块，各种模块页面
* ---vendor/ 第三方库存放在此

## 接口调用说明(axios)
> 本项目默认使用axios调用，可自行更换为JQ的ajax(兼容性好)，本项目目前(axios)接口只能支持到IE10+, 项目本身支持IE9+

[接口使用说明](https://github.com/BiYuqi/webpack-seed/blob/master/src/api/README.md)