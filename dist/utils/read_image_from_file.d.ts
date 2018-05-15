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
/**
 * If the provided file is an image, this function will load the image
 * and return a set of useful properties.
 * If not, it will return the file, with extracted name and extension strings
 *
 * This function has a custom toJSON method that removes non-serializable data
 * @param file
 */
export declare const readImageFromFile: (file: File) => Promise<ImageReadReturnNoImage | ImageReadReturn>;
