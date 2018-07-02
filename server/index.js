var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');
var API = require ('./js/api.js');

var assets = {
	css: {
		".css": "text/css"
	},
	img: {
		".bmp": "image/bmp",
		".gif": "image/gif",
		".jpg": "image/jpeg",
		".jpeg": "image/jpeg",
		".png": "image/png",
		".svg": "image/svg+xml",
		".tif": "image/tiff",
		".tiff": "image/tiff"
	},
	ico: {
		".ico": "image/x-icon"
	},
	audio: {

	},
	data: {
		".json": "application/json",
		".xml": "application/xml"
	},
	font: {
		".otf": "font/otf",
		".ttf": "font/ttf"
	},
	script: {
		".js": "application/javascript",
		".ts": "application/typescript"
	}
}

app.use(express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/asset/:dir/:file', function(request, response, next)
{
	let p = path.join(__dirname, request.url);
	if (!fs.existsSync (p))
	{
		response.status (404);
		response.send ("file not found");
		return;
	}

	let tem = p.split("\\");
	if (tem.length < 2)
	{
		response.status (500);
		response.send ("something wrong");
		return;
	}

	let dir = request.params.dir;
	let file = request.params.file;
	let ext = path.extname (file);

	if (ext)
		ext = ext.toLowerCase();

	if (!assets[dir])
	{
		response.status (404);
		response.send ("file not found");
		return;
	}

	let mine = assets[dir][ext];
	if (!mine)
	{
		response.status (404);
		response.send ("file not found");
		return;
	}

	response.sendFile (p);
});

app.get('/request/:cmd', function(request, response, next)
{
	console.log ("cmd: " + request.params.cmd);

	let cmd = request.params.cmd;
	let encode = "";
	if (request.query.e)
		encode = request.query.e;

	let params = request.query.d;
	// if (encode)
	// 	params = decode (params);

	API.call (cmd, params, function (obj)
	{
		response.status (200);
		response.send (JSON.stringify(request.params) + "<br/>" + JSON.stringify(request.query) + "<br/>" + obj);
	});
});

server.listen(4200, function () {
	console.log ("http://localhost:4200");
});