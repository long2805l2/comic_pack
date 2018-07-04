var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var API = require ('./js/api.js');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/client/assets'));
app.use('/protos', express.static(__dirname + '/protos'));
app.use('/js/protobuf.js', express.static(__dirname + '/node_modules/protobufjs/dist/protobuf.js'));

app.get('/', function(request, response, next)
{
	response.sendFile(__dirname + "/client/index.html");
});

app.post('/request', function(request, response, next)
{
	API.call (request.body, function (obj)
	{
		response.status (200);
		response.send (obj);
	});
});

server.listen(4200, function () {
	console.log ("http://localhost:4200");
});