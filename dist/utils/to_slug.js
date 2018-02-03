"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TRIM = /^\s+|\s+$/g;
var INVALID = /[^a-z0-9 -_]/g;
var WHITESPACE = /\s+/g;
var DASHES = /-+/g;
/**
 * Converts a string to a safe string,
 * suitable to be used as an url
 * or as an html element class/id
 * @param str
 */
exports.to_slug = function (str) {
    return str
        .toLowerCase()
        .replace(TRIM, '')
        .replace(INVALID, '')
        .replace(WHITESPACE, '_')
        .replace(DASHES, '-');
};
exports.default = exports.to_slug;
//# sourceMappingURL=to_slug.js.map