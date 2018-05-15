"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.In = function (k) {
    return (k === 0
        ? 0
        : Math.pow(1024, k - 1));
};
exports.Out = function (k) {
    return (k === 1
        ? 1
        : 1 - Math.pow(2, -10 * k));
};
exports.InOut = function (k) {
    return (k === 0 || k === 1
        ? k
        : ((k *= 2) < 1
            ? 0.5 * Math.pow(1024, k - 1)
            : 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2)));
};
exports.exponential = { In: exports.In, Out: exports.Out, InOut: exports.InOut };
//# sourceMappingURL=exponential.js.map