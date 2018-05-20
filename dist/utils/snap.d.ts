export declare enum SNAP_TYPE {
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
 * @param resolution The grid resolution to snap to.
 * @param number The cursor to align.
 * @returns The nearest multiple of resolution lower than the number.
 * @type Number
 */
export declare const snap: (resolution: number, num: number, type?: SNAP_TYPE) => number;
export default snap;
