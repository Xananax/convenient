export interface Resolve<T> {
    (value?: T | PromiseLike<T>): void;
}
export interface Reject {
    (reason?: any): void;
}
export interface DeferredPromise<T> extends Promise<T> {
    resolve: Resolve<T>;
    reject: Reject;
}
export declare const deferred_promise: () => DeferredPromise<void>;
export default deferred_promise;
