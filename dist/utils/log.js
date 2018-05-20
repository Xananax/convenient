"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_dev_1 = require("./is_dev");
var identity_1 = require("./identity");
/* tslint:disable:no-any no-console */
/**
 * returns a logger
 * The logged logs everything passed to console, then returns the first passed element.
 * It is thus suitable to be used in promises, for example:
 * ```js
 * fetch('some/url')
 *  .then(log('initial'))
 *  .then(res=>res.json())
 *  .then(log('json'))
 *  .catch(log('err'))
 * ```
 * In production, all those calls are washed away and nothing logs
 * @param title
 */
exports.log_dev = function (title) {
    if (title === void 0) { title = ''; }
    /**
     * Log something to console
     * @param thing
     * @param ...things
     */
    return function (thing) {
        var things = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            things[_i - 1] = arguments[_i];
        }
        return (console.log.apply(console, [title,
            thing].concat(things)), thing);
    };
};
/* tslint:enable:no-any no-console */
exports.log_prod = function (title) { return identity_1.identity; };
exports.log = is_dev_1.is_dev ? exports.log_dev : exports.log_prod;
exports.default = exports.log;
//# sourceMappingURL=log.js.map