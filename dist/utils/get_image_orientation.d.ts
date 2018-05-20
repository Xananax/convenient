export declare type Orientation = 'portrait' | 'landscape' | 'square' | 'unknown';
export declare const ORIENTATION_PORTRAIT: Orientation;
export declare const ORIENTATION_LANDSCAPE: Orientation;
export declare const ORIENTATION_SQUARE: Orientation;
export declare const ORIENTATION_UNKNOWN: Orientation;
/**
 * Returns an orientation string for a given width and height
 * @param width
 * @param height
 */
export declare const get_image_orientation: (width: string | number, height: string | number) => Orientation;
export default get_image_orientation;
