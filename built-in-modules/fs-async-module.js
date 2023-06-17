const {readFile,writeFile} = require('fs')

//callback
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err);
            return
        }
        const second = result
        writeFile(
            './content/file4.txt',
            `Hello world: ${first},${second}`,
            {flag: 'a'},
            (err,result)=>{
                if(err)
                {
                    console.log(err);
                    return
                }
                console.log(result);
            })   
        console.log('done with the task');
    })
})

console.log('starting with the new task');