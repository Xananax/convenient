import { is_numeric } from './is_numeric';

export type Orientation = 'portrait' | 'landscape' | 'square' | 'unknown'

export const portrait: Orientation = 'portrait';
export const landscape: Orientation = 'landscape';
export const square: Orientation = 'square';
export const unknown: Orientation = 'unknown';

/**
 * Returns an orientation string for a given width and height
 * @param width 
 * @param height 
 */
export const get_image_orientation = 
  ( width: number | string, height: number | string): Orientation =>
  ( width && height && is_numeric(width) && is_numeric(height)
  ? ( width === height 
    ? square 
    : ( height > width 
      ? portrait 
      : landscape
      )
    )
  : unknown
  )

export default get_image_orientation