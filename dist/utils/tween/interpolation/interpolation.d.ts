export declare const utils: {
    bernstein: (n: number, i: number, fc?: (n: number) => number) => number;
    catmull_rom: (p0: number, p1: number, p2: number, p3: number, t: number) => number;
    linear: (p0: number, p1: number, t: number) => number;
    factorial: (a?: number[]) => (n: number) => number;
};
export interface InterpolationFunction {
    (v: any[], n: number): number;
}
export interface Interpolation {
    bezier: InterpolationFunction;
    catmull_rom: InterpolationFunction;
    linear: InterpolationFunction;
}
export declare const interpolation: Interpolation;
export default interpolation;
