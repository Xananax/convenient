"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_window_size = function () {
    if (!window) {
        return ({ width: 0,
            height: 0
        });
    }
    ;
    var width = (window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth);
    var height = (window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight);
    return { width: width, height: height };
};
exports.default = exports.get_window_size;
//# sourceMappingURL=get_window_size.js.map