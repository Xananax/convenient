export interface Arity1<A, B> {
    (a: A): B;
}
export declare function pipe<A, B>(fn1: Arity1<A, B>): Arity1<A, B>;
export declare function pipe<A, B, C>(fn1: Arity1<A, B>, fn2: Arity1<B, C>): Arity1<A, C>;
export declare function pipe<A, B, C, D>(fn1: Arity1<A, B>, fn2: Arity1<B, C>, fn3: Arity1<C, D>): Arity1<A, D>;
export declare function pipe<A, B, C, D, E>(fn1: Arity1<A, B>, fn2: Arity1<B, C>, fn3: Arity1<C, D>, fn4: Arity1<D, E>): Arity1<A, E>;
export declare function pipe<A, B, C, D, E, F>(fn1: Arity1<A, B>, fn2: Arity1<B, C>, fn3: Arity1<C, D>, fn4: Arity1<D, E>, fn5: Arity1<E, F>): Arity1<A, F>;
export declare const pipe1: <A, B>(f: Arity1<A, B>) => Arity1<A, B>;
export declare const pipe2: <A, B, C>(g: Arity1<A, B>, f: Arity1<B, C>) => Arity1<A, C>;
export declare const pipe3: <A, B, C, D>(h: Arity1<A, B>, g: Arity1<B, C>, f: Arity1<C, D>) => Arity1<A, D>;
