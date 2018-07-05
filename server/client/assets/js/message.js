"use strict";

class message
{
	constructor()
	{
	}

	encode (cmd, inputType, inputObj)
	{
		var inputBuilder = cmd.lookupType ("cmd." + inputType);
		if (!inputBuilder)
			return undefined;
		
		var error = inputBuilder.verify(inputObj);
		if (error)
			return undefined;
			
		var message = inputBuilder.create (inputObj);
		var buffer = inputBuilder.encode(message).finish();

		var requestBuilder = cmd.lookupType ("cmd.request");
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

	decode (cmd, inputMsg)
	{
		let responseParser = cmd.lookupType ("cmd.response");
		if (!responseParser)
			return undefined;
		
		let ui8 = new Uint8Array(inputMsg);
		let responseMessage = responseParser.decode (ui8);
		if (responseMessage.error)
			return undefined;

		let msgName = responseMessage.cmd;
		let msgParser = cmd.lookupType ("cmd." + msgName);
		if (!msgParser)
			return undefined;
		
		ui8 = new Uint8Array(responseMessage.msg);
		return msgParser.decode (ui8);
	}

	requestUpload (protos, folderName, files)
	{
		let content = {
			name: folderName,
			files: files
		}
		
		return this.encode (protos.cmd, "requestUpload", content);
	}
}