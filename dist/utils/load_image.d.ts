import { Orientation } from './get_image_orientation';
export interface ImageLoadReturnJSON {
    width: number;
    height: number;
    url: string;
    ratioWidth: number;
    ratioHeight: number;
    orientation: Orientation;
}
export interface ImageLoadReturn extends ImageLoadReturnJSON {
    image: HTMLImageElement;
    toJSON: () => ImageLoadReturnJSON;
}
/**
 * returns a promise with a loaded image and a few useful parameters,
 * such as width, height, ratio, and orientation
 *
 * This function has a custom toJSON method that removes non-serializable data
 * @param src
 */
export declare const load_image: (src: string) => Promise<ImageLoadReturn>;
