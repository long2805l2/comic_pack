import * as $protobuf from "protobufjs";

/** Namespace protos. */
export namespace protos {

    /** Properties of a request. */
    interface Irequest {

        /** request cmd */
        cmd: string;

        /** request msg */
        msg: Uint8Array;
    }

    /** Represents a request. */
    class request implements Irequest {

        /**
         * Constructs a new request.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.Irequest);

        /** request cmd. */
        public cmd: string;

        /** request msg. */
        public msg: Uint8Array;

        /**
         * Creates a new request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns request instance
         */
        public static create(properties?: protos.Irequest): protos.request;

        /**
         * Encodes the specified request message. Does not implicitly {@link protos.request.verify|verify} messages.
         * @param message request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.Irequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified request message, length delimited. Does not implicitly {@link protos.request.verify|verify} messages.
         * @param message request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.Irequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.request;

        /**
         * Decodes a request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.request;

        /**
         * Verifies a request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns request
         */
        public static fromObject(object: { [k: string]: any }): protos.request;

        /**
         * Creates a plain object from a request message. Also converts values to other types if specified.
         * @param message request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a response. */
    interface Iresponse {

        /** response cmd */
        cmd: string;

        /** response error */
        error?: (string|null);

        /** response msg */
        msg?: (Uint8Array|null);
    }

    /** Represents a response. */
    class response implements Iresponse {

        /**
         * Constructs a new response.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.Iresponse);

        /** response cmd. */
        public cmd: string;

        /** response error. */
        public error: string;

        /** response msg. */
        public msg: Uint8Array;

        /**
         * Creates a new response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns response instance
         */
        public static create(properties?: protos.Iresponse): protos.response;

        /**
         * Encodes the specified response message. Does not implicitly {@link protos.response.verify|verify} messages.
         * @param message response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.Iresponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified response message, length delimited. Does not implicitly {@link protos.response.verify|verify} messages.
         * @param message response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.Iresponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.response;

        /**
         * Decodes a response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.response;

        /**
         * Verifies a response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns response
         */
        public static fromObject(object: { [k: string]: any }): protos.response;

        /**
         * Creates a plain object from a response message. Also converts values to other types if specified.
         * @param message response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a requestComic. */
    interface IrequestComic {

        /** requestComic id */
        id: string;
    }

    /** Represents a requestComic. */
    class requestComic implements IrequestComic {

        /**
         * Constructs a new requestComic.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IrequestComic);

        /** requestComic id. */
        public id: string;

        /**
         * Creates a new requestComic instance using the specified properties.
         * @param [properties] Properties to set
         * @returns requestComic instance
         */
        public static create(properties?: protos.IrequestComic): protos.requestComic;

        /**
         * Encodes the specified requestComic message. Does not implicitly {@link protos.requestComic.verify|verify} messages.
         * @param message requestComic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IrequestComic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified requestComic message, length delimited. Does not implicitly {@link protos.requestComic.verify|verify} messages.
         * @param message requestComic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IrequestComic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a requestComic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns requestComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.requestComic;

        /**
         * Decodes a requestComic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns requestComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.requestComic;

        /**
         * Verifies a requestComic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a requestComic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns requestComic
         */
        public static fromObject(object: { [k: string]: any }): protos.requestComic;

        /**
         * Creates a plain object from a requestComic message. Also converts values to other types if specified.
         * @param message requestComic
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.requestComic, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this requestComic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a responseComic. */
    interface IresponseComic {

        /** responseComic comic */
        comic: protos.Icomic;
    }

    /** Represents a responseComic. */
    class responseComic implements IresponseComic {

        /**
         * Constructs a new responseComic.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IresponseComic);

        /** responseComic comic. */
        public comic: protos.Icomic;

        /**
         * Creates a new responseComic instance using the specified properties.
         * @param [properties] Properties to set
         * @returns responseComic instance
         */
        public static create(properties?: protos.IresponseComic): protos.responseComic;

        /**
         * Encodes the specified responseComic message. Does not implicitly {@link protos.responseComic.verify|verify} messages.
         * @param message responseComic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IresponseComic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified responseComic message, length delimited. Does not implicitly {@link protos.responseComic.verify|verify} messages.
         * @param message responseComic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IresponseComic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a responseComic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns responseComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.responseComic;

        /**
         * Decodes a responseComic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns responseComic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.responseComic;

        /**
         * Verifies a responseComic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a responseComic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns responseComic
         */
        public static fromObject(object: { [k: string]: any }): protos.responseComic;

        /**
         * Creates a plain object from a responseComic message. Also converts values to other types if specified.
         * @param message responseComic
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.responseComic, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this responseComic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a requestUpload. */
    interface IrequestUpload {

        /** requestUpload name */
        name: string;

        /** requestUpload files */
        files?: (protos.Iimg[]|null);
    }

    /** Represents a requestUpload. */
    class requestUpload implements IrequestUpload {

        /**
         * Constructs a new requestUpload.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IrequestUpload);

        /** requestUpload name. */
        public name: string;

        /** requestUpload files. */
        public files: protos.Iimg[];

        /**
         * Creates a new requestUpload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns requestUpload instance
         */
        public static create(properties?: protos.IrequestUpload): protos.requestUpload;

        /**
         * Encodes the specified requestUpload message. Does not implicitly {@link protos.requestUpload.verify|verify} messages.
         * @param message requestUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IrequestUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified requestUpload message, length delimited. Does not implicitly {@link protos.requestUpload.verify|verify} messages.
         * @param message requestUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IrequestUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a requestUpload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns requestUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.requestUpload;

        /**
         * Decodes a requestUpload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns requestUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.requestUpload;

        /**
         * Verifies a requestUpload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a requestUpload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns requestUpload
         */
        public static fromObject(object: { [k: string]: any }): protos.requestUpload;

        /**
         * Creates a plain object from a requestUpload message. Also converts values to other types if specified.
         * @param message requestUpload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.requestUpload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this requestUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a responseUpload. */
    interface IresponseUpload {

        /** responseUpload id */
        id: string;
    }

    /** Represents a responseUpload. */
    class responseUpload implements IresponseUpload {

        /**
         * Constructs a new responseUpload.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IresponseUpload);

        /** responseUpload id. */
        public id: string;

        /**
         * Creates a new responseUpload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns responseUpload instance
         */
        public static create(properties?: protos.IresponseUpload): protos.responseUpload;

        /**
         * Encodes the specified responseUpload message. Does not implicitly {@link protos.responseUpload.verify|verify} messages.
         * @param message responseUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IresponseUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified responseUpload message, length delimited. Does not implicitly {@link protos.responseUpload.verify|verify} messages.
         * @param message responseUpload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IresponseUpload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a responseUpload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns responseUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.responseUpload;

        /**
         * Decodes a responseUpload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns responseUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.responseUpload;

        /**
         * Verifies a responseUpload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a responseUpload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns responseUpload
         */
        public static fromObject(object: { [k: string]: any }): protos.responseUpload;

        /**
         * Creates a plain object from a responseUpload message. Also converts values to other types if specified.
         * @param message responseUpload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.responseUpload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this responseUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a comic. */
    interface Icomic {

        /** comic id */
        id: string;

        /** comic name */
        name: string;

        /** comic tagGroups */
        tagGroups?: (protos.ItagGroups[]|null);

        /** comic cover */
        cover: protos.Iimg;

        /** comic gallery */
        gallery?: (protos.Iimg[]|null);
    }

    /** Represents a comic. */
    class comic implements Icomic {

        /**
         * Constructs a new comic.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.Icomic);

        /** comic id. */
        public id: string;

        /** comic name. */
        public name: string;

        /** comic tagGroups. */
        public tagGroups: protos.ItagGroups[];

        /** comic cover. */
        public cover: protos.Iimg;

        /** comic gallery. */
        public gallery: protos.Iimg[];

        /**
         * Creates a new comic instance using the specified properties.
         * @param [properties] Properties to set
         * @returns comic instance
         */
        public static create(properties?: protos.Icomic): protos.comic;

        /**
         * Encodes the specified comic message. Does not implicitly {@link protos.comic.verify|verify} messages.
         * @param message comic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.Icomic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified comic message, length delimited. Does not implicitly {@link protos.comic.verify|verify} messages.
         * @param message comic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.Icomic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a comic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns comic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.comic;

        /**
         * Decodes a comic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns comic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.comic;

        /**
         * Verifies a comic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a comic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns comic
         */
        public static fromObject(object: { [k: string]: any }): protos.comic;

        /**
         * Creates a plain object from a comic message. Also converts values to other types if specified.
         * @param message comic
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.comic, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this comic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tagGroups. */
    interface ItagGroups {

        /** tagGroups name */
        name: string;

        /** tagGroups tags */
        tags?: (string[]|null);
    }

    /** Represents a tagGroups. */
    class tagGroups implements ItagGroups {

        /**
         * Constructs a new tagGroups.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.ItagGroups);

        /** tagGroups name. */
        public name: string;

        /** tagGroups tags. */
        public tags: string[];

        /**
         * Creates a new tagGroups instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tagGroups instance
         */
        public static create(properties?: protos.ItagGroups): protos.tagGroups;

        /**
         * Encodes the specified tagGroups message. Does not implicitly {@link protos.tagGroups.verify|verify} messages.
         * @param message tagGroups message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.ItagGroups, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tagGroups message, length delimited. Does not implicitly {@link protos.tagGroups.verify|verify} messages.
         * @param message tagGroups message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.ItagGroups, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tagGroups message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tagGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.tagGroups;

        /**
         * Decodes a tagGroups message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tagGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.tagGroups;

        /**
         * Verifies a tagGroups message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tagGroups message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tagGroups
         */
        public static fromObject(object: { [k: string]: any }): protos.tagGroups;

        /**
         * Creates a plain object from a tagGroups message. Also converts values to other types if specified.
         * @param message tagGroups
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.tagGroups, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tagGroups to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an img. */
    interface Iimg {

        /** img name */
        name: string;

        /** img url */
        url: string;
    }

    /** Represents an img. */
    class img implements Iimg {

        /**
         * Constructs a new img.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.Iimg);

        /** img name. */
        public name: string;

        /** img url. */
        public url: string;

        /**
         * Creates a new img instance using the specified properties.
         * @param [properties] Properties to set
         * @returns img instance
         */
        public static create(properties?: protos.Iimg): protos.img;

        /**
         * Encodes the specified img message. Does not implicitly {@link protos.img.verify|verify} messages.
         * @param message img message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.Iimg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified img message, length delimited. Does not implicitly {@link protos.img.verify|verify} messages.
         * @param message img message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.Iimg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an img message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns img
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.img;

        /**
         * Decodes an img message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns img
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.img;

        /**
         * Verifies an img message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an img message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns img
         */
        public static fromObject(object: { [k: string]: any }): protos.img;

        /**
         * Creates a plain object from an img message. Also converts values to other types if specified.
         * @param message img
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.img, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this img to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
