'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.root_object = ((typeof self === 'object' && self.self === self && self)
    || (typeof global === 'object' && global.global === global && global)
    // @ts-ignore
    || (this));
/**
 * Sets a property on the global object. That is `window` in browser environments, `process` in node, etc
 * @param name
 * @param thing
 */
exports.set_global = 
// tslint:disable-next-line:no-any
function (name, thing) {
    return (exports.root_object[name] = thing);
};
/**
 * Retrieves a property from the global object (`window` in browser environments, `process` in node, etc)
 * @param name
 */
exports.get_global = function (name) {
    return (exports.root_object[name]);
};
exports.make_global = exports.set_global;
exports.default = exports.set_global;
//# sourceMappingURL=make_global.js.map