var events = require('events');
var eventObj = new events.EventEmitter();

var responde = function () {
	console.log("Baila baila baila conmigo");
};

eventObj.on('baila', responde);

eventObj.emit('baila');