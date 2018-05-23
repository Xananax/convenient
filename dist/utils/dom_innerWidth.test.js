"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_innerWidth_1 = require("./dom_innerWidth");
var fixtures_test_1 = require("./fixtures.test");
describe('dom_innerHeight', function () {
    it('should return the height of an element', function () {
        var square = fixtures_test_1.doc.getElementsByClassName('square')[0];
        var width = dom_innerWidth_1.dom_innerWidth(square, fixtures_test_1.window);
        expect(typeof width).toBe('number');
    });
});
//# sourceMappingURL=dom_innerWidth.test.js.map