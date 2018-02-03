export declare type Orientation = 'portrait' | 'landscape' | 'square' | 'unknown';
export declare const portrait = "portrait";
export declare const landscape = "landscape";
export declare const square = "square";
export declare const unknown = "unknown";
export declare const get_image_orientation: (x: string | number, y: string | number) => Orientation;
export default get_image_orientation;
