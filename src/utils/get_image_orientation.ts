import { is_numeric } from './is_numeric';

export type Orientation = 'portrait' | 'landscape' | 'square' | 'unknown'

export const portrait = 'portrait';
export const landscape = 'landscape';
export const square = 'square';
export const unknown = 'unknown';

export const get_image_orientation = 
  ( x: number | string, y: number | string):Orientation =>
  ( x && y && is_numeric(x) && is_numeric(y)
  ? ( x == y 
    ? square 
    : ( y > x 
      ? portrait 
      : landscape
      )
    )
  : unknown
  )

export default get_image_orientation