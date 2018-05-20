"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * checks if the passed argument is numeric
 * @param numeric
 */
exports.is_numeric = 
// tslint:disable-next-line:no-any
function (numeric) {
    return (!isNaN(parseFloat(numeric))
        && isFinite(numeric));
};
exports.default = exports.is_numeric;
//# sourceMappingURL=is_numeric.js.map