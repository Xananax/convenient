"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SnapType;
(function (SnapType) {
    SnapType[SnapType["MID"] = 0] = "MID";
    SnapType[SnapType["MIN"] = 1] = "MIN";
    SnapType[SnapType["MAX"] = 2] = "MAX";
})(SnapType = exports.SnapType || (exports.SnapType = {}));
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
    if (type === void 0) { type = SnapType.MID; }
    return (type === SnapType.MAX
        ? exports.snap_max(resolution, num)
        : (type === SnapType.MIN
            ? exports.snap_min(resolution, num)
            : exports.snap_mid(resolution, num)));
};
exports.default = exports.snap;
//# sourceMappingURL=snap.js.map