"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_dev_1 = require("./is_dev");
var identity_1 = require("./identity");
/* tslint:disable:no-any no-console */
exports.log_dev = function (msg) {
    return function (thing) {
        var things = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            things[_i - 1] = arguments[_i];
        }
        return (console.log.apply(console, [msg,
            thing].concat(things)), thing);
    };
};
/* tslint:enable:no-any no-console */
exports.log_prod = function (msg) { return identity_1.identity; };
exports.log = is_dev_1.is_dev ? exports.log_dev : exports.log_prod;
exports.default = exports.log;
//# sourceMappingURL=log.js.map