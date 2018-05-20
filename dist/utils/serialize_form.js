"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_file_input_files_1 = require("./get_file_input_files");
/**
 * Extracts all the fields from an html form, gets all their values,
 * and returns the results.
 * Some magic that happens:
 *  - files inputs will return an array of files (rather than a `FileList`)
 *  - if a file input does not have the `multiple` property, it will return a single file
 *  - checkboxes will return booleans
 *  - number and range inputs will return floats (i.e., numbers)
 *  - any field with an undefined value, or without a name will be skipped and not serialized
 *  - any button will be skipped
 * @param form
 */
exports.serialize_form = function (form) {
    var elements = form.elements, method = form.method, enctype = form.enctype, target = form.target;
    var action = form.getAttribute('action') || '';
    var name = form.getAttribute('name') || '';
    var inputs = Array.prototype.slice.call(elements);
    var serialized = {};
    inputs.forEach(function (input) {
        var nodeName = input.nodeName, name = input.name, type = input.type, value = input.value, checked = input.checked;
        if (!name || nodeName === 'BUTTON') {
            return;
        }
        ;
        if (type === 'checkbox') {
            serialized[name] = !!checked;
            return;
        }
        ;
        if (typeof value === 'undefined' || value === '') {
            return;
        }
        ;
        if (type === 'radio') {
            if (!checked) {
                return;
            }
            ;
            serialized[name] = value;
            return;
        }
        ;
        if (type === 'number' || type === 'range') {
            if (!value) {
                serialized[name] = 0;
                return;
            }
            ;
            serialized[name] = parseFloat(value);
            return;
        }
        ;
        if (type === 'file') {
            var files = get_file_input_files_1.get_file_input_files(input);
            if (!files) {
                return;
            }
            ;
            serialized[name] = files;
            return;
        }
        ;
        serialized[name] = value;
    });
    var ret = { name: name,
        action: action,
        method: method,
        values: serialized,
        enctype: enctype,
        target: target
    };
    return ret;
};
//# sourceMappingURL=serialize_form.js.map