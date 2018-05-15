import { is_numeric } from './is_numeric';

export type Orientation = 'portrait' | 'landscape' | 'square' | 'unknown'

export const portrait: Orientation = 'portrait';
export const landscape: Orientation = 'landscape';
export const square: Orientation = 'square';
export const unknown: Orientation = 'unknown';

export const get_image_orientation = 
  ( x: number | string, y: number | string): Orientation =>
  ( x && y && is_numeric(x) && is_numeric(y)
  ? ( x === y 
    ? square 
    : ( y > x 
      ? portrait 
      : landscape
      )
    )
  : unknown
  )

export default get_image_orientation