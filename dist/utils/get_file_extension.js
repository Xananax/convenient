"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a string's extension
 * @param filename
 */
exports.get_file_extension = function (filename) {
    return (filename
        ? filename.substring(filename.lastIndexOf('.') + 1).toLowerCase().trim()
        : '');
};
exports.default = exports.get_file_extension;
//# sourceMappingURL=get_file_extension.js.map