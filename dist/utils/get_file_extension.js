"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a string's extension
 * @param filename
 */
exports.get_file_extension = function (filename) {
    if (!filename) {
        return '';
    }
    ;
    var index = filename.lastIndexOf('.');
    if (index <= 0) {
        return '';
    }
    ;
    return filename.substring(index + 1).toLowerCase().trim();
};
exports.default = exports.get_file_extension;
//# sourceMappingURL=get_file_extension.js.map