"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-any
exports.is_numeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
exports.default = exports.is_numeric;
//# sourceMappingURL=is_numeric.js.map