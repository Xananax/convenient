"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Capitalizes the first letter of a string. Does *not* capitalise each word!
 * @param sentence
 */
exports.capitalize_sentence = function (sentence) {
    return (sentence[0].toUpperCase() + sentence.slice(1));
};
exports.default = exports.capitalize_sentence;
//# sourceMappingURL=capitalize_sentence.js.map