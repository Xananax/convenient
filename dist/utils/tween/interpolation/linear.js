"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linear_1 = require("./utils/linear");
exports.linear = 
// tslint:disable-next-line:no-any
function (v, k, fn) {
    if (fn === void 0) { fn = linear_1.linear; }
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    if (k < 0) {
        return fn(v[0], v[1], f);
    }
    ;
    if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
    }
    ;
    return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
};
//# sourceMappingURL=linear.js.map