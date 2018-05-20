"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_numeric_1 = require("./is_numeric");
exports.ORIENTATION_PORTRAIT = 'portrait';
exports.ORIENTATION_LANDSCAPE = 'landscape';
exports.ORIENTATION_SQUARE = 'square';
exports.ORIENTATION_UNKNOWN = 'unknown';
/**
 * Returns an orientation string for a given width and height
 * @param width
 * @param height
 */
exports.get_image_orientation = function (width, height) {
    return (width && height && is_numeric_1.is_numeric(width) && is_numeric_1.is_numeric(height)
        ? (width === height
            ? exports.ORIENTATION_SQUARE
            : (height > width
                ? exports.ORIENTATION_PORTRAIT
                : exports.ORIENTATION_LANDSCAPE))
        : exports.ORIENTATION_UNKNOWN);
};
exports.default = exports.get_image_orientation;
//# sourceMappingURL=get_image_orientation.js.map