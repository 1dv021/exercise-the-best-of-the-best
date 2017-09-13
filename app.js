/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const winner = require('./src/winner')

console.log(winner.getNamesOfWinners(['mats', 'John', 'johan', 'Mats', 'jacob']))
console.log(winner.getNamesOfWinners(['mats', 'John', 'johan', 'Mats', 'jacob', 'Johan']))
