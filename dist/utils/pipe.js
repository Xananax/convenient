"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = require("./identity");
// tslint:disable-next-line:no-any
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    switch (fns.length) {
        case 0: return identity_1.identity;
        case 1: return exports.pipe1(fns[0]);
        case 2: return exports.pipe2(fns[0], fns[1]);
        case 3: return exports.pipe3(fns[0], fns[1], fns[2]);
        case 4: return pipe4(fns[0], fns[1], fns[2], fns[3]);
        case 5: return pipe5(fns[0], fns[1], fns[2], fns[3], fns[4]);
        default: break;
    }
    return fns.reduce(exports.pipe2);
}
exports.pipe = pipe;
exports.pipe1 = function (f) {
    return function (a) {
        return f(a);
    };
};
exports.pipe2 = function (g, f) {
    return function (a) { return f(g(a)); };
};
exports.pipe3 = function (h, g, f) {
    return function (a) {
        return f(g(h(a)));
    };
};
var pipe4 = function (i, h, g, f) {
    return function (a) {
        return f(g(h(i(a))));
    };
};
var pipe5 = function (j, i, h, g, f) {
    return function (a) {
        return f(g(h(i(j(a)))));
    };
};
//# sourceMappingURL=pipe.js.map