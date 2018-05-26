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
exports.stop = { stop: true };
exports.runObserver = function (observer, serialized) {
    var newValues = {};
    var oneKeyChanged = false;
    return Object.keys(serialized.values)
        .map(function (key) {
        return (function (doStop) {
            return (doStop === exports.stop
                ? Promise.resolve(exports.stop)
                : Promise.resolve()
                    .then(function () { return observer(key, serialized.values[key], serialized, exports.stop); })
                    .then(function (response) {
                    if (typeof response !== 'undefined') {
                        if (response === exports.stop) {
                            return exports.stop;
                        }
                        ;
                        oneKeyChanged = true;
                        newValues[key] = response;
                    }
                    ;
                    return true;
                }));
        });
    })
        .reduce(function (prev, curr) { return prev.then(curr); }, Promise.resolve({}))
        .then(function () {
        if (oneKeyChanged) {
            return newValues;
        }
        ;
        return null;
    });
};
exports.transform_form = function (transform) {
    return function (serialized) {
        return (transform
            ? Promise
                .resolve()
                .then(function () { return exports.runObserver(transform, serialized); })
                .then(function (retValue) {
                return (!!retValue
                    ? __assign({}, serialized, { values: __assign({}, serialized.values, { retValue: retValue }) }) : serialized);
            })
            : Promise.resolve(serialized));
    };
};
exports.validate_form = function (validate) {
    return function (serialized) {
        return (validate
            ? Promise
                .resolve()
                .then(function () { return exports.runObserver(validate, serialized); })
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