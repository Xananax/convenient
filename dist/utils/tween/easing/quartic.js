"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.In = function (k) {
    return (k * k * k * k);
};
exports.Out = function (k) {
    return (1 - (--k * k * k * k));
};
exports.InOut = function (k) {
    return ((k *= 2) < 1
        ? 0.5 * k * k * k * k
        : -0.5 * ((k -= 2) * k * k * k - 2));
};
exports.quartic = { In: exports.In, Out: exports.Out, InOut: exports.InOut };
exports.default = exports.quartic;
//# sourceMappingURL=quartic.js.map