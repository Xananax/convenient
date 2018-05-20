"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SNAP_TYPE;
(function (SNAP_TYPE) {
    SNAP_TYPE[SNAP_TYPE["MID"] = 0] = "MID";
    SNAP_TYPE[SNAP_TYPE["MIN"] = 1] = "MIN";
    SNAP_TYPE[SNAP_TYPE["MAX"] = 2] = "MAX";
})(SNAP_TYPE = exports.SNAP_TYPE || (exports.SNAP_TYPE = {}));
exports.snap_mid = function (resolution, num) {
    return (Math.round(num / resolution) * resolution);
};
exports.snap_min = function (resolution, num) {
    return (Math.floor(num / resolution) * resolution);
};
exports.snap_max = function (resolution, num) {
    return (Math.ceil(num / resolution) * resolution);
};
/**
 * Returns the the nearest grid resolution less than or equal to the number.
 *
 * @param resolution The grid resolution to snap to.
 * @param number The cursor to align.
 * @returns The nearest multiple of resolution lower than the number.
 * @type Number
 */
exports.snap = function (resolution, num, type) {
    if (type === void 0) { type = SNAP_TYPE.MID; }
    return (type === SNAP_TYPE.MAX
        ? exports.snap_max(resolution, num)
        : (type === SNAP_TYPE.MIN
            ? exports.snap_min(resolution, num)
            : exports.snap_mid(resolution, num)));
};
exports.default = exports.snap;
//# sourceMappingURL=snap.js.map