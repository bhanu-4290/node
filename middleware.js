const http = require("http");
const express = require("express");
const app = express()
app.use((req, res, next) => {
    console.log("hellooo world ");
    next();
})
app.use((req,res,next)=>{
    console.log("hellooo world ");
    
})
const server =http.createServer(app);
server.listen(3000)