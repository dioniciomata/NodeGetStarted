var fs = require('fs');
fs.writeFile('mynewfilewriteFile.txt', 'creado con fs.writeFile', function (err) {
	if(err) throw err;
	console.log("saved");
});