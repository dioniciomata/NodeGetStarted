// Load http module
var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;
// Create http server and listen to port 8080
http.createServer(function (req, res){

// Set the response with status and content type
	res.writeHead(200, {'Content-Type':'text/plain'});
	console.log(hostname+port);
	res.end('Hello Dio');


// listen for request and log the port 
}).listen(8080);