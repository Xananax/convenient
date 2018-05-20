export declare type Orientation = 'portrait' | 'landscape' | 'square' | 'unknown';
export declare const portrait: Orientation;
export declare const landscape: Orientation;
export declare const square: Orientation;
export declare const unknown: Orientation;
/**
 * Returns an orientation string for a given width and height
 * @param width
 * @param height
 */
export declare const get_image_orientation: (width: string | number, height: string | number) => Orientation;
export default get_image_orientation;
