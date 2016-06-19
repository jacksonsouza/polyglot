//reads text from file given in args
//displays the text on port 8000

var fs = require('fs');
var http = require('http');

var display = "",
	fileName = process.argv.slice(2);

fs.readFile(fileName[0],'utf8',function(err, data){
	if (err) {
		throw err;
	} else {
		display = data;
	}
});

var s = http.createServer(function(req, res){
	res.writeHead(200);
	res.end(display);
});

s.listen(8000);