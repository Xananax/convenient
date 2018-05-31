import { STOP, SKIP } from './symbols';
export interface PromiseQueueMapper<T, R> {
    (input: T, index: number, arr: T[], stop: STOP, skip: SKIP): R | STOP | SKIP | Promise<R | STOP | SKIP>;
}
/**
 * Renders promises one by one, serially.
 * Each promise is passed to the map function.
 * If the map returns the special `SKIP` symbol, the current item is skipped
 * If the map returns the special `STOP` symbol, next items are skipped
 * If `skipErrors` is true (default), promises that return an error are skipped.
 * Of course, if any of the above is true, the final array will not map exactly with the entry array
 * @param things an array of anything
 * @param map a map to submit the array to
 * @param skipErrors if true, errors will be skipped, otherwise, they will not
 */
export declare function promise_queue<T, R>(things: T[], map: PromiseQueueMapper<T, R>, skipErrors: false): Promise<(R | Error)[]>;
export declare function promise_queue<T, R>(things: T[], map: PromiseQueueMapper<T, R>, skipErrors: true): Promise<R[]>;
export default promise_queue;
