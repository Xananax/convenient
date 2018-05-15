"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.In = function (k) {
    return (1 - Math.cos(k * Math.PI / 2));
};
exports.Out = function (k) {
    return (Math.sin(k * Math.PI / 2));
};
exports.InOut = function (k) {
    return (0.5 * (1 - Math.cos(Math.PI * k)));
};
exports.sinusoidal = { In: exports.In, Out: exports.Out, InOut: exports.InOut };
exports.default = exports.sinusoidal;
//# sourceMappingURL=sinusoidal.js.map