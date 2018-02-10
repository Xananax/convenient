'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.root_object = ((typeof self === 'object' && self.self === self && self)
    || (typeof global === 'object' && global.global === global && global)
    //@ts-ignore
    || (this));
exports.set_global = function (name, thing) {
    return (exports.root_object[name] = thing);
};
exports.get_global = function (name) {
    return (exports.root_object[name]);
};
exports.make_global = exports.set_global;
exports.default = exports.set_global;
//# sourceMappingURL=make_global.js.map