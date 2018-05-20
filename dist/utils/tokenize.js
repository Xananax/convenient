"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAG = function (tag) {
    var text = tag.slice(1);
    return { type: 'TAG', text: text, url: text };
};
exports.TEXT = function (text) {
    return ({ type: 'TEXT', text: text });
};
exports.LINEBREAK = { type: 'LINEBREAK' };
exports.makeToken = function (word) {
    return (word[0] === '#'
        ? exports.TAG(word)
        : exports.TEXT(word));
};
/**
 * Takes a string and returns an array
 * of token. A token is an object of signature:
 * ```js
 * {type:string,text?:string,url?:string}
 * ```
 * Where `type` can be 'TEXT', 'TAG' or 'LINEBREAK'
 * @param text the original text
 * @param tokenArr optionally, an array to append to
 */
exports.tokenize = function (text, tokenArr) {
    if (tokenArr === void 0) { tokenArr = []; }
    return ((text || '')
        .replace(/ +/, '')
        .split(/\n/)
        .reduce(function (tokens, line) {
        return tokens.concat(line
            .split(/\s+/)
            .filter(Boolean)
            .map(exports.makeToken), [exports.LINEBREAK]);
    }, tokenArr));
};
exports.default = exports.tokenize;
//# sourceMappingURL=tokenize.js.map