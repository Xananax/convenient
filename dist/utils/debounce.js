"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ensures that the passed function gets called only once even if it runs multiple times under a specified delay
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param func
 * @param wait
 * @param immediate
 */
exports.debounce = function (func, wait, immediate) {
    if (wait === void 0) { wait = 300; }
    if (immediate === void 0) { immediate = false; }
    var timeout;
    var debounced = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            clearTimeout(timeout);
            if (!immediate) {
                func.apply(void 0, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        ;
        timeout = setTimeout(later, wait);
        ;
        if (callNow) {
            func.apply(void 0, args);
        }
    };
    return debounced;
};
exports.default = exports.debounce;
//# sourceMappingURL=debounce.js.map