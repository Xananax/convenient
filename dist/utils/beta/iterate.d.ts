export interface MapFunction<T, V> {
    (value: T, key: string | number, obj: Iteratable<T>): V;
}
export interface TakesMap<V> {
    (map: MapFunction<any, V>): V[];
}
export declare type Iteratable<T> = T[] | {
    [key: string]: T;
};
export declare function iterate<T>(o: Iteratable<T>): TakesMap<any>;
export declare function iterate<T, V>(o: Iteratable<T>, map: MapFunction<T, V>): V[];
export default iterate;
