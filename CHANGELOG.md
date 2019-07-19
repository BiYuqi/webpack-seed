## 迭代日志
2019.06.01!!
* 支持配置注入script, 优势避免硬编码插入script,直接支持构建时插入script
[配置文件](https://github.com/BiYuqi/webpack-seed/blob/master/src/common/libs/scriptTags.js)
[本项目使用案例](https://github.com/BiYuqi/webpack-seed/blob/master/src/layout/base/headerBase/headerBase.ejs#L14)

2019.03.29
* 变更基础模板位置from `src/component/` to `src/layout/base`

2019.02.06
* 新增命令行创建页面[README](./bin/README.md)

2018.10.22
* 增加个性化模板案例[layout-without-header-footer](https://github.com/BiYuqi/webpack-seed/tree/master/src/layout/layout-without-header-footer)

2018.10.21
* 增加模板片段支持,页面中可复用的html都可以抽离为ejs模板片段, 由ejs-loader进行编译 [模板](https://github.com/BiYuqi/webpack-seed/blob/master/src/templates/index.test.ejs) [使用](https://github.com/BiYuqi/webpack-seed/blob/master/src/views/index/index.js#L7)

2018.10.15
* 静态资源vendor文件夹分类，common与fixIe 这两个文件夹的文件都会被自动注入到页面引用; 使用者只需要配置[lib.js](https://github.com/BiYuqi/webpack-seed/blob/master/src/common/libs/libs.js)即可

2018.10.11
* 单独抽离css样式问题修复

2018.10.07
* 修改打包后js输出路径，原有js跟着页面文件夹打包后在一起, 现在统一打包到dist/js目录下, 理由是页面script 展示好看...属于优化项