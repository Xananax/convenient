"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_numeric_1 = require("./is_numeric");
exports.portrait = 'portrait';
exports.landscape = 'landscape';
exports.square = 'square';
exports.unknown = 'unknown';
exports.get_image_orientation = function (x, y) {
    return (x && y && is_numeric_1.is_numeric(x) && is_numeric_1.is_numeric(y)
        ? (x === y
            ? exports.square
            : (y > x
                ? exports.portrait
                : exports.landscape))
        : exports.unknown);
};
exports.default = exports.get_image_orientation;
//# sourceMappingURL=get_image_orientation.js.map