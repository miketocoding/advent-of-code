// node day1.js advent-day1.txt
'use strict'
const getFile = require('./getFile.js')

const inFile = process.argv[2]

if (!inFile) {
    throw new Error('missing file')
} else {
    getFile(inFile)
}