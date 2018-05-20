import { Orientation } from './get_image_orientation';
export interface HTMLImageElementWithDecode extends HTMLImageElement {
    decode: () => Promise<null>;
}
export interface ImageLoadReturnJSON {
    width: number;
    height: number;
    url: string;
    ratioWidth: number;
    ratioHeight: number;
    orientation: Orientation;
}
export interface ImageLoadReturn extends ImageLoadReturnJSON {
    image: HTMLImageElement | HTMLImageElementWithDecode;
    toJSON: () => ImageLoadReturnJSON;
}
/**
 * returns a promise with a loaded image and a few useful parameters,
 * such as width, height, ratio, and orientation
 *
 * This function has a custom toJSON method that removes non-serializable data
 * @param src
 * @param useDecode if true, will use `img.decode()` to prevent the browser from slowing down while loading the image
 */
export declare const load_image: (src: string, useDecode?: boolean) => Promise<ImageLoadReturn>;
