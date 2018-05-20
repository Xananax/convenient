import { is_numeric } from './is_numeric';

export type Orientation = 'portrait' | 'landscape' | 'square' | 'unknown'

export const ORIENTATION_PORTRAIT: Orientation = 'portrait';
export const ORIENTATION_LANDSCAPE: Orientation = 'landscape';
export const ORIENTATION_SQUARE: Orientation = 'square';
export const ORIENTATION_UNKNOWN: Orientation = 'unknown';

/**
 * Returns an orientation string for a given width and height
 * @param width 
 * @param height 
 */
export const get_image_orientation = 
  ( width: number | string, height: number | string): Orientation =>
  ( width && height && is_numeric(width) && is_numeric(height)
  ? ( width === height 
    ? ORIENTATION_SQUARE 
    : ( height > width 
      ? ORIENTATION_PORTRAIT 
      : ORIENTATION_LANDSCAPE
      )
    )
  : ORIENTATION_UNKNOWN
  )

export default get_image_orientation