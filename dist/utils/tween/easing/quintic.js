"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.In = function (k) {
    return (k * k * k * k * k);
};
exports.Out = function (k) {
    return (--k * k * k * k * k + 1);
};
exports.InOut = function (k) {
    return ((k *= 2) < 1
        ? 0.5 * k * k * k * k * k
        : 0.5 * ((k -= 2) * k * k * k * k + 2));
};
exports.quintic = { In: exports.In, Out: exports.Out, InOut: exports.InOut };
exports.default = exports.quintic;
//# sourceMappingURL=quintic.js.map