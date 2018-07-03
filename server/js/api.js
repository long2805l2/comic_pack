"use strict";

const fs = require('fs');
const protobuf = require("protobufjs");
const protos = require("./protos.js");

class api
{
	constructor()
	{
		this.FUNC = {
			"requestComic": this.requestComic,
		};
	};

	//request/cmd?d=...
	call (cmd, params, callback)
	{
		let func = this.FUNC[cmd];
		if (!func)
			return;

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
			// break;
		};
		
		let response = JSON.stringify (comic);// func (params);
		// console.log ("response.length: " + response.length);

		// let msg = protos.model.comic.encode(comic).finish();
		// console.log ("msg.length: " + msg.length);
		// response = msg;
		return response;
	}
}
10623716
10623326
module.exports = new api ();