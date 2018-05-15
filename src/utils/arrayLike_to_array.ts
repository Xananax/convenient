
export const arrayLike_to_array = 
  <T>
  ( thing: {[ i: number ]: T, length: number } | Iterable<T> ): T[] =>
  ( Array.prototype.slice.call(thing)
  )