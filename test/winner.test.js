/**
 * Tests for the winner module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const winner = require('../src/winner')
const expect = require('chai').expect

// getFrequenciesOfNames --------------------------------------------
describe('Test the getFrequenciesOfNames function', () => {
  it('Must throw a TypeError if the source parameter is not an Array.', done => {
    expect(() => { winner.getFrequenciesOfNames('Not an array.') }).to.throw(TypeError)
    done()
  })

  it('Must NOT return the same Array object the source parameter refers to.', done => {
    const arr = ['Mats', 'john', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan']
    const res = winner.getFrequenciesOfNames(arr)
    expect(res).to.an('object').and.to.not.eql(arr)
    done()
  })

  it('The source array must be untouched.', done => {
    const arr = ['Mats', 'john', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan']
    const res = winner.getFrequenciesOfNames(arr)
    expect(res).to.an('object')
    expect(arr).to.eql(['Mats', 'john', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan'])
    done()
  })

  it('Should return an object in form of an associacted array (hashes). One winner.', done => {
    const obj =
      {
        mats: 1,
        john: 3,
        johan: 2,
        jacob: 2
      }
    const result = winner.getFrequenciesOfNames(['Mats', 'john', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan'])
    expect(result).eql(obj)
    done()
  })

  it('Should return an object in form of an associacted array (hashes). Two winners.', done => {
    const obj =
      {
        mats: 1,
        john: 3,
        johan: 3,
        jacob: 2
      }
    const result = winner.getFrequenciesOfNames(['Mats', 'john', 'johan', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan'])
    expect(result).eql(obj)
    done()
  })
})

// getMostFrequentNames ---------------------------------------------
describe('Test the getMostFrequentNames function', () => {
  it('The source object must be untouched.', done => {
    const obj = {
      mats: 1,
      john: 3,
      johan: 2,
      jacob: 2
    }
    const res = winner.getMostFrequentNames(obj)
    expect(res).to.an('array')
    expect(obj).to.eql({
      mats: 1,
      john: 3,
      johan: 2,
      jacob: 2
    })
    done()
  })

  it('Should return an array containing one name.', done => {
    const obj = {
      mats: 1,
      john: 3,
      johan: 2,
      jacob: 2
    }

    const res = ['john']
    const result = winner.getMostFrequentNames(obj)
    expect(result).eql(res)
    done()
  })

  it('Should return an array containing two names when two have highest frequency count.', done => {
    const obj = {
      mats: 1,
      john: 3,
      johan: 3,
      jacob: 2
    }

    const res = ['john', 'johan']
    const result = winner.getMostFrequentNames(obj)
    expect(result).eql(res)
    done()
  })
})

// sortNamesAscending -----------------------------------------------
describe('Test the sortNamesAscending function', () => {
  it('Must NOT return the same Array object the source parameter refers to.', done => {
    const arr = ['john', 'mats', 'johan', 'jacob']
    const res = winner.sortNamesAscending(arr)
    expect(res).to.an('array').and.to.not.eql(arr)
    done()
  })

  it('The source array must be untouched.', done => {
    const arr = ['john', 'mats', 'johan', 'jacob']
    const res = winner.sortNamesAscending(arr)
    expect(res).to.an('array')
    expect(arr).to.eql(['john', 'mats', 'johan', 'jacob'])
    done()
  })

  it('Should return an array sorted in ascending order.', done => {
    const arr = ['john', 'mats', 'johan', 'jacob']
    const result = winner.sortNamesAscending(arr)
    expect(result).eql(['jacob', 'johan', 'john', 'mats'])
    done()
  })
})

// getNamesOfWinners ------------------------------------------------
describe('Test the getNamesOfWinners function', () => {
  it('Should return [\'john\'] when called with ' +
    '[\'Mats\', \'john\', \'John\', \'johan\', \'jacob\', \'john\', \'jacob\'].', done => {
    const result = winner.getNamesOfWinners(['Mats', 'john', 'John', 'johan', 'jacob', 'john', 'jacob'])
    expect(result).eql(['john'])
    done()
  })

  it('Shold return [\'jacob\', \'johan\', \'john\'] when called with ' +
    '[\'Mats\', \'Johan\', \'John\', \'johan\', \'jacob\', \'john\', \'jacob\'].', done => {
    const result = winner.getNamesOfWinners(['Mats', 'Johan', 'John', 'johan', 'jacob', 'john', 'jacob'])
    expect(result).eql(['jacob', 'johan', 'john'])
    done()
  })
})
