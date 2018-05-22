/**
 * Capitalizes the first letter of a string. Does *not* capitalize each word!
 * @param sentence 
 */
export const capitalize_sentence = 
  ( sentence?: string ) =>
  ( sentence
  ? sentence[0].toUpperCase() + sentence.slice(1)
  : ''
  )

export default capitalize_sentence