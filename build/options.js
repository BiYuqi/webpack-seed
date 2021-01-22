const { findExistSync } = require('./utils')
const hasWsConfig = findExistSync(process.cwd(), 'ws.config.js')

const options = {
  port: 8989,
  baseDir: '/',
  outputDir: 'dist',
  chainWebpack: () => {}
}

module.exports = {
  ...options,
  ...(hasWsConfig ? require(`${process.cwd()}/ws.config.js`) : {})
}
