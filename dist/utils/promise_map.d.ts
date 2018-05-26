export interface STOP {
    stop: true;
}
export declare const stop: STOP;
export interface PromiseMapper<T> {
    <O extends {}, K extends keyof O>(value: O[K], key: K, obj: O, stop: STOP): T | undefined | STOP | Promise<T | undefined | STOP>;
}
/**
 * Async property mapper which runs every property of an object
 * through a mapper function, and returns a new object with
 * mapped properties.
 * The mapper has the following signature:
 *
 * ```js
 * ( value, key, obj, stop ) => newValue | undefined | stop
 * ```
 *
 * if the mapper returns nothing (`undefined`) for a value, this
 * value will be skipped. If it returns the special `stop` value,
 * all subsequent values will be skipped
 *
 * If all keys are skipped, the returned object is `null`.
 *
 * @param observer
 * @param obj
 */
export declare const promise_map: <T, O extends {}, K extends keyof O>(observer: PromiseMapper<T>, obj: O) => Promise<{ [P in K]?: T | undefined; } | null>;
export default promise_map;
