"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s = 1.70158;
var s2 = 1.70158 * 1.525;
exports.In = function (k) {
    return (k * k * ((s + 1) * k - s));
};
exports.Out = function (k) {
    return (--k * k * ((s + 1) * k + s) + 1);
};
exports.InOut = function (k) {
    return ((k *= 2) < 1
        ? 0.5 * (k * k * ((s + 1) * k - s2))
        : 0.5 * ((k -= 2) * k * ((s2 + 1) * k + s2) + 2));
};
exports.back = { In: exports.In, Out: exports.Out, InOut: exports.InOut };
exports.default = exports.back;
//# sourceMappingURL=back.js.map