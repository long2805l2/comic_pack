"use strict";

const fs = require('fs');
var message = require('../../message');

class api extends message
{
	constructor()
	{
		super ();
		this.FUNC = {
			"requestComic": this.requestComic.bind(this),
		};
	};
	
	call (requestBuffer, callback)
	{
		// let request = this.protos.cmd.request.decode(requestBuffer);
		// let cmd = request.cmd;
		// let msg = request.msg;

		// let parser = this.protos.cmd [cmd];
		// if (!parser)
		// 	return;
		
		let func = this.FUNC["requestComic"];
		if (!func)
			return;

		// let params = parser.decode (msg);
		let params = {};
		let response = func (params);
		if (callback)
			callback (response);
	};

	requestComic (params)
	{
		let comic = this.protos.comic.create();
		comic.name = "I am a girl";
		
		let language = this.protos.tagGroups.create();
		language.name = "language";
		language.tags = ["english"];
		comic.tagGroups.push (language);
		
		let gens = this.protos.tagGroups.create();
		gens.name = "gens";
		gens.tags = ["manga"];

		comic.tagGroups.push (gens);

		comic.cover = this.protos.img.create();
		comic.cover.url = "img/cover";

		let dir = "./database/Hourou_Musuko/001.I_Am_a_Girl";
		let files = fs.readdirSync(dir);
		for (let id in files)
		{
			let file = files [id];
			let bitmap = fs.readFileSync(dir + "/" + file);
			let img = this.protos.img.create();
			img.name = file;
			img.url = new Buffer(bitmap).toString('base64');
			
			comic.gallery.push (img);
			// break;
		};
		
		let message = this.protos.responseComic.create ();
		message.comic = comic;
		
		return this.responseMessage ("responseComic", message);
	}

	responseError (type, error)
	{
		let builder = this.protos.response.create ();
		builder.cmd = type;
		builder.error = error;

		return this.protos.response.encode(builder).finish();
	}

	responseMessage (type, message)
	{
		let builder = this.protos.response.create ();
		builder.cmd = type;
		builder.error = undefined;
		builder.msg = this.protos[type].encode(message).finish();

		return this.protos.response.encode(builder).finish();
	}
}

module.exports = new api ();