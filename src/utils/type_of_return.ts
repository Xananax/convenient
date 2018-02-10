/**
 * Useful typescript utility that allows
 * to dynamically get the type of return of a function
 * 
 * ```typescript
 * const hello = () => ({ hello: 'World' })
 * const helloReturnValue = type_of_return(hello)
 * type helloReturnType = typeof helloReturnValue // { hello: string }
 * // (helloReturnValue will be null)
 * ```
 * see https://github.com/kube/returnof
 * 
 * @param fn 
 */
export function type_of_return<T>(fn: () => T): T
export function type_of_return<A, T>(fn: (a: A) => T): T
export function type_of_return<A, T>(fn: (a: A) => T, a: A): T
export function type_of_return<A, B, T>(fn: (a: A, b: B) => T): T
export function type_of_return<A, B, T>(fn: (a: A, b: B) => T, a: A): T
export function type_of_return<A, B, T>(fn: (a: A, b: B) => T, a: A, b: B): T
export function type_of_return<A, B, C, T>(fn: (a: A, b: B, c: C) => T): T
export function type_of_return<A, B, C, T>(fn: (a: A, b: B, c: C) => T, a: A): T
export function type_of_return<A, B, C, T>(fn: (a: A, b: B, c: C) => T, a: A, b: B): T
export function type_of_return<A, B, C, T>(fn: (a: A, b: B, c: C) => T, a: A, b: B, c: C): T
export function type_of_return<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T): T
export function type_of_return<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A): T
export function type_of_return<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A, b: B): T
export function type_of_return<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A, b: B, c: C): T
export function type_of_return<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A, b: B, c: C, d: D): T
export function type_of_return() { return null }

export default type_of_return