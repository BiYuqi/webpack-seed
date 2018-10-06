/**
 * 第三方库地址映射
 * src/layout/layout/layout.js 注入
 * src/components/footer.ejs 写入
 */
const BUILD_STATIC_FILES = {
  STATIC_BUILD: {
    js: {
      jquery: require('!!file-loader?name=libs/js/[name].[ext]!../src/vendor/jquery-3.3.1.min.js')
    }
  }
}
module.exports = BUILD_STATIC_FILES