/**
 * Winner namespace.
 *
 * @namespace Winner
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let Winner = (function() {

  /**
   * Analyze the array with names and returns an object where the frequency of the name is showing.
   *
   * @param {String[]} data
   * @returns {Object.<String, Number>} - The object as example: {'mats': 1, 'john': 3}
   */
  let getFrequencyInArray = function(data) {

    // TODO: Write your code here. Start here!

  };

  /**
   * Takes an object with names and values and returns the name(s) with highest value.
   *
   * @param {Object.<String, Number>} frequency
   * @returns {String[]}
   */
  let getHighestValuesInFrequency = function(frequency) {

    // TODO: Write your code here

  };

  /**
   * Sorts an array with strings in ascending order.
   *
   * @param {String[]} data
   * @returns {String[]}
   */
  let sortStringsAscending = function(data) {

    // TODO: Write your code here

  };

  /**
   * Analyze the array and returns an array with the name (in lowercase, ascending order) that is most
   * frequent.
   *
   * @param {String[]} data An array with all the winners.
   * @returns {String[]} An array with the most frequent winners.
   */
  const getWinners =  function(data) {
    // ---------------------------------------
    // Do not be changed the in this function!
    // ---------------------------------------
    let sortedKeys;
    let frequency;

    frequency = getFrequencyInArray(data);
    sortedKeys = getHighestValuesInFrequency(frequency);

    return sortStringsAscending(sortedKeys);
  };

  return {
    getFrequencyInArray,
    getHighestValuesInFrequency,
    sortStringsAscending,
    getWinners
  };
})();

module.exports = Winner;
