"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proto = Object.prototype;
var gpo = Object.getPrototypeOf;
/**
 * check if the argument passed is a plain javascript object (pojo)
 * @param obj
 */
exports.is_pojo = 
// tslint:disable-next-line:no-any
function (obj) {
    return (!(obj === null || typeof obj !== 'object')
        && (gpo(obj) === proto));
};
exports.default = exports.is_pojo;
//# sourceMappingURL=is_pojo.js.map