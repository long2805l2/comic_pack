"use strict";

var fs = require('fs');
var protobuf = require("protobufjs");
var protos = require("./protos.js");


class api
{
	constructor()
	{
		this.FUNC = {
			"test1": this.test1,
		};
	};

	//request/cmd?d=...
	call (cmd, params, callback)
	{
		let func = this.FUNC[cmd];
		if (!func)
			return;

		let comic = protos.model.comic.create();
		comic.name = "test comic";
		
		let language = protos.model.tagGroups.create();
		language.name = "language";
		language.tags = ["english"];
		
		let gens = protos.model.tagGroups.create();
		gens.name = "gens";
		gens.tags = ["super hero", "comic"];

		comic.cover = protos.model.img.create();
		comic.cover.url = "img/cover";

		let img1 = protos.model.img.create();
		img1.url = "img/img1";

		let img2 = protos.model.img.create();
		img2.url = "img/img2";

		comic.tagGroups[0] = language;
		comic.tagGroups[1] = gens;
		comic.gallery = [img1, img2];
		
		let response = JSON.stringify (comic);// func (params);

		let msg = protos.model.comic.encode(comic).finish();
		response = msg;

		console.log (msg);
		if (callback)
			callback (response);
	};

	test1 (params)
	{
		return "test1: " + JSON.stringify(params);
	}
}

module.exports = new api ();