var url = require('url');
var adr = ("http://localhost:8080/default.htm?year=2017&month=february");
var obj = url.parse(adr, true);

console.log(obj.host);
console.log(obj.pathname);
console.log(obj.search);

var objdata = obj.query;
console.log(objdata.year);