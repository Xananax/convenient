"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bernstein_1 = require("./utils/bernstein");
var pw = Math.pow;
exports.bezier = 
// tslint:disable-next-line:no-any
function (v, k, bn) {
    if (bn === void 0) { bn = bernstein_1.bernstein; }
    var b = 0;
    ;
    var n = v.length - 1;
    ;
    for (var i = 0; i <= n; i++) {
        b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }
    ;
    return b;
};
//# sourceMappingURL=bezier.js.map