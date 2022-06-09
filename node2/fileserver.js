// var http = require('http');
var url = require('url');
var summer = ('http://localhost:8080/summer.html')
var fs = require('fs');

// http.createServer(function (req, res) {
  var obj = url.parse(req.url);
  console.log(obj.host);
  console.log(obj.pathname);
  console.log(obj.search);
  // res.writeHead(200);
  // res.end();
// }).listen(8080);