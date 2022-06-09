var http = require('http');
var mayus = require('upper-case')

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.write(mayus.upperCase("Hello World"));
	res.end();
}).listen(8080);