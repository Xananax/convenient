"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clamp_1 = require("./clamp");
describe('clamp', function () {
    it('returns a function that takes a single argument', function () {
        var clamp5 = clamp_1.clamp(5);
        expect(clamp5).toHaveProperty('length');
        expect(clamp5.length).toBe(1);
    });
    it('returns a number clamped to the provided range', function () {
        var clamp5 = clamp_1.clamp(5);
        expect(clamp5(10)).toBe(5);
        expect(clamp5(3)).toBe(3);
        expect(clamp5(-6)).toBe(0);
    });
    it('can optionally accept a `minimum` boundary', function () {
        var _clamp = clamp_1.clamp(5, -5);
        expect(_clamp(10)).toBe(5);
        expect(_clamp(3)).toBe(3);
        expect(_clamp(-4)).toBe(-4);
        expect(_clamp(-6)).toBe(-5);
    });
});
//# sourceMappingURL=clamp.test.js.map