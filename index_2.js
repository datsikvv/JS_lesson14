const http = require('http');
const fs = require('fs');
const loadJsonFile = require('load-json-file');

const hostname = 'localhost';
const port = 3000;


let fileJson = (async () => {
    console.log(await loadJsonFile('pubinfo.json'));
})();


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  req.fileJson();
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
