"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bernstein_1 = require("./bernstein");
var catmull_rom_1 = require("./catmull_rom");
var factorial_1 = require("./factorial");
var linear_1 = require("./linear");
exports.interpolation_utils = { bernstein: bernstein_1.bernstein, catmull_rom: catmull_rom_1.catmull_rom, linear: linear_1.linear, factorial: factorial_1.factorial };
exports.default = exports.interpolation_utils;
//# sourceMappingURL=utils.js.map