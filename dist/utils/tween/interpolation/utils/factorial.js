"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = function (a) {
    if (a === void 0) { a = [1]; }
    return function (n) {
        var s = 1;
        if (a[n]) {
            return a[n];
        }
        ;
        for (var i = n; i > 1; i--) {
            s *= i;
        }
        ;
        a[n] = s;
        return s;
    };
};
exports.default = exports.factorial;
//# sourceMappingURL=factorial.js.map