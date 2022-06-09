var fs = require('fs');
fs.appendFile('mynewfilenew.txt', 'Cómo estas?', function (err) {
		if (err) throw err;
		console.log('Saved!');	
});