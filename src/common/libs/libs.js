/**
 * 第三方库地址映射
 * src/layout/layout/layout.js 初始化注入
 * src/components/footer.ejs 自动注入
 * 注意路径问题
 * 只需要在此处配置好，页面会自动引入
 */
const BUILD_STATIC_FILES = {
  STATIC_BUILD: {
    js: {
      jquery: require('!!file-loader?name=libs/js/[name].[ext]!../../vendor/common/jquery-3.3.1.min.js')
    },
    fixIe: {
      html5shive: require('!!file-loader?name=libs/js/[name].[ext]!../../vendor/fix-ie/html5shiv.min.js'),
      respond: require('!!file-loader?name=libs/js/[name].[ext]!../../vendor/fix-ie/respond.min.js')
    }
  }
}
module.exports = BUILD_STATIC_FILES