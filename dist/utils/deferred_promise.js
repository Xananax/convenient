"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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