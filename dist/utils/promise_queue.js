"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbols_1 = require("./symbols");
function promise_queue(things, map, skipErrors) {
    if (skipErrors === void 0) { skipErrors = true; }
    var returnArr = [];
    return things.reduce(function (prev, item, index) {
        return prev.then(function (isStop) {
            return (isStop === symbols_1.stop
                ? Promise.resolve(symbols_1.stop)
                : Promise.resolve()
                    .then(function () { return map(item, index, things, symbols_1.stop, symbols_1.skip); })
                    .then(function (data) {
                    return (data === symbols_1.stop
                        ? symbols_1.stop
                        : data === symbols_1.skip
                            ? undefined
                            : returnArr[index] = data);
                })
                    .catch(function (error) {
                    return (!skipErrors
                        ? returnArr[index] = error
                        : undefined);
                }));
        });
    }, Promise.resolve(null))
        .then(function () { return returnArr.filter(Boolean); });
}
exports.promise_queue = promise_queue;
exports.default = promise_queue;
//# sourceMappingURL=promise_queue.js.map