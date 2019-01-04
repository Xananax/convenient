/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * @param max 
 * @param min 
 * @param rand 
 */
export const get_random_int_in_range  = 
  ( max: number, min: number = 0, rand: () => number = Math.random ) =>
  ( Math.floor( rand() * ( max - min + 1 ) ) + min )

export default get_random_int_in_range