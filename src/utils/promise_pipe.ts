import { identity } from './identity'

export interface MaybePromiseArity1<A, B> 
  { (a: A): B | Promise<B>
  }

export interface Promised<A, B>
  { (a: A): Promise<B>
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
export function promise_pipe<A, B>(fn1: MaybePromiseArity1<A, B>): Promised<A, B>
export function promise_pipe<A, B, C> (fn1: MaybePromiseArity1<A, B>, fn2: MaybePromiseArity1<B, C>): Promised<A, C>
// tslint:disable-next-line:max-line-length
export function promise_pipe<A, B, C, D> (fn1: MaybePromiseArity1<A, B>, fn2: MaybePromiseArity1<B, C>, fn3: MaybePromiseArity1<C, D>): Promised<A, D>
// tslint:disable-next-line:max-line-length
export function promise_pipe<A, B, C, D, E> (fn1: MaybePromiseArity1<A, B>, fn2: MaybePromiseArity1<B, C>, fn3: MaybePromiseArity1<C, D>, fn4: MaybePromiseArity1<D, E>): Promised<A, E>
// tslint:disable-next-line:max-line-length
export function promise_pipe<A, B, C, D, E, F> (fn1: MaybePromiseArity1<A, B>, fn2: MaybePromiseArity1<B, C>, fn3: MaybePromiseArity1<C, D>, fn4: MaybePromiseArity1<D, E>, fn5: MaybePromiseArity1<E, F>): Promised<A, F>
export function promise_pipe
  // tslint:disable-next-line:no-any
  ( ...fns: MaybePromiseArity1<any, any>[] ): Promised<any, any> 
  { switch (fns.length)
    { case 0: return identity 
    ; case 1: return promise_pipe1(fns[0])
    ; case 2: return promise_pipe2(fns[0], fns[1])
    ; case 3: return promise_pipe3(fns[0], fns[1], fns[2])
    ; case 4: return promise_pipe4(fns[0], fns[1], fns[2], fns[3])
    ; case 5: return promise_pipe5(fns[0], fns[1], fns[2], fns[3], fns[4])
    ; default: break
    }
  ; const piped = 
    (arg: any) => 
    fns.reduce( ( prev, fn ) =>  prev.then(fn) , Promise.resolve(arg) )
  ; return piped
  }

export const promise_pipe1 = 
  <A, B>
  (f: MaybePromiseArity1<A, B>): Promised<A, B> => 
  (a: A): Promise<B> => 
  Promise.resolve(a).then(f)

export const promise_pipe2 =
  <A, B, C>
  ( g: MaybePromiseArity1<A, B>
  , f: MaybePromiseArity1<B, C>
  ): Promised<A, C> =>
  (a: A): Promise<C> => 
  Promise.resolve(a).then(g).then(f)

export const promise_pipe3 = 
  <A, B, C, D> 
  ( h: MaybePromiseArity1<A, B>
  , g: MaybePromiseArity1<B, C>
  , f: MaybePromiseArity1<C, D>
  ): Promised<A, D> =>
  (a: A): Promise<D> =>
  Promise.resolve(a).then(h).then(g).then(f)

export const promise_pipe4 = 
  <A, B, C, D, E>
  ( i: MaybePromiseArity1<A, B>
  , h: MaybePromiseArity1<B, C>
  , g: MaybePromiseArity1<C, D>
  , f: MaybePromiseArity1<D, E>
  ): Promised<A, E> => 
  (a: A): Promise<E> =>
  Promise.resolve(a).then(i).then(h).then(g).then(f)

export const promise_pipe5 = 
  <A, B, C, D, E, F>
  ( j: MaybePromiseArity1<A, B>
  , i: MaybePromiseArity1<B, C>
  , h: MaybePromiseArity1<C, D>
  , g: MaybePromiseArity1<D, E>
  , f: MaybePromiseArity1<E, F>
  ): Promised<A, F> =>
  (a: A): Promise<F> =>
  Promise.resolve(a).then(j).then(i).then(h).then(g).then(f)