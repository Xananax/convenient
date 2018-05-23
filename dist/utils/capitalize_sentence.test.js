"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_sentence_1 = require("./capitalize_sentence");
describe('capitalize_sentence', function () {
    it('should capitalize the first word', function () {
        expect(capitalize_sentence_1.capitalize_sentence('word')).toBe('Word');
    });
    it('should not capitalize other words', function () {
        expect(capitalize_sentence_1.capitalize_sentence('word word')).toBe('Word word');
    });
    it('should return an empty string for falsy values', function () {
        expect(capitalize_sentence_1.capitalize_sentence()).toBe('');
        expect(capitalize_sentence_1.capitalize_sentence('')).toBe('');
    });
});
//# sourceMappingURL=capitalize_sentence.test.js.map