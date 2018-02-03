export declare enum SnapType {
    MID = 0,
    MIN = 1,
    MAX = 2,
}
export declare const snap_mid: (resolution: number, num: number) => number;
export declare const snap_min: (resolution: number, num: number) => number;
export declare const snap_max: (resolution: number, num: number) => number;
/**
 * Returns the the nearest grid resolution less than or equal to the number.
 *
 * @param {Number} resolution The grid resolution to snap to.
 * @param {Number} number The cursor to align.
 * @returns The nearest multiple of resolution lower than the number.
 * @type Number
 */
export declare const snap: (resolution: number, num: number, type?: SnapType) => number;
export default snap;
