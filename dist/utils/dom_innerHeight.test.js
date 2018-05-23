"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_innerHeight_1 = require("./dom_innerHeight");
var fixtures_test_1 = require("./fixtures.test");
describe('dom_innerHeight', function () {
    it('should return the height of an element', function () {
        var square = fixtures_test_1.doc.getElementsByClassName('square')[0];
        var height = dom_innerHeight_1.dom_innerHeight(square, fixtures_test_1.window);
        expect(typeof height).toBe('number');
    });
});
//# sourceMappingURL=dom_innerHeight.test.js.map