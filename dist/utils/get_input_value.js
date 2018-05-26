"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_file_input_files_1 = require("./get_file_input_files");
/**
 * Returns the value for a given field
 *  - files inputs will return an array of files (rather than a `FileList`)
 *  - if a file input does not have the `multiple` property, it will return a single file
 *  - checkboxes will return booleans
 *  - number and range inputs will return floats (i.e., numbers)
 *  - any field without a name will be skipped and not serialized
 *  - any button will be skipped
 * @param input
 */
exports.get_input_value = function (input) {
    var nodeName = input.nodeName, name = input.name, type = input.type, value = input.value, checked = input.checked;
    if (!name || nodeName === 'BUTTON') {
        return null;
    }
    ;
    if (type === 'checkbox') {
        return !!checked;
    }
    ;
    if (typeof value === 'undefined' || value === '') {
        return '';
    }
    ;
    if (type === 'radio') {
        if (!checked) {
            return null;
        }
        ;
        return value;
    }
    ;
    if (type === 'number' || type === 'range') {
        if (!value) {
            return 0;
        }
        ;
        return parseFloat(value);
    }
    ;
    if (type === 'file') {
        var files = get_file_input_files_1.get_file_input_files(input);
        if (!files) {
            return null;
        }
        ;
        return files;
    }
    ;
    return value;
};
exports.default = exports.get_input_value;
//# sourceMappingURL=get_input_value.js.map