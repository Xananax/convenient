"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = require("./identity");
function promise_pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    switch (fns.length) {
        case 0: return identity_1.identity;
        case 1: return exports.promise_pipe1(fns[0]);
        case 2: return exports.promise_pipe2(fns[0], fns[1]);
        case 3: return exports.promise_pipe3(fns[0], fns[1], fns[2]);
        case 4: return exports.promise_pipe4(fns[0], fns[1], fns[2], fns[3]);
        case 5: return exports.promise_pipe5(fns[0], fns[1], fns[2], fns[3], fns[4]);
        default: break;
    }
    ;
    var piped = function (arg) {
        return fns.reduce(function (prev, fn) { return prev.then(fn); }, Promise.resolve(arg));
    };
    return piped;
}
exports.promise_pipe = promise_pipe;
exports.promise_pipe1 = function (f) {
    return function (a) {
        return Promise.resolve(a).then(f);
    };
};
exports.promise_pipe2 = function (g, f) {
    return function (a) {
        return Promise.resolve(a).then(g).then(f);
    };
};
exports.promise_pipe3 = function (h, g, f) {
    return function (a) {
        return Promise.resolve(a).then(h).then(g).then(f);
    };
};
exports.promise_pipe4 = function (i, h, g, f) {
    return function (a) {
        return Promise.resolve(a).then(i).then(h).then(g).then(f);
    };
};
exports.promise_pipe5 = function (j, i, h, g, f) {
    return function (a) {
        return Promise.resolve(a).then(j).then(i).then(h).then(g).then(f);
    };
};
//# sourceMappingURL=promise_pipe.js.map