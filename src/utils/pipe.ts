import { identity } from './identity'

export interface Arity1<A, B> 
  { (a: A): B
  }

/**
 * Chains functions together. For example:
 * ```js
 * const add = ( n:number ) => n+10
 * const multiply = ( n:number ) => n*100
 * const happy = ( n:string|number ) => `happy ${n}`
 * const birthday = ( s:string ) => `${s} birthday!`
 * const happyBirthday = pipe(add,multiply,happy,birthday)
 * console.log(happyBirthday(5)) // happy 150 birthday!
 * ```
 * @param ...fns any number of functions of arity 1
 */
export function pipe<A, B>(fn1: Arity1<A, B>): Arity1<A, B>
export function pipe<A, B, C> (fn1: Arity1<A, B>, fn2: Arity1<B, C>): Arity1<A, C>
export function pipe<A, B, C, D> (fn1: Arity1<A, B>, fn2: Arity1<B, C>, fn3: Arity1<C, D>): Arity1<A, D>
// tslint:disable-next-line:max-line-length
export function pipe<A, B, C, D, E> (fn1: Arity1<A, B>, fn2: Arity1<B, C>, fn3: Arity1<C, D>, fn4: Arity1<D, E>): Arity1<A, E>
// tslint:disable-next-line:max-line-length
export function pipe<A, B, C, D, E, F> (fn1: Arity1<A, B>, fn2: Arity1<B, C>, fn3: Arity1<C, D>, fn4: Arity1<D, E>, fn5: Arity1<E, F>): Arity1<A, F>
export function pipe
  // tslint:disable-next-line:no-any
  ( ...fns: Arity1<any, any>[] ) 
  { switch (fns.length)
    { case 0: return identity 
    ; case 1: return pipe1(fns[0])
    ; case 2: return pipe2(fns[0], fns[1])
    ; case 3: return pipe3(fns[0], fns[1], fns[2])
    ; case 4: return pipe4(fns[0], fns[1], fns[2], fns[3])
    ; case 5: return pipe5(fns[0], fns[1], fns[2], fns[3], fns[4])
    ; default: break
    }
    return fns.reduce(pipe2)
  }

export const pipe1 = 
  <A, B>
  (f: Arity1<A, B>): Arity1<A, B> => 
  (a: A): B => 
  f(a)

export const pipe2 =
  <A, B, C>
  ( g: Arity1<A, B>
  , f: Arity1<B, C>
  ): Arity1<A, C> =>
  (a: A): C => f(g(a))

export const pipe3 = 
  <A, B, C, D> 
  ( h: Arity1<A, B>
  , g: Arity1<B, C>
  , f: Arity1<C, D>
  ): Arity1<A, D> =>
  (a: A): D =>
  f(g(h(a)))

export const pipe4 = 
  <A, B, C, D, E>
  ( i: Arity1<A, B>
  , h: Arity1<B, C>
  , g: Arity1<C, D>
  , f: Arity1<D, E>
  ): Arity1<A, E> => 
  (a: A): E =>
  f(g(h(i(a))))

export const pipe5 = 
  <A, B, C, D, E, F>
  ( j: Arity1<A, B>
  , i: Arity1<B, C>
  , h: Arity1<C, D>
  , g: Arity1<D, E>
  , f: Arity1<E, F>
  ): Arity1<A, F> =>
  (a: A): F =>
  f(g(h(i(j(a)))))

export default pipe