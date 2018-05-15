"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var back_1 = require("./back");
var bounce_1 = require("./bounce");
var circular_1 = require("./circular");
var cubic_1 = require("./cubic");
var elastic_1 = require("./elastic");
var exponential_1 = require("./exponential");
var linear_1 = require("./linear");
var quadratic_1 = require("./quadratic");
var quartic_1 = require("./quartic");
var quintic_1 = require("./quintic");
var sinusoidal_1 = require("./sinusoidal");
exports.easing = { back: back_1.back,
    bounce: bounce_1.bounce,
    circular: circular_1.circular,
    cubic: cubic_1.cubic,
    elastic: elastic_1.elastic,
    exponential: exponential_1.exponential,
    linear: linear_1.linear,
    quadratic: quadratic_1.quadratic,
    quartic: quartic_1.quartic,
    quintic: quintic_1.quintic,
    sinusoidal: sinusoidal_1.sinusoidal
};
exports.default = exports.easing;
//# sourceMappingURL=easing.js.map