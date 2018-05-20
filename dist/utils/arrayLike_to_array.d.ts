/**
 * Transforms any list (NodeList, FileList, ...) to an array
 * @param listLike anything that is iterable
 */
export declare const arrayLike_to_array: <T>(listLike: ArrayLike<T> | Iterable<T>) => T[];
export default arrayLike_to_array;
