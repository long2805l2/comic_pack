"use strict";

const fs = require('fs');
const protobuf = require("protobufjs");
const protos = require("./protos.js");

class api
{
	constructor()
	{
		this.FUNC = {
			"requestComic": this.requestComic.bind(this),
		};
	};

	call (requestBuffer, callback)
	{
		let request = protos.cmd.request.decode(requestBuffer);
		let cmd = request.cmd;
		let msg = request.msg;

		let parser = protos.cmd [cmd];
		if (!parser)
			return;
		
		let func = this.FUNC[cmd];
		if (!func)
			return;

		let params = parser.decode (msg);
		let response = func (params);
		if (callback)
			callback (response);
	};

	requestComic (params)
	{
		let comic = protos.model.comic.create();
		comic.name = "I am a girl";
		
		let language = protos.model.tagGroups.create();
		language.name = "language";
		language.tags = ["english"];
		comic.tagGroups.push (language);
		
		let gens = protos.model.tagGroups.create();
		gens.name = "gens";
		gens.tags = ["manga"];

		comic.tagGroups.push (gens);

		comic.cover = protos.model.img.create();
		comic.cover.url = "img/cover";

		let dir = "./database/Hourou_Musuko/001.I_Am_a_Girl";
		let files = fs.readdirSync(dir);
		for (let id in files)
		{
			let file = files [id];
			let bitmap = fs.readFileSync(dir + "/" + file);
			let img = protos.model.img.create();
			img.name = file;
			img.url = new Buffer(bitmap).toString('base64');
			
			comic.gallery.push (img);
			break;
		};
		
		let message = protos.cmd.responseComic.create ();
		message.comic = comic;
		
		return this.responseMessage ("responseComic", message);
	}

	responseError (cmd, error)
	{
		let builder = protos.cmd.response.create ();
		builder.cmd = cmd;
		builder.error = error;

		return protos.cmd.response.encode(builder).finish();
	}

	responseMessage (cmd, message)
	{
		let builder = protos.cmd.response.create ();
		builder.cmd = cmd;
		builder.error = undefined;
		builder.msg = protos.cmd[cmd].encode(message).finish();

		return protos.cmd.response.encode(builder).finish();
	}
}

module.exports = new api ();