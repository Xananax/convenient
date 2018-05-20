"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is_array");
/**
 * Checks if the passed object is iterable
 * @param obj
 */
exports.is_arrayLike = 
// tslint:disable-next-line:no-any
function (obj) {
    return ((is_array_1.is_array(obj))
        || ((!!obj)
            && (typeof obj === 'object')
            && (typeof obj.length === 'number')
            && (obj.length === 0
                || ((obj.length > 0)
                    && (obj.length - 1) in obj))));
};
exports.default = exports.is_arrayLike;
//# sourceMappingURL=is_arrayLike.js.map