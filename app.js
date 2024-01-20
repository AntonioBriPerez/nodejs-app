const http = require('http');
const port = process.env.PORT || 3000;
const dbURL =  'mongodb://user:123@18.101.118.156:27017/db';
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Node.js server is running on port ${port} with DB connection URL ${dbURL}`);
}).listen(port);
