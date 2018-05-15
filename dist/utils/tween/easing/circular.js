"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.In = function (k) {
    return (1 - Math.sqrt(1 - k * k));
};
exports.Out = function (k) {
    return (Math.sqrt(1 - (--k * k)));
};
exports.InOut = function (k) {
    return ((k *= 2) < 1
        ? -0.5 * (Math.sqrt(1 - k * k) - 1)
        : 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1));
};
exports.circular = { In: exports.In, Out: exports.Out, InOut: exports.InOut };
exports.default = exports.circular;
//# sourceMappingURL=circular.js.map