/**
 * Capitalizes the first letter of a string. Does *not* capitalise each word!
 * @param sentence 
 */
export const capitalize_sentence = 
  ( sentence: string ) =>
  ( sentence[0].toUpperCase() + sentence.slice(1)
  )

export default capitalize_sentence