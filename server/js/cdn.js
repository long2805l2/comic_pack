/*
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
*/