export declare type Orientation = 'portrait' | 'landscape' | 'square' | 'unknown';
export declare const portrait: Orientation;
export declare const landscape: Orientation;
export declare const square: Orientation;
export declare const unknown: Orientation;
export declare const get_image_orientation: (x: string | number, y: string | number) => Orientation;
export default get_image_orientation;
