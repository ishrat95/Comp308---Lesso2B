const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

function ServerParams(req,res){
   
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello from Ishrat Vahora having enrollment number 300986257');
   
      
}

const server = http.createServer(ServerParams);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
   