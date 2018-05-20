"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * is true if the environment is production
 */
exports.is_prod = (typeof process !== 'undefined') && process.env && process.env.NODE_ENV === 'production';
exports.is_dev = !exports.is_prod;
exports.default = exports.is_prod;
//# sourceMappingURL=is_prod.js.map