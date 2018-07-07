"use strict";

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var API = require ('./js/api.js');

//allow client access api
app.use(cors({origin: 'http://localhost:4201'}));

app.post('/request', bodyParser.raw(), function(request, response, next)
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