"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Transforms any list (NodeList, FileList, ...) to an array
 * @param listLike anything that is iterable
 */
exports.arrayLike_to_array = function (listLike) {
    return (Array.prototype.slice.call(listLike));
};
exports.default = exports.arrayLike_to_array;
//# sourceMappingURL=arrayLike_to_array.js.map