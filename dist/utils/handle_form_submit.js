"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serialize_form_1 = require("./serialize_form");
exports.handle_form_submit = function (callback) {
    return function (event) {
        return (callback(serialize_form_1.serialize_form(event.target)));
    };
};
//# sourceMappingURL=handle_form_submit.js.map