"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Clamps a number between the two provided boundaries
 * @param max
 * @param min
 */
exports.clamp = function (max, min) {
    if (min === void 0) { min = 0; }
    return function (num) {
        return (Math.min(Math.max(num, min), max));
    };
};
exports.default = exports.clamp;
//# sourceMappingURL=clamp.js.map