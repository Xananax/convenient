import { identity } from './identity'

export interface Arity1<A, B> {(a: A):B};

export function pipe<A, B>(f: Arity1<A, B>): Arity1<A, B>;
export function pipe<A, B, C> (g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, C>;
export function pipe<A, B, C, D> (h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, D>;
export function pipe<A, B, C, D, E> (i: Arity1<D, E>, h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, E>;
export function pipe<A, B, C, D, E, F> (j: Arity1<E, F>, i: Arity1<D, E>, h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, F>;
export function pipe(...fns:Arity1<any,any>[]) 
  { switch (fns.length)
    { case 0: return identity 
    ; case 1: return pipe1(fns[0])
    ; case 2: return pipe2(fns[0], fns[1])
    ; case 3: return pipe3(fns[0], fns[1], fns[2])
    ; case 4: return pipe4(fns[0], fns[1], fns[2], fns[3])
    ; case 5: return pipe5(fns[0], fns[1], fns[2], fns[3], fns[4])
    }
    return fns.reduce(pipe2)
  }

export const pipe1 = 
  <A, B>
  (f: Arity1<A, B>): Arity1<A, B> => 
  (a: A): B => 
  f(a);

export const pipe2 =
  <A, B, C>
  ( g: Arity1<B, C>
  , f: Arity1<A, B>
  ): Arity1<A, C> =>
  (a: A): C => g(f(a));

export const pipe3 = 
  <A, B, C, D> 
  ( h: Arity1<C, D>
  , g: Arity1<B, C>
  , f: Arity1<A, B>
  ): Arity1<A, D> =>
  (a: A): D =>
  h(g(f(a)));

const pipe4 = 
  <A, B, C, D, E>
  ( i: Arity1<D, E>
  , h: Arity1<C, D>
  , g: Arity1<B, C>
  , f: Arity1<A, B>
  ): Arity1<A, E> => 
  (a: A): E =>
  i(h(g(f(a))));

const pipe5 = 
  <A, B, C, D, E, F>
  ( j: Arity1<E, F>
  , i: Arity1<D, E>
  , h: Arity1<C, D>
  , g: Arity1<B, C>
  , f: Arity1<A, B>
  ): Arity1<A, F> =>
  (a: A): F =>
  j(i(h(g(f(a)))));