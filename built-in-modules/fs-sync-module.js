const {readFileSync,writeFileSync} = require('fs')

const file1 = readFileSync('./content/first.txt','utf8')
const file2 = readFileSync('./content/second.txt','utf8')

console.log(file1,file2);
console.log('start')
writeFileSync(
    './content/file3.txt',
    `Here is the new file created by the built-in module: ${file1}, ${file2}`,
    {flag: 'a'}

)
console.log('done with the task')
console.log('starting a new task')