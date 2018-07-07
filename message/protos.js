/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protos = (function() {

    /**
     * Namespace protos.
     * @exports protos
     * @namespace
     */
    var protos = {};

    protos.request = (function() {

        /**
         * Properties of a request.
         * @memberof protos
         * @interface Irequest
         * @property {string} cmd request cmd
         * @property {Uint8Array} msg request msg
         */

        /**
         * Constructs a new request.
         * @memberof protos
         * @classdesc Represents a request.
         * @implements Irequest
         * @constructor
         * @param {protos.Irequest=} [properties] Properties to set
         */
        function request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * request cmd.
         * @member {string} cmd
         * @memberof protos.request
         * @instance
         */
        request.prototype.cmd = "";

        /**
         * request msg.
         * @member {Uint8Array} msg
         * @memberof protos.request
         * @instance
         */
        request.prototype.msg = $util.newBuffer([]);

        /**
         * Creates a new request instance using the specified properties.
         * @function create
         * @memberof protos.request
         * @static
         * @param {protos.Irequest=} [properties] Properties to set
         * @returns {protos.request} request instance
         */
        request.create = function create(properties) {
            return new request(properties);
        };

        /**
         * Encodes the specified request message. Does not implicitly {@link protos.request.verify|verify} messages.
         * @function encode
         * @memberof protos.request
         * @static
         * @param {protos.Irequest} message request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.cmd);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.msg);
            return writer;
        };

        /**
         * Encodes the specified request message, length delimited. Does not implicitly {@link protos.request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.request
         * @static
         * @param {protos.Irequest} message request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a request message from the specified reader or buffer.
         * @function decode
         * @memberof protos.request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.request} request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.string();
                    break;
                case 2:
                    message.msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cmd"))
                throw $util.ProtocolError("missing required 'cmd'", { instance: message });
            if (!message.hasOwnProperty("msg"))
                throw $util.ProtocolError("missing required 'msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.request} request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a request message.
         * @function verify
         * @memberof protos.request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.cmd))
                return "cmd: string expected";
            if (!(message.msg && typeof message.msg.length === "number" || $util.isString(message.msg)))
                return "msg: buffer expected";
            return null;
        };

        /**
         * Creates a request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.request} request
         */
        request.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.request)
                return object;
            var message = new $root.protos.request();
            if (object.cmd != null)
                message.cmd = String(object.cmd);
            if (object.msg != null)
                if (typeof object.msg === "string")
                    $util.base64.decode(object.msg, message.msg = $util.newBuffer($util.base64.length(object.msg)), 0);
                else if (object.msg.length)
                    message.msg = object.msg;
            return message;
        };

        /**
         * Creates a plain object from a request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.request
         * @static
         * @param {protos.request} message request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = "";
                object.msg = options.bytes === String ? "" : [];
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.bytes === String ? $util.base64.encode(message.msg, 0, message.msg.length) : options.bytes === Array ? Array.prototype.slice.call(message.msg) : message.msg;
            return object;
        };

        /**
         * Converts this request to JSON.
         * @function toJSON
         * @memberof protos.request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request;
    })();

    protos.response = (function() {

        /**
         * Properties of a response.
         * @memberof protos
         * @interface Iresponse
         * @property {string} cmd response cmd
         * @property {string|null} [error] response error
         * @property {Uint8Array|null} [msg] response msg
         */

        /**
         * Constructs a new response.
         * @memberof protos
         * @classdesc Represents a response.
         * @implements Iresponse
         * @constructor
         * @param {protos.Iresponse=} [properties] Properties to set
         */
        function response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * response cmd.
         * @member {string} cmd
         * @memberof protos.response
         * @instance
         */
        response.prototype.cmd = "";

        /**
         * response error.
         * @member {string} error
         * @memberof protos.response
         * @instance
         */
        response.prototype.error = "";

        /**
         * response msg.
         * @member {Uint8Array} msg
         * @memberof protos.response
         * @instance
         */
        response.prototype.msg = $util.newBuffer([]);

        /**
         * Creates a new response instance using the specified properties.
         * @function create
         * @memberof protos.response
         * @static
         * @param {protos.Iresponse=} [properties] Properties to set
         * @returns {protos.response} response instance
         */
        response.create = function create(properties) {
            return new response(properties);
        };

        /**
         * Encodes the specified response message. Does not implicitly {@link protos.response.verify|verify} messages.
         * @function encode
         * @memberof protos.response
         * @static
         * @param {protos.Iresponse} message response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.cmd);
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.msg);
            return writer;
        };

        /**
         * Encodes the specified response message, length delimited. Does not implicitly {@link protos.response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.response
         * @static
         * @param {protos.Iresponse} message response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a response message from the specified reader or buffer.
         * @function decode
         * @memberof protos.response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.response} response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.string();
                    break;
                case 2:
                    message.error = reader.string();
                    break;
                case 3:
                    message.msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cmd"))
                throw $util.ProtocolError("missing required 'cmd'", { instance: message });
            return message;
        };

        /**
         * Decodes a response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.response} response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a response message.
         * @function verify
         * @memberof protos.response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.cmd))
                return "cmd: string expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isString(message.error))
                    return "error: string expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!(message.msg && typeof message.msg.length === "number" || $util.isString(message.msg)))
                    return "msg: buffer expected";
            return null;
        };

        /**
         * Creates a response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.response} response
         */
        response.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.response)
                return object;
            var message = new $root.protos.response();
            if (object.cmd != null)
                message.cmd = String(object.cmd);
            if (object.error != null)
                message.error = String(object.error);
            if (object.msg != null)
                if (typeof object.msg === "string")
                    $util.base64.decode(object.msg, message.msg = $util.newBuffer($util.base64.length(object.msg)), 0);
                else if (object.msg.length)
                    message.msg = object.msg;
            return message;
        };

        /**
         * Creates a plain object from a response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.response
         * @static
         * @param {protos.response} message response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = "";
                object.error = "";
                object.msg = options.bytes === String ? "" : [];
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.bytes === String ? $util.base64.encode(message.msg, 0, message.msg.length) : options.bytes === Array ? Array.prototype.slice.call(message.msg) : message.msg;
            return object;
        };

        /**
         * Converts this response to JSON.
         * @function toJSON
         * @memberof protos.response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return response;
    })();

    protos.requestComic = (function() {

        /**
         * Properties of a requestComic.
         * @memberof protos
         * @interface IrequestComic
         * @property {string} id requestComic id
         */

        /**
         * Constructs a new requestComic.
         * @memberof protos
         * @classdesc Represents a requestComic.
         * @implements IrequestComic
         * @constructor
         * @param {protos.IrequestComic=} [properties] Properties to set
         */
        function requestComic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * requestComic id.
         * @member {string} id
         * @memberof protos.requestComic
         * @instance
         */
        requestComic.prototype.id = "";

        /**
         * Creates a new requestComic instance using the specified properties.
         * @function create
         * @memberof protos.requestComic
         * @static
         * @param {protos.IrequestComic=} [properties] Properties to set
         * @returns {protos.requestComic} requestComic instance
         */
        requestComic.create = function create(properties) {
            return new requestComic(properties);
        };

        /**
         * Encodes the specified requestComic message. Does not implicitly {@link protos.requestComic.verify|verify} messages.
         * @function encode
         * @memberof protos.requestComic
         * @static
         * @param {protos.IrequestComic} message requestComic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        requestComic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified requestComic message, length delimited. Does not implicitly {@link protos.requestComic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.requestComic
         * @static
         * @param {protos.IrequestComic} message requestComic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        requestComic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a requestComic message from the specified reader or buffer.
         * @function decode
         * @memberof protos.requestComic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.requestComic} requestComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        requestComic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.requestComic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a requestComic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.requestComic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.requestComic} requestComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        requestComic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a requestComic message.
         * @function verify
         * @memberof protos.requestComic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        requestComic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        };

        /**
         * Creates a requestComic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.requestComic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.requestComic} requestComic
         */
        requestComic.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.requestComic)
                return object;
            var message = new $root.protos.requestComic();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a requestComic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.requestComic
         * @static
         * @param {protos.requestComic} message requestComic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        requestComic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this requestComic to JSON.
         * @function toJSON
         * @memberof protos.requestComic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        requestComic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return requestComic;
    })();

    protos.responseComic = (function() {

        /**
         * Properties of a responseComic.
         * @memberof protos
         * @interface IresponseComic
         * @property {protos.Icomic} comic responseComic comic
         */

        /**
         * Constructs a new responseComic.
         * @memberof protos
         * @classdesc Represents a responseComic.
         * @implements IresponseComic
         * @constructor
         * @param {protos.IresponseComic=} [properties] Properties to set
         */
        function responseComic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * responseComic comic.
         * @member {protos.Icomic} comic
         * @memberof protos.responseComic
         * @instance
         */
        responseComic.prototype.comic = null;

        /**
         * Creates a new responseComic instance using the specified properties.
         * @function create
         * @memberof protos.responseComic
         * @static
         * @param {protos.IresponseComic=} [properties] Properties to set
         * @returns {protos.responseComic} responseComic instance
         */
        responseComic.create = function create(properties) {
            return new responseComic(properties);
        };

        /**
         * Encodes the specified responseComic message. Does not implicitly {@link protos.responseComic.verify|verify} messages.
         * @function encode
         * @memberof protos.responseComic
         * @static
         * @param {protos.IresponseComic} message responseComic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        responseComic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.protos.comic.encode(message.comic, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified responseComic message, length delimited. Does not implicitly {@link protos.responseComic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.responseComic
         * @static
         * @param {protos.IresponseComic} message responseComic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        responseComic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a responseComic message from the specified reader or buffer.
         * @function decode
         * @memberof protos.responseComic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.responseComic} responseComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        responseComic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.responseComic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.comic = $root.protos.comic.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("comic"))
                throw $util.ProtocolError("missing required 'comic'", { instance: message });
            return message;
        };

        /**
         * Decodes a responseComic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.responseComic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.responseComic} responseComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        responseComic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a responseComic message.
         * @function verify
         * @memberof protos.responseComic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        responseComic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.protos.comic.verify(message.comic);
                if (error)
                    return "comic." + error;
            }
            return null;
        };

        /**
         * Creates a responseComic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.responseComic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.responseComic} responseComic
         */
        responseComic.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.responseComic)
                return object;
            var message = new $root.protos.responseComic();
            if (object.comic != null) {
                if (typeof object.comic !== "object")
                    throw TypeError(".protos.responseComic.comic: object expected");
                message.comic = $root.protos.comic.fromObject(object.comic);
            }
            return message;
        };

        /**
         * Creates a plain object from a responseComic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.responseComic
         * @static
         * @param {protos.responseComic} message responseComic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        responseComic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.comic = null;
            if (message.comic != null && message.hasOwnProperty("comic"))
                object.comic = $root.protos.comic.toObject(message.comic, options);
            return object;
        };

        /**
         * Converts this responseComic to JSON.
         * @function toJSON
         * @memberof protos.responseComic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        responseComic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return responseComic;
    })();

    protos.requestUpload = (function() {

        /**
         * Properties of a requestUpload.
         * @memberof protos
         * @interface IrequestUpload
         * @property {string} name requestUpload name
         * @property {Array.<protos.Iimg>|null} [files] requestUpload files
         */

        /**
         * Constructs a new requestUpload.
         * @memberof protos
         * @classdesc Represents a requestUpload.
         * @implements IrequestUpload
         * @constructor
         * @param {protos.IrequestUpload=} [properties] Properties to set
         */
        function requestUpload(properties) {
            this.files = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * requestUpload name.
         * @member {string} name
         * @memberof protos.requestUpload
         * @instance
         */
        requestUpload.prototype.name = "";

        /**
         * requestUpload files.
         * @member {Array.<protos.Iimg>} files
         * @memberof protos.requestUpload
         * @instance
         */
        requestUpload.prototype.files = $util.emptyArray;

        /**
         * Creates a new requestUpload instance using the specified properties.
         * @function create
         * @memberof protos.requestUpload
         * @static
         * @param {protos.IrequestUpload=} [properties] Properties to set
         * @returns {protos.requestUpload} requestUpload instance
         */
        requestUpload.create = function create(properties) {
            return new requestUpload(properties);
        };

        /**
         * Encodes the specified requestUpload message. Does not implicitly {@link protos.requestUpload.verify|verify} messages.
         * @function encode
         * @memberof protos.requestUpload
         * @static
         * @param {protos.IrequestUpload} message requestUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        requestUpload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.files != null && message.files.length)
                for (var i = 0; i < message.files.length; ++i)
                    $root.protos.img.encode(message.files[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified requestUpload message, length delimited. Does not implicitly {@link protos.requestUpload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.requestUpload
         * @static
         * @param {protos.IrequestUpload} message requestUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        requestUpload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a requestUpload message from the specified reader or buffer.
         * @function decode
         * @memberof protos.requestUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.requestUpload} requestUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        requestUpload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.requestUpload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 5:
                    if (!(message.files && message.files.length))
                        message.files = [];
                    message.files.push($root.protos.img.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a requestUpload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.requestUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.requestUpload} requestUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        requestUpload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a requestUpload message.
         * @function verify
         * @memberof protos.requestUpload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        requestUpload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.files != null && message.hasOwnProperty("files")) {
                if (!Array.isArray(message.files))
                    return "files: array expected";
                for (var i = 0; i < message.files.length; ++i) {
                    var error = $root.protos.img.verify(message.files[i]);
                    if (error)
                        return "files." + error;
                }
            }
            return null;
        };

        /**
         * Creates a requestUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.requestUpload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.requestUpload} requestUpload
         */
        requestUpload.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.requestUpload)
                return object;
            var message = new $root.protos.requestUpload();
            if (object.name != null)
                message.name = String(object.name);
            if (object.files) {
                if (!Array.isArray(object.files))
                    throw TypeError(".protos.requestUpload.files: array expected");
                message.files = [];
                for (var i = 0; i < object.files.length; ++i) {
                    if (typeof object.files[i] !== "object")
                        throw TypeError(".protos.requestUpload.files: object expected");
                    message.files[i] = $root.protos.img.fromObject(object.files[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a requestUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.requestUpload
         * @static
         * @param {protos.requestUpload} message requestUpload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        requestUpload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.files = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.files && message.files.length) {
                object.files = [];
                for (var j = 0; j < message.files.length; ++j)
                    object.files[j] = $root.protos.img.toObject(message.files[j], options);
            }
            return object;
        };

        /**
         * Converts this requestUpload to JSON.
         * @function toJSON
         * @memberof protos.requestUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        requestUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return requestUpload;
    })();

    protos.responseUpload = (function() {

        /**
         * Properties of a responseUpload.
         * @memberof protos
         * @interface IresponseUpload
         * @property {string} id responseUpload id
         */

        /**
         * Constructs a new responseUpload.
         * @memberof protos
         * @classdesc Represents a responseUpload.
         * @implements IresponseUpload
         * @constructor
         * @param {protos.IresponseUpload=} [properties] Properties to set
         */
        function responseUpload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * responseUpload id.
         * @member {string} id
         * @memberof protos.responseUpload
         * @instance
         */
        responseUpload.prototype.id = "";

        /**
         * Creates a new responseUpload instance using the specified properties.
         * @function create
         * @memberof protos.responseUpload
         * @static
         * @param {protos.IresponseUpload=} [properties] Properties to set
         * @returns {protos.responseUpload} responseUpload instance
         */
        responseUpload.create = function create(properties) {
            return new responseUpload(properties);
        };

        /**
         * Encodes the specified responseUpload message. Does not implicitly {@link protos.responseUpload.verify|verify} messages.
         * @function encode
         * @memberof protos.responseUpload
         * @static
         * @param {protos.IresponseUpload} message responseUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        responseUpload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified responseUpload message, length delimited. Does not implicitly {@link protos.responseUpload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.responseUpload
         * @static
         * @param {protos.IresponseUpload} message responseUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        responseUpload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a responseUpload message from the specified reader or buffer.
         * @function decode
         * @memberof protos.responseUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.responseUpload} responseUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        responseUpload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.responseUpload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a responseUpload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.responseUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.responseUpload} responseUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        responseUpload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a responseUpload message.
         * @function verify
         * @memberof protos.responseUpload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        responseUpload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        };

        /**
         * Creates a responseUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.responseUpload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.responseUpload} responseUpload
         */
        responseUpload.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.responseUpload)
                return object;
            var message = new $root.protos.responseUpload();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a responseUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.responseUpload
         * @static
         * @param {protos.responseUpload} message responseUpload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        responseUpload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this responseUpload to JSON.
         * @function toJSON
         * @memberof protos.responseUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        responseUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return responseUpload;
    })();

    protos.comic = (function() {

        /**
         * Properties of a comic.
         * @memberof protos
         * @interface Icomic
         * @property {string} id comic id
         * @property {string} name comic name
         * @property {Array.<protos.ItagGroups>|null} [tagGroups] comic tagGroups
         * @property {protos.Iimg} cover comic cover
         * @property {Array.<protos.Iimg>|null} [gallery] comic gallery
         */

        /**
         * Constructs a new comic.
         * @memberof protos
         * @classdesc Represents a comic.
         * @implements Icomic
         * @constructor
         * @param {protos.Icomic=} [properties] Properties to set
         */
        function comic(properties) {
            this.tagGroups = [];
            this.gallery = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * comic id.
         * @member {string} id
         * @memberof protos.comic
         * @instance
         */
        comic.prototype.id = "";

        /**
         * comic name.
         * @member {string} name
         * @memberof protos.comic
         * @instance
         */
        comic.prototype.name = "";

        /**
         * comic tagGroups.
         * @member {Array.<protos.ItagGroups>} tagGroups
         * @memberof protos.comic
         * @instance
         */
        comic.prototype.tagGroups = $util.emptyArray;

        /**
         * comic cover.
         * @member {protos.Iimg} cover
         * @memberof protos.comic
         * @instance
         */
        comic.prototype.cover = null;

        /**
         * comic gallery.
         * @member {Array.<protos.Iimg>} gallery
         * @memberof protos.comic
         * @instance
         */
        comic.prototype.gallery = $util.emptyArray;

        /**
         * Creates a new comic instance using the specified properties.
         * @function create
         * @memberof protos.comic
         * @static
         * @param {protos.Icomic=} [properties] Properties to set
         * @returns {protos.comic} comic instance
         */
        comic.create = function create(properties) {
            return new comic(properties);
        };

        /**
         * Encodes the specified comic message. Does not implicitly {@link protos.comic.verify|verify} messages.
         * @function encode
         * @memberof protos.comic
         * @static
         * @param {protos.Icomic} message comic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        comic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tagGroups != null && message.tagGroups.length)
                for (var i = 0; i < message.tagGroups.length; ++i)
                    $root.protos.tagGroups.encode(message.tagGroups[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.protos.img.encode(message.cover, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.gallery != null && message.gallery.length)
                for (var i = 0; i < message.gallery.length; ++i)
                    $root.protos.img.encode(message.gallery[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified comic message, length delimited. Does not implicitly {@link protos.comic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.comic
         * @static
         * @param {protos.Icomic} message comic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        comic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a comic message from the specified reader or buffer.
         * @function decode
         * @memberof protos.comic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.comic} comic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        comic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.comic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    if (!(message.tagGroups && message.tagGroups.length))
                        message.tagGroups = [];
                    message.tagGroups.push($root.protos.tagGroups.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.cover = $root.protos.img.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.gallery && message.gallery.length))
                        message.gallery = [];
                    message.gallery.push($root.protos.img.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("cover"))
                throw $util.ProtocolError("missing required 'cover'", { instance: message });
            return message;
        };

        /**
         * Decodes a comic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.comic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.comic} comic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        comic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a comic message.
         * @function verify
         * @memberof protos.comic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        comic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.tagGroups != null && message.hasOwnProperty("tagGroups")) {
                if (!Array.isArray(message.tagGroups))
                    return "tagGroups: array expected";
                for (var i = 0; i < message.tagGroups.length; ++i) {
                    var error = $root.protos.tagGroups.verify(message.tagGroups[i]);
                    if (error)
                        return "tagGroups." + error;
                }
            }
            {
                var error = $root.protos.img.verify(message.cover);
                if (error)
                    return "cover." + error;
            }
            if (message.gallery != null && message.hasOwnProperty("gallery")) {
                if (!Array.isArray(message.gallery))
                    return "gallery: array expected";
                for (var i = 0; i < message.gallery.length; ++i) {
                    var error = $root.protos.img.verify(message.gallery[i]);
                    if (error)
                        return "gallery." + error;
                }
            }
            return null;
        };

        /**
         * Creates a comic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.comic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.comic} comic
         */
        comic.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.comic)
                return object;
            var message = new $root.protos.comic();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.tagGroups) {
                if (!Array.isArray(object.tagGroups))
                    throw TypeError(".protos.comic.tagGroups: array expected");
                message.tagGroups = [];
                for (var i = 0; i < object.tagGroups.length; ++i) {
                    if (typeof object.tagGroups[i] !== "object")
                        throw TypeError(".protos.comic.tagGroups: object expected");
                    message.tagGroups[i] = $root.protos.tagGroups.fromObject(object.tagGroups[i]);
                }
            }
            if (object.cover != null) {
                if (typeof object.cover !== "object")
                    throw TypeError(".protos.comic.cover: object expected");
                message.cover = $root.protos.img.fromObject(object.cover);
            }
            if (object.gallery) {
                if (!Array.isArray(object.gallery))
                    throw TypeError(".protos.comic.gallery: array expected");
                message.gallery = [];
                for (var i = 0; i < object.gallery.length; ++i) {
                    if (typeof object.gallery[i] !== "object")
                        throw TypeError(".protos.comic.gallery: object expected");
                    message.gallery[i] = $root.protos.img.fromObject(object.gallery[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a comic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.comic
         * @static
         * @param {protos.comic} message comic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        comic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.tagGroups = [];
                object.gallery = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.cover = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tagGroups && message.tagGroups.length) {
                object.tagGroups = [];
                for (var j = 0; j < message.tagGroups.length; ++j)
                    object.tagGroups[j] = $root.protos.tagGroups.toObject(message.tagGroups[j], options);
            }
            if (message.cover != null && message.hasOwnProperty("cover"))
                object.cover = $root.protos.img.toObject(message.cover, options);
            if (message.gallery && message.gallery.length) {
                object.gallery = [];
                for (var j = 0; j < message.gallery.length; ++j)
                    object.gallery[j] = $root.protos.img.toObject(message.gallery[j], options);
            }
            return object;
        };

        /**
         * Converts this comic to JSON.
         * @function toJSON
         * @memberof protos.comic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        comic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return comic;
    })();

    protos.tagGroups = (function() {

        /**
         * Properties of a tagGroups.
         * @memberof protos
         * @interface ItagGroups
         * @property {string} name tagGroups name
         * @property {Array.<string>|null} [tags] tagGroups tags
         */

        /**
         * Constructs a new tagGroups.
         * @memberof protos
         * @classdesc Represents a tagGroups.
         * @implements ItagGroups
         * @constructor
         * @param {protos.ItagGroups=} [properties] Properties to set
         */
        function tagGroups(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGroups name.
         * @member {string} name
         * @memberof protos.tagGroups
         * @instance
         */
        tagGroups.prototype.name = "";

        /**
         * tagGroups tags.
         * @member {Array.<string>} tags
         * @memberof protos.tagGroups
         * @instance
         */
        tagGroups.prototype.tags = $util.emptyArray;

        /**
         * Creates a new tagGroups instance using the specified properties.
         * @function create
         * @memberof protos.tagGroups
         * @static
         * @param {protos.ItagGroups=} [properties] Properties to set
         * @returns {protos.tagGroups} tagGroups instance
         */
        tagGroups.create = function create(properties) {
            return new tagGroups(properties);
        };

        /**
         * Encodes the specified tagGroups message. Does not implicitly {@link protos.tagGroups.verify|verify} messages.
         * @function encode
         * @memberof protos.tagGroups
         * @static
         * @param {protos.ItagGroups} message tagGroups message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGroups.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.tags[i]);
            return writer;
        };

        /**
         * Encodes the specified tagGroups message, length delimited. Does not implicitly {@link protos.tagGroups.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.tagGroups
         * @static
         * @param {protos.ItagGroups} message tagGroups message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGroups.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGroups message from the specified reader or buffer.
         * @function decode
         * @memberof protos.tagGroups
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.tagGroups} tagGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGroups.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.tagGroups();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a tagGroups message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.tagGroups
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.tagGroups} tagGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGroups.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGroups message.
         * @function verify
         * @memberof protos.tagGroups
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGroups.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            return null;
        };

        /**
         * Creates a tagGroups message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.tagGroups
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.tagGroups} tagGroups
         */
        tagGroups.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.tagGroups)
                return object;
            var message = new $root.protos.tagGroups();
            if (object.name != null)
                message.name = String(object.name);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".protos.tagGroups.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a tagGroups message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.tagGroups
         * @static
         * @param {protos.tagGroups} message tagGroups
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGroups.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            return object;
        };

        /**
         * Converts this tagGroups to JSON.
         * @function toJSON
         * @memberof protos.tagGroups
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGroups.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGroups;
    })();

    protos.img = (function() {

        /**
         * Properties of an img.
         * @memberof protos
         * @interface Iimg
         * @property {string} name img name
         * @property {string} url img url
         */

        /**
         * Constructs a new img.
         * @memberof protos
         * @classdesc Represents an img.
         * @implements Iimg
         * @constructor
         * @param {protos.Iimg=} [properties] Properties to set
         */
        function img(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * img name.
         * @member {string} name
         * @memberof protos.img
         * @instance
         */
        img.prototype.name = "";

        /**
         * img url.
         * @member {string} url
         * @memberof protos.img
         * @instance
         */
        img.prototype.url = "";

        /**
         * Creates a new img instance using the specified properties.
         * @function create
         * @memberof protos.img
         * @static
         * @param {protos.Iimg=} [properties] Properties to set
         * @returns {protos.img} img instance
         */
        img.create = function create(properties) {
            return new img(properties);
        };

        /**
         * Encodes the specified img message. Does not implicitly {@link protos.img.verify|verify} messages.
         * @function encode
         * @memberof protos.img
         * @static
         * @param {protos.Iimg} message img message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        img.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified img message, length delimited. Does not implicitly {@link protos.img.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.img
         * @static
         * @param {protos.Iimg} message img message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        img.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an img message from the specified reader or buffer.
         * @function decode
         * @memberof protos.img
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.img} img
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        img.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.img();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("url"))
                throw $util.ProtocolError("missing required 'url'", { instance: message });
            return message;
        };

        /**
         * Decodes an img message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.img
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.img} img
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        img.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an img message.
         * @function verify
         * @memberof protos.img
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        img.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.url))
                return "url: string expected";
            return null;
        };

        /**
         * Creates an img message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.img
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.img} img
         */
        img.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.img)
                return object;
            var message = new $root.protos.img();
            if (object.name != null)
                message.name = String(object.name);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from an img message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.img
         * @static
         * @param {protos.img} message img
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        img.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.url = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this img to JSON.
         * @function toJSON
         * @memberof protos.img
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        img.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return img;
    })();

    return protos;
})();

module.exports = $root;
