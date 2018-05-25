/**
 * Returns the value for a given field
 *  - files inputs will return an array of files (rather than a `FileList`)
 *  - if a file input does not have the `multiple` property, it will return a single file
 *  - checkboxes will return booleans
 *  - number and range inputs will return floats (i.e., numbers)
 *  - any field with an undefined value, or without a name will be skipped and not serialized
 *  - any button will be skipped
 * @param input
 */
export declare const get_input_value: (input: HTMLInputElement) => string | number | boolean | File | File[] | null;
export default get_input_value;
