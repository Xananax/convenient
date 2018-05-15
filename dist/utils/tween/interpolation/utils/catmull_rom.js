"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catmull_rom = function (p0, p1, p2, p3, t) {
    var v0 = (p2 - p0) * 0.5;
    var v1 = (p3 - p1) * 0.5;
    var t2 = t * t;
    var t3 = t * t2;
    return ((2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1);
};
exports.default = exports.catmull_rom;
//# sourceMappingURL=catmull_rom.js.map