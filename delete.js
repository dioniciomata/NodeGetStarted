var fs = require('fs');
fs.unlink('mynewfileopen.txt', function (err) {
	if(err) throw err;
	console.log("file deleted");
});