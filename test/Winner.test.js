/**
 * Tests for the Winner namespace.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let Winner = require('../src/Winner');
let expect = require('chai').expect;

describe('Test the getFrequencyInArray function', function() {

  it('should return correct object', function(done) {
    let obj =
    {
      mats: 1,
      john: 3,
      johan: 2,
      jacob: 2
    };
    let result = Winner.getFrequencyInArray(['Mats', 'john', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan']);
    expect(result).eql(obj);
    done();
  });

  it('should return correct object', function(done) {
    let obj =
    {
      mats: 1,
      john: 3,
      johan: 3,
      jacob: 2
    };
    let result = Winner.getFrequencyInArray(['Mats', 'john', 'johan', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan']);
    expect(result).eql(obj);
    done();
  });
});
//

describe('Test the getHighestValuesInFrequency function', function() {
  it('should return correct array', function(done) {

    let obj = {
      mats: 1,
      john: 3,
      johan: 2,
      jacob: 2
    };

    let res = ['john'];
    let result = Winner.getHighestValuesInFrequency(obj);
    expect(result).eql(res);
    done();
  });

  it('should return correct array when two or more have same value', function(done) {
    let obj = {
      mats:  1,
      john: 3,
      johan: 3,
      jacob: 2
    };

    let res = ['john', 'johan'];
    let result = Winner.getHighestValuesInFrequency(obj);
    expect(result).eql(res);
    done();
  });
});

describe('Test the sortStringsAscending function', function() {

  it('should return correct array', function(done) {
    let arr = ['john', 'mats', 'johan', 'jacob'];
    let result = Winner.sortStringsAscending(arr);
    expect(result).eql(['jacob', 'johan', 'john', 'mats']);
    done();
  });

});

describe('Test the getWinner function', function() {

  it('should return [\'john\'] when called with ' +
    '[\'Mats\', \'john\', \'John\', \'johan\', \'jacob\', \'john\', \'jacob\']', function(done) {
    let result = Winner.getWinners(['Mats', 'john', 'John', 'johan', 'jacob', 'john', 'jacob']);
    expect(result).eql(['john']);
    done();
  });

  it('return [\'jacob\', \'johan\', \'john\'] when called with ' +
    '[\'Mats\', \'Johan\', \'John\', \'johan\', \'jacob\', \'john\', \'jacob\']', function(done) {
    let result = Winner.getWinners(['Mats', 'Johan', 'John', 'johan', 'jacob', 'john', 'jacob']);
    expect(result).eql(['jacob', 'johan', 'john']);
    done();
  });

});
