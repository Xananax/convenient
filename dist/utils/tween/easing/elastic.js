"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.In = function (k) {
    return (k === 0 || k === 1
        ? k
        : -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI));
};
exports.Out = function (k) {
    return (k === 0 || k === 1
        ? k
        : Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1);
};
exports.InOut = function (k) {
    return (k === 0 || k === 1
        ? k
        : (k < 1
            ? -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI)
            : 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1));
};
exports.elastic = { In: exports.In, Out: exports.Out, InOut: exports.InOut };
//# sourceMappingURL=elastic.js.map