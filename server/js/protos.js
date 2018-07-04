/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.cmd = (function() {

    var cmd = {};

    cmd.request = (function() {

        function request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        request.prototype.cmd = "";
        request.prototype.msg = $util.newBuffer([]);

        request.create = function create(properties) {
            return new request(properties);
        };

        request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.cmd);
            writer.uint32(18).bytes(message.msg);
            return writer;
        };

        request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmd.request();
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

        request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.cmd))
                return "cmd: string expected";
            if (!(message.msg && typeof message.msg.length === "number" || $util.isString(message.msg)))
                return "msg: buffer expected";
            return null;
        };

        request.fromObject = function fromObject(object) {
            if (object instanceof $root.cmd.request)
                return object;
            var message = new $root.cmd.request();
            if (object.cmd != null)
                message.cmd = String(object.cmd);
            if (object.msg != null)
                if (typeof object.msg === "string")
                    $util.base64.decode(object.msg, message.msg = $util.newBuffer($util.base64.length(object.msg)), 0);
                else if (object.msg.length)
                    message.msg = object.msg;
            return message;
        };

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

        request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request;
    })();

    cmd.requestComic = (function() {

        function requestComic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        requestComic.prototype.id = "";

        requestComic.create = function create(properties) {
            return new requestComic(properties);
        };

        requestComic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.id);
            return writer;
        };

        requestComic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

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

        requestComic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        requestComic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        };

        requestComic.fromObject = function fromObject(object) {
            if (object instanceof $root.cmd.requestComic)
                return object;
            var message = new $root.cmd.requestComic();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

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

        requestComic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return requestComic;
    })();

    cmd.responseComic = (function() {

        function responseComic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        responseComic.prototype.error = "";
        responseComic.prototype.comic = null;

        responseComic.create = function create(properties) {
            return new responseComic(properties);
        };

        responseComic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(10).string(message.error);
            if (message.comic != null && message.hasOwnProperty("comic"))
                $root.model.comic.encode(message.comic, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        responseComic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

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

        responseComic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

        responseComic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return responseComic;
    })();

    return cmd;
})();

$root.model = (function() {

    var model = {};

    model.comic = (function() {

        function comic(properties) {
            this.tagGroups = [];
            this.gallery = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        comic.prototype.id = "";
        comic.prototype.name = "";
        comic.prototype.tagGroups = $util.emptyArray;
        comic.prototype.cover = null;
        comic.prototype.gallery = $util.emptyArray;

        comic.create = function create(properties) {
            return new comic(properties);
        };

        comic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.id);
            writer.uint32(18).string(message.name);
            if (message.tagGroups != null && message.tagGroups.length)
                for (var i = 0; i < message.tagGroups.length; ++i)
                    $root.model.tagGroups.encode(message.tagGroups[i], writer.uint32(26).fork()).ldelim();
            $root.model.img.encode(message.cover, writer.uint32(34).fork()).ldelim();
            if (message.gallery != null && message.gallery.length)
                for (var i = 0; i < message.gallery.length; ++i)
                    $root.model.img.encode(message.gallery[i], writer.uint32(42).fork()).ldelim();
            return writer;
        };

        comic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

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

        comic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

        comic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return comic;
    })();

    model.tagGroups = (function() {

        function tagGroups(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        tagGroups.prototype.name = "";
        tagGroups.prototype.tags = $util.emptyArray;

        tagGroups.create = function create(properties) {
            return new tagGroups(properties);
        };

        tagGroups.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.name);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(18).string(message.tags[i]);
            return writer;
        };

        tagGroups.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

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

        tagGroups.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

        tagGroups.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGroups;
    })();

    model.img = (function() {

        function img(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        img.prototype.name = "";
        img.prototype.url = "";

        img.create = function create(properties) {
            return new img(properties);
        };

        img.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.name);
            writer.uint32(18).string(message.url);
            return writer;
        };

        img.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

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

        img.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        img.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.url))
                return "url: string expected";
            return null;
        };

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

        img.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return img;
    })();

    return model;
})();

module.exports = $root;
