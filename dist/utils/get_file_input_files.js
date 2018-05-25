"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayLike_to_array_1 = require("./arrayLike_to_array");
function fileList_to_array(files, first) {
    var _files = arrayLike_to_array_1.arrayLike_to_array(files);
    if (!files.length) {
        return null;
    }
    ;
    var ret = (first
        ? files[0]
        : _files);
    return ret;
}
exports.fileList_to_array = fileList_to_array;
exports.empty_files = [];
function get_file_input_files(input) {
    var multiple = input.multiple, files = input.files;
    if (files) {
        var single = !!!multiple;
        var ret = fileList_to_array(files, single);
        return ret;
    }
    ;
    return (multiple
        ? exports.empty_files
        : null);
}
exports.get_file_input_files = get_file_input_files;
exports.default = get_file_input_files;
//# sourceMappingURL=get_file_input_files.js.map