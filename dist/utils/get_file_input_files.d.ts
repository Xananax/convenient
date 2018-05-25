/**
 * Returns an array of files for a given FileList, or null if the array is empty
 * @param files a FileList, presumably from a file input component
 * @param first if true, will only return the first file
 */
export declare function fileList_to_array(files: FileList, first?: boolean): File[] | null;
export declare function fileList_to_array(files: FileList, first: true): File | null;
export declare function fileList_to_array(files: FileList, first: false): File[] | null;
export declare const empty_files: File[];
export interface HTMLInputElementFile extends HTMLInputElement {
    type: 'file';
}
export interface HTMLInputElementFileMultiple extends HTMLInputElementFile {
    multiple: true;
}
export interface HTMLInputElementFileSingle extends HTMLInputElementFile {
    multiple: false;
}
/**
 * extract files from the input. Returns a single file if the input doesn't have the 'multiple' flag.
 * Returns null if no files were found
 * @param input a file input
 */
export declare function get_file_input_files(input: HTMLInputElementFileSingle): File;
export declare function get_file_input_files(input: HTMLInputElementFileMultiple): File[];
export declare function get_file_input_files(input: HTMLInputElementFile): File[] | File;
export default get_file_input_files;
