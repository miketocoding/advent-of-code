const fs = require('fs')

const getFile = function(inFile) {
    fs.readFile(inFile, { encoding: 'utf8'}, (error, content) => {
        if(error) {
            console.error(error)
        }
//         turn content into an array of each line
        const lines = content.split('\n')
//         clean up the array by removing all empty lines
//          non-empty lines are names, so save them to a new variable
        const depth = lines.filter(line => line !== '')
        const num = depth.map(num => +num)
        console.log(num)
            //     how many increases?
        let count = 0
        for (let i = 1; i < num.length; i++) {
            if (num[i-1] < num[i]) {
                count++
            }
        }
        console.log({count})
        return count
    })
}

module.exports = getFile