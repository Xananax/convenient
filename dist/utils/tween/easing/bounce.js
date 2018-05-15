"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Out = function (k) {
    return (k < (1 / 2.75)
        ? 7.5625 * k * k
        : (k < (2 / 2.75)
            ? 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75
            : (k < (2.5 / 2.75)
                ? 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375
                : 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375)));
};
exports.In = function (k) {
    return (1 - exports.Out(1 - k));
};
exports.InOut = function (k) {
    return (k < 0.5
        ? exports.In(k * 2) * 0.5
        : exports.Out(k * 2 - 1) * 0.5 + 0.5);
};
exports.bounce = { In: exports.In, Out: exports.Out, InOut: exports.InOut };
exports.default = exports.bounce;
//# sourceMappingURL=bounce.js.map