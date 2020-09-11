var express = require('express');
var app = express();

try {
	var SerialPort = require("serialport");
	const Readline = SerialPort.parsers.Readline;
	var port = new SerialPort("/dev/ttyACM0", {
		baudRate: 9600,
	});
	const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
	
	port.open(function() {
		parser.on("data", function(data){
			console.log(data);
		});
	});
}
catch(error) {
	console.log('Error: ')
	console.log(error)
}

// Enable HTML template middleware
app.engine('html', require('ejs').renderFile);

// Enable static CSS styles
app.use(express.static('styles'));

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.render('index.html');
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
