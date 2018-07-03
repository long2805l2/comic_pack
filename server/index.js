var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var API = require ('./js/api.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/client/assets'));

app.get('/', function(request, response, next)
{
	response.sendFile(__dirname + "/client/index.html")
});

app.post('/request', function(request, response, next)
{
	let cmd = request.body.cmd;
	let encode = "";
	if (request.body.e)
		encode = request.body.e;

	let params = request.body.d;
	// if (encode)
	// 	params = decode (params);

	API.call (cmd, params, function (obj)
	{
		response.status (200);
		response.send (obj);
	});
});

server.listen(4200, function () {
	console.log ("http://localhost:4200");
});