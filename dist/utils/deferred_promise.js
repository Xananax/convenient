"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a promise with exposed `resolve()` and `reject()` that can
 * be used any time.
 * Works well with lazy evaluation.
 */
exports.deferred_promise = function () {
    var receiver;
    var promise = new Promise(function (resolve, reject) {
        return (receiver = { resolve: resolve, reject: reject });
    });
    Object.assign(promise, receiver);
    return promise;
};
exports.default = exports.deferred_promise;
//# sourceMappingURL=deferred_promise.js.map