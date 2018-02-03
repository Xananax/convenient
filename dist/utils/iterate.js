"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_pojo_1 = require("./is_pojo");
var is_array_1 = require("./is_array");
function iterate(obj, map) {
    var keys = is_pojo_1.is_pojo(obj) ? Object.keys(obj) : is_array_1.is_array(obj) ? obj : [];
    var iter = function (fn) {
        return (keys.map(function (k, i) {
            return (fn(obj[k], k, obj));
        }));
    };
    return (map ? iter(map) : iter);
}
exports.iterate = iterate;
exports.default = iterate;
//# sourceMappingURL=iterate.js.map