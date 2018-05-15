"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var catmull_rom_1 = require("./utils/catmull_rom");
exports.catmull_rom = 
// tslint:disable-next-line:no-any
function (v, k, fn) {
    if (fn === void 0) { fn = catmull_rom_1.catmull_rom; }
    var m = v.length - 1;
    ;
    var f = m * k;
    ;
    var i = Math.floor(f);
    ;
    if (v[0] === v[m]) {
        if (k < 0) {
            i = Math.floor(f = m * (1 + k));
        }
        ;
        return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    }
    else {
        if (k < 0) {
            return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
        }
        ;
        if (k > 1) {
            return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
        }
        ;
        return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
};
exports.default = exports.catmull_rom;
//# sourceMappingURL=catmull_rom.js.map