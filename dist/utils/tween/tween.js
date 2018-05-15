"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var normalize_elapsed = function (time, start_time, duration) {
    var elapsed = (time - start_time) / duration;
    return ((duration === 0 || elapsed > 1)
        ? 1
        : elapsed);
};
exports.tween = function (start_time, duration, end_value, start_value) {
    if (start_value === void 0) { start_value = 0; }
    return ((end_value instanceof Array)
        ? function (ease, interpolate) {
            return function (time) {
                return (interpolate(end_value, ease(normalize_elapsed(time, start_time, duration))));
            };
        }
        : function (ease) {
            return function (time) {
                return (start_value + (end_value - start_value) * ease(normalize_elapsed(time, start_time, duration)));
            };
        });
};
exports.default = exports.tween;
//# sourceMappingURL=tween.js.map