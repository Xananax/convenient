"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * restricts the frequency of calls that a function receives to a fixed time interval
 * @param fn
 * @param threshold
 */
exports.throttle = function (fn, threshold) {
    if (threshold === void 0) { threshold = 300; }
    var last = 0;
    var deferTimer;
    var throttled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = +new Date;
        if (last && now < last + threshold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(void 0, args);
            }, threshold);
        }
        else {
            last = now;
            fn.apply(void 0, args);
        }
    };
    return throttled;
};
//# sourceMappingURL=throttle.js.map