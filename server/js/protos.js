/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.cmd = (function() {

    /**
     * Namespace cmd.
     * @exports cmd
     * @namespace
     */
    var cmd = {};

    cmd.requestComic = (function() {

        /**
         * Properties of a requestComic.
         * @memberof cmd
         * @interface IrequestComic
         * @property {string} id requestComic id
         */

        /**
         * Constructs a new requestComic.
         * @memberof cmd
         * @classdesc Represents a requestComic.
         * @implements IrequestComic
         * @constructor
         * @param {cmd.IrequestComic=} [properties] Properties to set
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
         * @memberof cmd.requestComic
         * @instance
         */
        requestComic.prototype.id = "";

        /**
         * Creates a new requestComic instance using the specified properties.
         * @function create
         * @memberof cmd.requestComic
         * @static
         * @param {cmd.IrequestComic=} [properties] Properties to set
         * @returns {cmd.requestComic} requestComic instance
         */
        requestComic.create = function create(properties) {
            return new requestComic(properties);
        };

        /**
         * Encodes the specified requestComic message. Does not implicitly {@link cmd.requestComic.verify|verify} messages.
         * @function encode
         * @memberof cmd.requestComic
         * @static
         * @param {cmd.IrequestComic} message requestComic message or plain object to encode
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
         * Encodes the specified requestComic message, length delimited. Does not implicitly {@link cmd.requestComic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmd.requestComic
         * @static
         * @param {cmd.IrequestComic} message requestComic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        requestComic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a requestComic message from the specified reader or buffer.
         * @function decode
         * @memberof cmd.requestComic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmd.requestComic} requestComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        requestComic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmd.requestComic();
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
         * @memberof cmd.requestComic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmd.requestComic} requestComic
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
         * @memberof cmd.requestComic
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
         * @memberof cmd.requestComic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmd.requestComic} requestComic
         */
        requestComic.fromObject = function fromObject(object) {
            if (object instanceof $root.cmd.requestComic)
                return object;
            var message = new $root.cmd.requestComic();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a requestComic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmd.requestComic
         * @static
         * @param {cmd.requestComic} message requestComic
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
         * @memberof cmd.requestComic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        requestComic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return requestComic;
    })();

    cmd.responseComic = (function() {

        /**
         * Properties of a responseComic.
         * @memberof cmd
         * @interface IresponseComic
         * @property {string|null} [error] responseComic error
         * @property {model.Icomic|null} [comic] responseComic comic
         */

        /**
         * Constructs a new responseComic.
         * @memberof cmd
         * @classdesc Represents a responseComic.
         * @implements IresponseComic
         * @constructor
         * @param {cmd.IresponseComic=} [properties] Properties to set
         */
        function responseComic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * responseComic error.
         * @member {string} error
         * @memberof cmd.responseComic
         * @instance
         */
        responseComic.prototype.error = "";

        /**
         * responseComic comic.
         * @member {model.Icomic|null|undefined} comic
         * @memberof cmd.responseComic
         * @instance
         */
        responseComic.prototype.comic = null;

        /**
         * Creates a new responseComic instance using the specified properties.
         * @function create
         * @memberof cmd.responseComic
         * @static
         * @param {cmd.IresponseComic=} [properties] Properties to set
         * @returns {cmd.responseComic} responseComic instance
         */
        responseComic.create = function create(properties) {
            return new responseComic(properties);
        };

        /**
         * Encodes the specified responseComic message. Does not implicitly {@link cmd.responseComic.verify|verify} messages.
         * @function encode
         * @memberof cmd.responseComic
         * @static
         * @param {cmd.IresponseComic} message responseComic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        responseComic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
            if (message.comic != null && message.hasOwnProperty("comic"))
                $root.model.comic.encode(message.comic, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified responseComic message, length delimited. Does not implicitly {@link cmd.responseComic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmd.responseComic
         * @static
         * @param {cmd.IresponseComic} message responseComic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        responseComic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a responseComic message from the specified reader or buffer.
         * @function decode
         * @memberof cmd.responseComic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmd.responseComic} responseComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        responseComic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmd.responseComic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                case 2:
                    message.comic = $root.model.comic.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a responseComic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmd.responseComic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmd.responseComic} responseComic
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
         * @memberof cmd.responseComic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        responseComic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isString(message.error))
                    return "error: string expected";
            if (message.comic != null && message.hasOwnProperty("comic")) {
                var error = $root.model.comic.verify(message.comic);
                if (error)
                    return "comic." + error;
            }
            return null;
        };

        /**
         * Creates a responseComic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmd.responseComic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmd.responseComic} responseComic
         */
        responseComic.fromObject = function fromObject(object) {
            if (object instanceof $root.cmd.responseComic)
                return object;
            var message = new $root.cmd.responseComic();
            if (object.error != null)
                message.error = String(object.error);
            if (object.comic != null) {
                if (typeof object.comic !== "object")
                    throw TypeError(".cmd.responseComic.comic: object expected");
                message.comic = $root.model.comic.fromObject(object.comic);
            }
            return message;
        };

        /**
         * Creates a plain object from a responseComic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmd.responseComic
         * @static
         * @param {cmd.responseComic} message responseComic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        responseComic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.error = "";
                object.comic = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            if (message.comic != null && message.hasOwnProperty("comic"))
                object.comic = $root.model.comic.toObject(message.comic, options);
            return object;
        };

        /**
         * Converts this responseComic to JSON.
         * @function toJSON
         * @memberof cmd.responseComic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        responseComic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return responseComic;
    })();

    return cmd;
})();

$root.model = (function() {

    /**
     * Namespace model.
     * @exports model
     * @namespace
     */
    var model = {};

    model.comic = (function() {

        /**
         * Properties of a comic.
         * @memberof model
         * @interface Icomic
         * @property {string} id comic id
         * @property {string} name comic name
         * @property {Array.<model.ItagGroups>|null} [tagGroups] comic tagGroups
         * @property {model.Iimg} cover comic cover
         * @property {Array.<model.Iimg>|null} [gallery] comic gallery
         */

        /**
         * Constructs a new comic.
         * @memberof model
         * @classdesc Represents a comic.
         * @implements Icomic
         * @constructor
         * @param {model.Icomic=} [properties] Properties to set
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
         * @memberof model.comic
         * @instance
         */
        comic.prototype.id = "";

        /**
         * comic name.
         * @member {string} name
         * @memberof model.comic
         * @instance
         */
        comic.prototype.name = "";

        /**
         * comic tagGroups.
         * @member {Array.<model.ItagGroups>} tagGroups
         * @memberof model.comic
         * @instance
         */
        comic.prototype.tagGroups = $util.emptyArray;

        /**
         * comic cover.
         * @member {model.Iimg} cover
         * @memberof model.comic
         * @instance
         */
        comic.prototype.cover = null;

        /**
         * comic gallery.
         * @member {Array.<model.Iimg>} gallery
         * @memberof model.comic
         * @instance
         */
        comic.prototype.gallery = $util.emptyArray;

        /**
         * Creates a new comic instance using the specified properties.
         * @function create
         * @memberof model.comic
         * @static
         * @param {model.Icomic=} [properties] Properties to set
         * @returns {model.comic} comic instance
         */
        comic.create = function create(properties) {
            return new comic(properties);
        };

        /**
         * Encodes the specified comic message. Does not implicitly {@link model.comic.verify|verify} messages.
         * @function encode
         * @memberof model.comic
         * @static
         * @param {model.Icomic} message comic message or plain object to encode
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
                    $root.model.tagGroups.encode(message.tagGroups[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.model.img.encode(message.cover, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.gallery != null && message.gallery.length)
                for (var i = 0; i < message.gallery.length; ++i)
                    $root.model.img.encode(message.gallery[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified comic message, length delimited. Does not implicitly {@link model.comic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.comic
         * @static
         * @param {model.Icomic} message comic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        comic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a comic message from the specified reader or buffer.
         * @function decode
         * @memberof model.comic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.comic} comic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        comic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.comic();
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
                    message.tagGroups.push($root.model.tagGroups.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.cover = $root.model.img.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.gallery && message.gallery.length))
                        message.gallery = [];
                    message.gallery.push($root.model.img.decode(reader, reader.uint32()));
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
         * @memberof model.comic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.comic} comic
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
         * @memberof model.comic
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
                    var error = $root.model.tagGroups.verify(message.tagGroups[i]);
                    if (error)
                        return "tagGroups." + error;
                }
            }
            {
                var error = $root.model.img.verify(message.cover);
                if (error)
                    return "cover." + error;
            }
            if (message.gallery != null && message.hasOwnProperty("gallery")) {
                if (!Array.isArray(message.gallery))
                    return "gallery: array expected";
                for (var i = 0; i < message.gallery.length; ++i) {
                    var error = $root.model.img.verify(message.gallery[i]);
                    if (error)
                        return "gallery." + error;
                }
            }
            return null;
        };

        /**
         * Creates a comic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.comic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.comic} comic
         */
        comic.fromObject = function fromObject(object) {
            if (object instanceof $root.model.comic)
                return object;
            var message = new $root.model.comic();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.tagGroups) {
                if (!Array.isArray(object.tagGroups))
                    throw TypeError(".model.comic.tagGroups: array expected");
                message.tagGroups = [];
                for (var i = 0; i < object.tagGroups.length; ++i) {
                    if (typeof object.tagGroups[i] !== "object")
                        throw TypeError(".model.comic.tagGroups: object expected");
                    message.tagGroups[i] = $root.model.tagGroups.fromObject(object.tagGroups[i]);
                }
            }
            if (object.cover != null) {
                if (typeof object.cover !== "object")
                    throw TypeError(".model.comic.cover: object expected");
                message.cover = $root.model.img.fromObject(object.cover);
            }
            if (object.gallery) {
                if (!Array.isArray(object.gallery))
                    throw TypeError(".model.comic.gallery: array expected");
                message.gallery = [];
                for (var i = 0; i < object.gallery.length; ++i) {
                    if (typeof object.gallery[i] !== "object")
                        throw TypeError(".model.comic.gallery: object expected");
                    message.gallery[i] = $root.model.img.fromObject(object.gallery[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a comic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.comic
         * @static
         * @param {model.comic} message comic
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
                    object.tagGroups[j] = $root.model.tagGroups.toObject(message.tagGroups[j], options);
            }
            if (message.cover != null && message.hasOwnProperty("cover"))
                object.cover = $root.model.img.toObject(message.cover, options);
            if (message.gallery && message.gallery.length) {
                object.gallery = [];
                for (var j = 0; j < message.gallery.length; ++j)
                    object.gallery[j] = $root.model.img.toObject(message.gallery[j], options);
            }
            return object;
        };

        /**
         * Converts this comic to JSON.
         * @function toJSON
         * @memberof model.comic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        comic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return comic;
    })();

    model.tagGroups = (function() {

        /**
         * Properties of a tagGroups.
         * @memberof model
         * @interface ItagGroups
         * @property {string} name tagGroups name
         * @property {Array.<string>|null} [tags] tagGroups tags
         */

        /**
         * Constructs a new tagGroups.
         * @memberof model
         * @classdesc Represents a tagGroups.
         * @implements ItagGroups
         * @constructor
         * @param {model.ItagGroups=} [properties] Properties to set
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
         * @memberof model.tagGroups
         * @instance
         */
        tagGroups.prototype.name = "";

        /**
         * tagGroups tags.
         * @member {Array.<string>} tags
         * @memberof model.tagGroups
         * @instance
         */
        tagGroups.prototype.tags = $util.emptyArray;

        /**
         * Creates a new tagGroups instance using the specified properties.
         * @function create
         * @memberof model.tagGroups
         * @static
         * @param {model.ItagGroups=} [properties] Properties to set
         * @returns {model.tagGroups} tagGroups instance
         */
        tagGroups.create = function create(properties) {
            return new tagGroups(properties);
        };

        /**
         * Encodes the specified tagGroups message. Does not implicitly {@link model.tagGroups.verify|verify} messages.
         * @function encode
         * @memberof model.tagGroups
         * @static
         * @param {model.ItagGroups} message tagGroups message or plain object to encode
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
         * Encodes the specified tagGroups message, length delimited. Does not implicitly {@link model.tagGroups.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.tagGroups
         * @static
         * @param {model.ItagGroups} message tagGroups message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGroups.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGroups message from the specified reader or buffer.
         * @function decode
         * @memberof model.tagGroups
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.tagGroups} tagGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGroups.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.tagGroups();
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
         * @memberof model.tagGroups
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.tagGroups} tagGroups
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
         * @memberof model.tagGroups
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
         * @memberof model.tagGroups
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.tagGroups} tagGroups
         */
        tagGroups.fromObject = function fromObject(object) {
            if (object instanceof $root.model.tagGroups)
                return object;
            var message = new $root.model.tagGroups();
            if (object.name != null)
                message.name = String(object.name);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".model.tagGroups.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a tagGroups message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.tagGroups
         * @static
         * @param {model.tagGroups} message tagGroups
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
         * @memberof model.tagGroups
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGroups.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGroups;
    })();

    model.img = (function() {

        /**
         * Properties of an img.
         * @memberof model
         * @interface Iimg
         * @property {string} name img name
         * @property {string} url img url
         */

        /**
         * Constructs a new img.
         * @memberof model
         * @classdesc Represents an img.
         * @implements Iimg
         * @constructor
         * @param {model.Iimg=} [properties] Properties to set
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
         * @memberof model.img
         * @instance
         */
        img.prototype.name = "";

        /**
         * img url.
         * @member {string} url
         * @memberof model.img
         * @instance
         */
        img.prototype.url = "";

        /**
         * Creates a new img instance using the specified properties.
         * @function create
         * @memberof model.img
         * @static
         * @param {model.Iimg=} [properties] Properties to set
         * @returns {model.img} img instance
         */
        img.create = function create(properties) {
            return new img(properties);
        };

        /**
         * Encodes the specified img message. Does not implicitly {@link model.img.verify|verify} messages.
         * @function encode
         * @memberof model.img
         * @static
         * @param {model.Iimg} message img message or plain object to encode
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
         * Encodes the specified img message, length delimited. Does not implicitly {@link model.img.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.img
         * @static
         * @param {model.Iimg} message img message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        img.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an img message from the specified reader or buffer.
         * @function decode
         * @memberof model.img
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.img} img
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        img.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.img();
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
         * @memberof model.img
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.img} img
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
         * @memberof model.img
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
         * @memberof model.img
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.img} img
         */
        img.fromObject = function fromObject(object) {
            if (object instanceof $root.model.img)
                return object;
            var message = new $root.model.img();
            if (object.name != null)
                message.name = String(object.name);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from an img message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.img
         * @static
         * @param {model.img} message img
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
         * @memberof model.img
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        img.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return img;
    })();

    return model;
})();

module.exports = $root;
