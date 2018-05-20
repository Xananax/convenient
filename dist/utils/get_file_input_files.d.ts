/**
 * Returns an array of files for a given FileList, or null if the array is empty
 * @param files a FileList, presumably from a file input component
 * @param first if true, will only return the first file
 */
export declare function fileList_to_array(files: FileList, first?: boolean): File[] | null;
export declare function fileList_to_array(files: FileList, first: true): File | null;
export declare function fileList_to_array(files: FileList, first: false): File[] | null;
export declare const empty_files: File[];
/**
 * extract files from the input. Returns a single file if the input doesn't have the 'multiple' flag.
 * Returns null if no files were found
 * @param input a file input
 */
export declare const get_file_input_files: (input: HTMLInputElement) => File[] | null;
export default get_file_input_files;
