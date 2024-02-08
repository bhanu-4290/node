const http = require('http');
const app1 =require("./app1")
console.log("console  is app.js", app1.text)

const server = http.createServer(app1)

server.listen(3000);