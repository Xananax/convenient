/**
 * restricts the frequency of calls that a function receives to a fixed time interval
 * @param fn
 * @param threshold
 */
export declare const throttle: <F extends Function>(fn: F, threshold?: number) => F;
