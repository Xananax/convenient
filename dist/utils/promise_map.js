"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = { stop: true
};
/**
 * Async property mapper which runs every property of an object
 * through a mapper function, and returns a new object with
 * mapped properties.
 * The mapper has the following signature:
 *
 * ```js
 * ( value, key, obj, stop ) => newValue | undefined | stop
 * ```
 *
 * if the mapper returns nothing (`undefined`) for a value, this
 * value will be skipped. If it returns the special `stop` value,
 * all subsequent values will be skipped
 *
 * If all keys are skipped, the returned object is `null`.
 *
 * @param observer
 * @param obj
 */
exports.promise_map = function (observer, obj) {
    var newValues = {};
    var oneKeyChanged = false;
    return Object.keys(obj)
        .map(function (key) {
        return (function (previousReturnValue) {
            return (previousReturnValue === exports.stop
                ? Promise.resolve(exports.stop)
                : Promise.resolve()
                    .then(function () { return observer(obj[key], key, obj, exports.stop); })
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
exports.default = exports.promise_map;
//# sourceMappingURL=promise_map.js.map