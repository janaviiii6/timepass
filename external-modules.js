const lodash = require('lodash')

// flatens the array 
const items = [1,[2,[3,[4]]]]

const newItems = lodash.flattenDeep(items)

console.log(newItems);