const http = require('http');
const app = require('./app');

const port = process.env.port || 3000;

const server = http.createServer();

server.listen(port, function() {
    new Date().toISOString() + ": server started on port 3000"
});