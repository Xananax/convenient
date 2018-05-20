export interface MaybePromiseArity1<A, B> {
    (a: A): B | Promise<B>;
}
export interface Promised<A, B> {
    (a: A): Promise<B>;
}
/**
 * Chains functions together. Accepts promises and non-promises. For example:
 * ```js
 * const add = ( n:number ) => n+10
 * const multiply = ( n:number ) => n*100
 * const happy = ( n:string|number ) => `happy ${n}`
 * const birthday = ( s:string ) => `${s} birthday!`
 * const happyBirthday = pipe(add,multiply,happy,birthday)
 * happyBirthday(5).then(s=>console.log(s)) // happy 150 birthday!
 * ```
 * @param ...fns any number of functions of arity 1
 */
export declare function promise_pipe<A, B>(fn1: MaybePromiseArity1<A, B>): Promised<A, B>;
export declare function promise_pipe<A, B, C>(fn1: MaybePromiseArity1<A, B>, fn2: MaybePromiseArity1<B, C>): Promised<A, C>;
export declare function promise_pipe<A, B, C, D>(fn1: MaybePromiseArity1<A, B>, fn2: MaybePromiseArity1<B, C>, fn3: MaybePromiseArity1<C, D>): Promised<A, D>;
export declare function promise_pipe<A, B, C, D, E>(fn1: MaybePromiseArity1<A, B>, fn2: MaybePromiseArity1<B, C>, fn3: MaybePromiseArity1<C, D>, fn4: MaybePromiseArity1<D, E>): Promised<A, E>;
export declare function promise_pipe<A, B, C, D, E, F>(fn1: MaybePromiseArity1<A, B>, fn2: MaybePromiseArity1<B, C>, fn3: MaybePromiseArity1<C, D>, fn4: MaybePromiseArity1<D, E>, fn5: MaybePromiseArity1<E, F>): Promised<A, F>;
export declare const promise_pipe1: <A, B>(f: MaybePromiseArity1<A, B>) => Promised<A, B>;
export declare const promise_pipe2: <A, B, C>(g: MaybePromiseArity1<A, B>, f: MaybePromiseArity1<B, C>) => Promised<A, C>;
export declare const promise_pipe3: <A, B, C, D>(h: MaybePromiseArity1<A, B>, g: MaybePromiseArity1<B, C>, f: MaybePromiseArity1<C, D>) => Promised<A, D>;
