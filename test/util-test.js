import { expect } from 'chai'
import { isEmptyObject } from '../src/common/utils/tools.js'

describe('Test project tools\'s method', () => {
  it('isEmptyObject\'s param  empty objectshould be return true', () => {
    expect(isEmptyObject({})).to.equal(true)
  })

  it('isEmptyObject\'s param not empty object should be return false', () => {
    expect(isEmptyObject({a: 1})).to.equal(false)
  })
})