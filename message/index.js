"use strict";

const protobuf = require("protobufjs");
const protos = require("./protos.js");

class message
{
	constructor ()
	{
		this.protobuf = protobuf;
		this.protos = protos.protos;
	}

	requestEncode (inputType, inputObj)
	{
		var inputBuilder = this.protos.lookupType ("protos." + inputType);
		if (!inputBuilder)
			return undefined;
		
		var error = inputBuilder.verify(inputObj);
		if (error)
			return undefined;
			
		var message = inputBuilder.create (inputObj);
		var buffer = inputBuilder.encode(message).finish();

		var requestBuilder = this.protos.lookupType ("protos.request");
		var content = {
			cmd: inputType,
			msg: buffer
		}

		error = requestBuilder.verify(content);
		if (error)
			return undefined;
		
		message = requestBuilder.create (content);
		return requestBuilder.encode(message).finish();
	}

	responseDecode (inputMsg)
	{
		let responseParser = this.protos.lookupType ("protos.response");
		if (!responseParser)
			return undefined;
		
		let ui8 = new Uint8Array(inputMsg);
		let responseMessage = responseParser.decode (ui8);
		if (responseMessage.error)
			return undefined;

		let msgType = responseMessage.cmd;
		let msgParser = this.protos.lookupType ("protos." + msgType);
		if (!msgParser)
			return undefined;
		
		ui8 = new Uint8Array(responseMessage.msg);
		return msgParser.decode (ui8);
	}
}

module.exports = message;