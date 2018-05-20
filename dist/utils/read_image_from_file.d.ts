import { ImageLoadReturn, ImageLoadReturnJSON } from './load_image';
export interface ImageReadReturnJSON {
    name: string;
    extension: string;
}
export interface ImageReadReturnNoImage extends ImageReadReturnJSON {
    file: File;
    toJSON: () => ImageReadReturnJSON;
}
export interface ImageReadReturn extends ImageLoadReturn {
    free: () => void;
    file: File;
    name: string;
    extension: string;
    toJSON: () => ImageReadReturnJSON & ImageLoadReturnJSON;
}
export declare const is_image: (file: File, extension: string) => boolean;
/**
 * If the provided file is an image, this function will load the image
 * and return a set of useful properties.
 * If not, it will return the file, with extracted name and extension strings
 *
 * This function has a custom toJSON method that removes non-serializable data
 * @param file
 * @param isImage a function that receives the file and the extension, and has to return a boolean if the provided file is an image
 * @param useDecode if true, will use `img.decode()` to prevent the browser from slowing down while loading the image
 */
export declare const readImageFromFile: (file: File, isImage?: (file: File, extension: string) => boolean, useDecode?: boolean) => Promise<ImageReadReturnNoImage | ImageReadReturn>;