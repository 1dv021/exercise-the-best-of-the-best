/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let Winner = require('./src/Winner');

console.log(Winner.getWinners(['mats', 'John', 'john', 'Mats', 'jacob']));
console.log(Winner.getWinners(['mats', 'John', 'johan', 'Mats', 'jacob']));
