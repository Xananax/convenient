
/**
 * Transforms any list (NodeList, FileList, ...) to an array
 * @param listLike anything that is iterable 
 */
export const arrayLike_to_array = 
  <T>
  ( listLike: ArrayLike<T> | Iterable<T> ): T[] =>
  ( Array.prototype.slice.call(listLike)
  )

export default arrayLike_to_array