const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

let index = fs.readFileSync('index.html')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
	res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
} else if (req.url == '/about') {
	res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(req)
    res.end();
} else if (req.url == '/contact') {
	res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.end(index);
} 

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
 
});


