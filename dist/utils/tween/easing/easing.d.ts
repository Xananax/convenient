export interface EasingEquation {
    (n: number): number;
}
export interface EasingStack {
    In: EasingEquation;
    Out: EasingEquation;
    InOut: EasingEquation;
}
export interface Easing {
    back: EasingStack;
    bounce: EasingStack;
    circular: EasingStack;
    cubic: EasingStack;
    elastic: EasingStack;
    exponential: EasingStack;
    linear: EasingStack;
    quadratic: EasingStack;
    quartic: EasingStack;
    quintic: EasingStack;
    sinusoidal: EasingStack;
}
export declare const easing: Easing;
export default easing;
