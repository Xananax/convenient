"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proto = Object.prototype;
var gpo = Object.getPrototypeOf;
// tslint:disable-next-line:no-any
exports.is_pojo = function (obj) {
    return !(obj === null || typeof obj !== 'object') && gpo(obj) === proto;
};
exports.default = exports.is_pojo;
//# sourceMappingURL=is_pojo.js.map