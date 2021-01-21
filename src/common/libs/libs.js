/**
 * 第三方库地址映射变量
 * src/layout/layout/index.js 初始化注入配置信息
 * src/layut/base/footerBase/footerBase.ejs 自动注入页面body之前
 * src/layut/base/headBase/headBase.ejs 自动注入head
 * 注意路径问题
 * 只需要在此处配置好，页面会自动遍历jsPart和fixIe引入的文件到对应位置
 */
export const libsConfig = {
  jsPart: {
    // 如果你想加载第三方库, 可以这样配置=, 会自动注入到html, body区域
    jquery: require('!!file-loader?name=libs/js/[name].[ext]!../../vendor/common/jquery-3.3.1.min.js')
  },
  fixIePart: {
    html5shive: require('!!file-loader?name=libs/js/[name].[ext]!../../vendor/fix-ie/html5shiv.min.js'),
    respond: require('!!file-loader?name=libs/js/[name].[ext]!../../vendor/fix-ie/respond.min.js')
  }
}
