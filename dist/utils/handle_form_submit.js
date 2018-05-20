"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serialize_form_1 = require("./serialize_form");
/**
 * Creates a function that handles submit events.
 * The function:
 * - stops the event from propagating
 * - serializes the form inputs
 * - runs the provided callback with the serialized form
 * @param callback
 */
exports.handle_form_submit = function (callback) {
    return function (event) {
        event.preventDefault();
        event.stopPropagation();
        var form = event.target;
        callback(serialize_form_1.serialize_form(form));
    };
};
//# sourceMappingURL=handle_form_submit.js.map