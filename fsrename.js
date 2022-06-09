var fs = require('fs');
fs.rename('mynewfilewriteFile.txt', 'newname.txt', function(err) {
	if(err) throw err;
	console.log('file renamed');
});