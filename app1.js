const fs =require('fs');

const reqResHandler = (res,req) =>{
const url = req.url;
const method = req.method;
if (url === '/') {
    res.write('<html>')
    res.write('<head><title>responce</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name ="message"/><button type ="submit">send</button></form> </body>')
    res.write('/</html>')
}
if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunck) => {
        console.log(chunck); body.push(chunck);
    })
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message= parsedBody.split('=')[1];

        fs.writeFile('message.txt', message,(e)=>{
            res.statusCode = 302;
            res.setHeader('location', "/");
            return res.end();
        });
    })
   
   
}
}
module.exports ={
    handler: reqResHandler,
    text: "helloo i am bhanu kiran "
}