/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const winner = require('./src/winner')

console.log(winner.getWinners(['mats', 'John', 'john', 'Mats', 'jacob']))
console.log(winner.getWinners(['mats', 'John', 'johan', 'Mats', 'jacob']))
console.log(winner.getWinners(['mats', 'John', 'johan', 'Mats', 'jacob', 'Johan']))
