var http = require('http')
require("dotenv").config();
var port = process.env.port

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello, This is your response. Thank you!')
}).listen(port)

console.log('Server running in port, ', port)
console.log('process.cwd(), ', process.cwd())
console.log('Filename via __filename, ', __filename)
console.log('Directory name via __dirname, ', __dirname)