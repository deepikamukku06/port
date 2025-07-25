const http=require('http');

const server=http.createServer((req,res)=>
{
    if(req.method==='POST'){
        let body=' ';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>
        {
            console.log('received data',body);
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('data received successfully');
        });
    }
    else{
        res.writeHead(200,{"content-type":'text/html'});
        res.end(`
            <h1> Data transfer demo</h1>
            <form method="POST">
            <input type="text" name="message" placeholder="enter the message">
            <button type="submit">send data</button>
</form>`);
    }});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});
