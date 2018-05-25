"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform_form = function (transform) {
    return function (serialized) {
        return (transform
            ? Promise
                .resolve()
                .then(function () { return transform(serialized); })
                .then(function (retValue) {
                return (!!retValue
                    ? __assign({}, serialized, { values: retValue }) : serialized);
            })
            : Promise.resolve(serialized));
    };
};
exports.validate_form = function (validate) {
    return function (serialized) {
        return (validate
            ? Promise
                .resolve()
                .then(function () { return validate(serialized); })
                .then(function (errors) {
                return (!!errors
                    ? __assign({}, serialized, { errors: errors }) : serialized);
            })
            : Promise.resolve(serialized));
    };
};
exports.process_form = function (validate, transform) {
    var _validate = exports.validate_form(validate);
    var _transform = exports.transform_form(transform);
    var process = function (serialized) {
        return Promise.resolve(serialized)
            .then(_transform)
            .then(_validate);
    };
    return process;
};
exports.default = exports.process_form;
//# sourceMappingURL=process_form.js.map