"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Capitalizes the first letter of a string. Does *not* capitalize each word!
 * @param sentence
 */
exports.capitalize_sentence = function (sentence) {
    return (sentence
        ? sentence[0].toUpperCase() + sentence.slice(1)
        : '');
};
exports.default = exports.capitalize_sentence;
//# sourceMappingURL=capitalize_sentence.js.map