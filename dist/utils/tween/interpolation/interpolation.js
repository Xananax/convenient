"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var bezier_1 = require("./bezier");
var catmull_rom_1 = require("./catmull_rom");
var linear_1 = require("./linear");
exports.utils = utils_1.interpolation_utils;
exports.interpolation = { bezier: bezier_1.bezier,
    catmull_rom: catmull_rom_1.catmull_rom,
    linear: linear_1.linear
};
exports.default = exports.interpolation;
//# sourceMappingURL=interpolation.js.map