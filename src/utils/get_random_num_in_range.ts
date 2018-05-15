/**
 * Returns a random number between min (inclusive) and max (inclusive)
 * @param max 
 * @param min 
 * @param rand 
 */
export const get_random_num_in_range  = 
  ( max: number, min: number = 0, rand: () => number = Math.random ) =>
  ( rand() * (max - min) + min )

export default get_random_num_in_range
