"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_env_browser_1 = require("./is_env_browser");
var server_size = { width: 0,
    height: 0
};
/**
 *
 */
exports.get_window_size = is_env_browser_1.is_env_browser ?
    function () {
        var width = (window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth);
        var height = (window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight);
        return { width: width, height: height };
    } : function () { return server_size; };
exports.default = exports.get_window_size;
//# sourceMappingURL=get_window_size.js.map