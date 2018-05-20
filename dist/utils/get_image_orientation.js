"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_numeric_1 = require("./is_numeric");
exports.portrait = 'portrait';
exports.landscape = 'landscape';
exports.square = 'square';
exports.unknown = 'unknown';
/**
 * Returns an orientation string for a given width and height
 * @param width
 * @param height
 */
exports.get_image_orientation = function (width, height) {
    return (width && height && is_numeric_1.is_numeric(width) && is_numeric_1.is_numeric(height)
        ? (width === height
            ? exports.square
            : (height > width
                ? exports.portrait
                : exports.landscape))
        : exports.unknown);
};
exports.default = exports.get_image_orientation;
//# sourceMappingURL=get_image_orientation.js.map