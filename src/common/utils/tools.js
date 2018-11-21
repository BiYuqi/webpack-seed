/**
 * 是否是空对象
 * @param {Object} obj
 */
export const isEmptyObject = (obj) => {
  for (let i in obj) {
    return false
  }
  return true
}