"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * @param max
 * @param min
 * @param rand
 */
exports.get_random_int_in_range = function (max, min, rand) {
    if (min === void 0) { min = 0; }
    if (rand === void 0) { rand = Math.random; }
    return (Math.floor(rand() * (max - min + 1)) + min);
};
exports.default = exports.get_random_int_in_range;
//# sourceMappingURL=get_random_int_in_range.js.map