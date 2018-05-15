"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayLike_to_array_1 = require("./arrayLike_to_array");
var get_file_input_files_1 = require("./get_file_input_files");
exports.serialize_form = function (form) {
    var url = window.location.protocol + '//' + window.location.host;
    var regex = new RegExp('^' + url + '/?', 'ig');
    var elements = form.elements, formName = form.name, _action = form.action, method = form.method, enctype = form.enctype, target = form.target;
    var action = _action.replace(regex, '');
    var inputs = arrayLike_to_array_1.arrayLike_to_array(elements);
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