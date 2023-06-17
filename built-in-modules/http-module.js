const http = require('http')

//Creating a server
const server = http.createServer((req,res)=>{
    if(req.url === '/')
        res.end('This is the home page')
    if(req.url === '/about')
        res.end('This is the about page')
    res.end(`<h1>404 Resource not found</h1>`)
})

//listen on which port number the result should be displayed
server.listen(9000)