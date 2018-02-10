export interface Arity1<A, B> {
    (a: A): B;
}
export declare function pipe<A, B>(f: Arity1<A, B>): Arity1<A, B>;
export declare function pipe<A, B, C>(g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, C>;
export declare function pipe<A, B, C, D>(h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, D>;
export declare function pipe<A, B, C, D, E>(i: Arity1<D, E>, h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, E>;
export declare function pipe<A, B, C, D, E, F>(j: Arity1<E, F>, i: Arity1<D, E>, h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, F>;
export declare const pipe1: <A, B>(f: Arity1<A, B>) => Arity1<A, B>;
export declare const pipe2: <A, B, C>(g: Arity1<B, C>, f: Arity1<A, B>) => Arity1<A, C>;
export declare const pipe3: <A, B, C, D>(h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>) => Arity1<A, D>;
