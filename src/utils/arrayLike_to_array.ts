
/**
 * Transforms any list (NodeList, FileList, ...) to an array
 * @param listLike anything that is iterable 
 */
export const arrayLike_to_array = 
  <T>
  ( listLike: {[ i: number ]: T, length: number } | Iterable<T> ): T[] =>
  ( Array.prototype.slice.call(listLike)
  )