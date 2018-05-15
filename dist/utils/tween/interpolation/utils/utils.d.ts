export declare const interpolation_utils: {
    bernstein: (n: number, i: number, fc?: (n: number) => number) => number;
    catmull_rom: (p0: number, p1: number, p2: number, p3: number, t: number) => number;
    linear: (p0: number, p1: number, t: number) => number;
    factorial: (a?: number[]) => (n: number) => number;
};
export default interpolation_utils;
