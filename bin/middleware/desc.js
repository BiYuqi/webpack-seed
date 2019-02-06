const { getDirectoryName } = require('../utils/utils')

const hasNest = name => {
  return name.indexOf('/') > -1
}

const descCheck = desc => {
  if (!/^[a-z_-]+$/.test(desc)) {
    return '文件仅支持字母,下划线,中划线,暂不支持数字, 且不能为空'
  }
  const result = getDirectoryName()
  if (result.includes(desc)) {
    return '文件夹已存在,请换个文件名重试'
  }
  return true
}

module.exports = descCheck
