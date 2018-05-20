"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_env_browser_1 = require("./is_env_browser");
var no_op_1 = require("./no_op");
/**
 * If true, the browser supports passive events
 */
var passive_events_supported = false;
exports.passive_events_supported = passive_events_supported;
if (is_env_browser_1.is_env_browser) {
    try {
        var opts = Object.defineProperty({}, 'passive', { get: function () {
                exports.passive_events_supported = passive_events_supported = true;
            }
        });
        window.addEventListener('test', no_op_1.no_op, opts);
    }
    catch (e) { //
    }
    window.removeEventListener('test', no_op_1.no_op);
}
//# sourceMappingURL=is_passive_events_supported.js.map