"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_input_value_1 = require("./get_input_value");
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
    ;
    var action = form.getAttribute('action') || '';
    var formName = form.getAttribute('name') || '';
    var enctype = form.getAttribute('enctype') || '';
    var method = form.getAttribute('method') || '';
    var target = form.getAttribute('target') || '';
    var inputs = Array.prototype.slice.call(form.elements);
    var serialized = {};
    inputs.forEach(function (input) {
        var value = get_input_value_1.get_input_value(input);
        if (value !== null) {
            serialized[input.name] = value;
        }
    });
    var ret = { name: formName,
        action: action,
        method: method,
        values: serialized,
        enctype: enctype,
        target: target
    };
    return ret;
};
//# sourceMappingURL=serialize_form.js.map