## 迭代日志
2018.10.22
* 增加个性化模板案例[layoutAuth](https://github.com/BiYuqi/webpack-seed/tree/master/src/layout/layoutAuth)

2018.10.21
* 增加模板片段支持,页面中可复用的html都可以抽离为ejs模板片段, 由ejs-loader进行编译 [模板](https://github.com/BiYuqi/webpack-seed/blob/master/src/templates/index.test.ejs) [使用](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/index/index.js#L7)

2018.10.15
* 静态资源vendor文件夹分类，common与fixIe 这两个文件夹的文件都会被自动注入到页面引用; 使用者只需要配置[lib.js](https://github.com/BiYuqi/webpack-seed/blob/master/src/common/libs/libs.js)即可

2018.10.11
* 单独抽离css样式问题修复

2018.10.07
* 修改打包后js输出路径，原有js跟着页面文件夹打包后在一起, 现在统一打包到dist/js目录下, 理由是页面script 展示好看...属于优化项