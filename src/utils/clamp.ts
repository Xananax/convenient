/**
 * Clamps a number between the two provided boundaries
 * @param max 
 * @param min 
 */
export const clamp =
  ( max: number, min: number = 0 ) => 
  ( num: number ) =>
  ( Math.min( Math.max(num, min), max )
  )

export default clamp