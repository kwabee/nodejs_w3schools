var http = require('http');
var dt = require('./returndatemodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end('Hello World!');
}).listen(8080);

console.log('This example is different!');
console.log('The result is dipslayed in the Command Line Interface');