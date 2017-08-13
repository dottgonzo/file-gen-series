import * as nodeFileGen from '../index'

import * as chai from 'chai'

const filepath = '/tmp/Bonobo - Ketto-4tXFA6jTulk.mp4'
const filepathZero = '/tmp/Bonobo - Ketto-4tXFA6jTulk_000099.mp4'
const options = {
  numberLenght: 5
}
const expect = chai.expect
describe('Main File Gen Test', function () {

  describe('Next path Test', function () {
    it('generate next path', function () {
      const nextpath = nodeFileGen.nextPath(filepathZero)
      expect(nextpath).to.be.ok
      expect(nextpath).to.be.a('string')

      
    })

  })
})   