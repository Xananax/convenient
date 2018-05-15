"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_op_1 = require("./no_op");
var passive_events_supported = false;
exports.passive_events_supported = passive_events_supported;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function () {
            exports.passive_events_supported = passive_events_supported = true;
        }
    });
    window.addEventListener('test', no_op_1.no_op, opts);
}
catch (e) {
    //
}
window.removeEventListener('test', no_op_1.no_op);
//# sourceMappingURL=is_passive_events_supported.js.map