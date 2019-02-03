import { expect } from 'chai'
import { isEmptyObject, pickBy } from '@/common/utils/tools.js'

describe('Test utils', () => {
  describe('isEmptyObject', () => {
    it('should return true', () => {
      expect(isEmptyObject({})).to.equal(true)
    })

    it('should return false', () => {
      expect(isEmptyObject({ a: 1 })).to.equal(false)
    })
  })

  describe('pickBy', () => {
    it('should return correct value', () => {
      const testCaseOne = {
        testA: 'testA',
        testB: null,
        testC: false
      }
      expect(pickBy(testCaseOne)).to.deep.equal({
        testA: 'testA'
      })
    })

    it('should return correct value', () => {
      const testCaseTwo = {
        testD: 'testD',
        testE: NaN
      }
      expect(pickBy(testCaseTwo)).to.deep.equal({
        testD: 'testD'
      })
    })
  })
})
