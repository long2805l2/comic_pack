"use strict";
// import { protos } from "../../../message/protos.js";
import { protos } from "./protos.js";

class api
{
	constructor()
	{
	}

	responseDecode (inputMessage:ArrayBuffer)
	{
		let ui8 = new Uint8Array(inputMessage);
		let responseMessage = protos.response.decode (ui8);
		if (!responseMessage)
			return undefined;

		if (responseMessage.error)
			return undefined;

		let msgType = responseMessage.cmd;
		let msgParser = protos[msgType];
		if (!msgParser)
			return undefined;
		
		ui8 = new Uint8Array(responseMessage.msg);
		return msgParser.decode (ui8);
	}
}

let API = new api ();
export { API };