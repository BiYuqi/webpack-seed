/**
 * 第三方库地址映射变量
 * src/layout/layout/index.js 初始化注入配置信息
 * 注意路径问题, 只需要在此处配置好,页面会自动遍历jsPart和fixIe引入的文件到对应位置
 */
export const libsConfig = {
  cssPart: {
    bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
  },
  jsPart: {
    // 如果你想加载第三方库, 可以这样配置=, 会自动注入到html, body区域, 可以引用CDN, 也可以引用静态文件
    // jquery: require('!!file-loader?name=libs/[name].[ext]!../../vendor/common/jquery-3.3.1.min.js'),
    jquery: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
    bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js'
  },
  fixIePart: {
    html5shive: require('!!file-loader?name=libs/[name].[ext]!../vendor/fix-ie/html5shiv.min.js'),
    respond: require('!!file-loader?name=libs/[name].[ext]!../vendor/fix-ie/respond.min.js')
  }
}
