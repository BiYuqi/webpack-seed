## 基于webpack工具模块化开发基于apicloud的终端应用

## vue版
> 基于vue-cli改造

## normal(无框架版)
> 基于webpack多页面

**dev**
```js
npm run dev
```

**build**
```js
npm run build
```

* 页面开发跳转页面都是基于绝对路径 **html/模块/模块.html**
* 页面引入的图片都是以 **~assets** 开头 代表 **assets文件夹目录**
* 全部采用模块化开发，**每个模块都是一个文件夹** (开发环境views下创建)
* 该文件夹包含 **模块名 + 同名js** 打包后会自动注入，无需手动引入js文件
* 各个js功能模块之间互相引用，一律使用ES6语法
* 样式编写基于各模块入口js直接 **import '样式地址 '** 具体可参考normal/views/about/about.js
**import引入 export导出**

**打包后输出目录**

dist/
----html
----image
----js
----config.xml
----index.html

**TODO**
res文件, icon文件等创建.

## Now
- [x] normal / 基于webpack搭建项目
- [x] normal / 公共js自动提取，模块js自动注入所属模块页面
- [x] normal / 样式编写直接import载入
- [ ] normal / 未与apicloud整合测试
- [ ] 基于vue搭建

## TODO
- [ ] webpack 4.X mini-css-extract-plugin 提取js内引入scss文件失败, 打包后依然在js文件