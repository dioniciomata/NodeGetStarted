var fs = require('fs');
fs.appendFile('mynewfilenew.txt', 'Hola precioso', function (err) {
		if (err) throw err;
		console.log('Saved!');	
});