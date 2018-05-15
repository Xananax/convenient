"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factorial_1 = require("./factorial");
exports.bernstein = function (n, i, fc) {
    if (fc === void 0) { fc = factorial_1.factorial(); }
    return (fc(n) / fc(i) / fc(n - i));
};
exports.default = exports.bernstein;
//# sourceMappingURL=bernstein.js.map