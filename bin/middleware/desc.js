const { getDirectoryName, log } = require('../utils/utils')

const check = name => {
  if (/\d/.test(name)) {
    return true
  }
  return false
}

const hasNest = name => {
  return name.indexOf('/') > -1
}

const descCheck = desc => {
  if (!desc) {
    return '不能为空'
  }
  if (check(desc)) {
    return '模块不能包含数字'
  }
  const result = getDirectoryName()
  if (result.includes(desc)) {
    return '文件夹已存在,请换个文件名重试'
  }
  return true
}

module.exports = descCheck
