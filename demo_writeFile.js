var fs = require('fs');
fs.writeFile('mynewfilewriteFile.txt', 'reemplazado con fs.writeFile', function (err) {
	if(err) throw err;
	console.log("saved");
});