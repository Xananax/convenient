export declare type ArrayEnough<T> = ArrayLike<T> | Iterable<T>;
/**
 * Checks if the passed object is iterable
 * @param obj
 */
export declare const is_arrayLike: (obj: any) => obj is ArrayEnough<any>;
export default is_arrayLike;
