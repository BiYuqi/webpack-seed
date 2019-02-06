const path = require('path')
const fs = require('fs')
const { log } = require('../utils/utils')

module.exports = (address, template = '') => {
  fs.writeFileSync(path.resolve(__dirname, '../../', address), template, 'utf8')
  log('create: ' + address)
}
