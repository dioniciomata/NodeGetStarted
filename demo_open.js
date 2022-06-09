var fs = require('fs');
fs.open('mynewfileopen.txt', 'w', function (err, file) {
	if(err) throw err;
	console.log('Saved');
});